import { getStore } from "@netlify/blobs";
import { randomBytes, createHash, timingSafeEqual } from "node:crypto";

const STATE_KEY = "app-state-v2";
const LEGACY_STATE_KEY = "app-state-v1";
const BACKUP_PREFIX = "backup/";
const SESSION_PREFIX = "session/";
const DEFAULT_ADMIN_LOGIN = "Umid";
const DEFAULT_PASSWORD_SHA256 = "c1f330d0aff31c1c87403f1e4347bcc21aff7c179908723535f2b31723702525";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12;

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store"
};

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...jsonHeaders, ...headers }
  });
}

function sha256(value) {
  return createHash("sha256").update(String(value)).digest("hex");
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a), "hex");
  const right = Buffer.from(String(b), "hex");
  return left.length === right.length && timingSafeEqual(left, right);
}

function normalizeText(value, fallback = "", maxLength = 200) {
  const text = typeof value === "string" ? value.trim() : "";
  return (text || fallback).slice(0, maxLength);
}

function toNonNegativeInt(value, fallback = 0) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(0, Math.floor(n));
}

function toNonNegativeNumber(value, fallback = 0) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(0, n);
}

function isIsoDate(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function uid(prefix) {
  return `${prefix}_${Date.now()}_${randomBytes(6).toString("hex")}`;
}

function defaultAdminState() {
  return {
    name: "Umid",
    role: "Sklad Admin",
    email: "admin@example.com",
    login: DEFAULT_ADMIN_LOGIN,
    status: "Faol",
    photo: ""
  };
}

function toPieces(product, qty, unit) {
  if (!product) return 0;
  return unit === "bag" ? qty * product.piecesPerBag : qty;
}

function normalizePersistedState(raw) {
  if (!raw || typeof raw !== "object") return null;

  const adminBase = defaultAdminState();
  const rawAdmin = raw.admin && typeof raw.admin === "object" ? raw.admin : {};
  const admin = {
    name: normalizeText(rawAdmin.name, adminBase.name, 80),
    role: normalizeText(rawAdmin.role, adminBase.role, 80),
    email: normalizeText(rawAdmin.email, adminBase.email, 120),
    login: DEFAULT_ADMIN_LOGIN,
    status: normalizeText(rawAdmin.status, adminBase.status, 80),
    photo: typeof rawAdmin.photo === "string" && rawAdmin.photo.startsWith("data:image/") ? rawAdmin.photo.slice(0, 700000) : ""
  };

  const products = Array.isArray(raw.products)
    ? raw.products
        .slice(0, 2000)
        .map((p) => {
          if (!p || typeof p !== "object") return null;
          const name = normalizeText(p.name, "", 180);
          if (!name) return null;
          return {
            id: normalizeText(p.id, "", 80) || uid("product"),
            name,
            piecesPerBag: Math.max(1, toNonNegativeInt(p.piecesPerBag, 1)),
            priceBag: toNonNegativeNumber(p.priceBag, 0),
            pricePiece: toNonNegativeNumber(p.pricePiece, 0)
          };
        })
        .filter(Boolean)
    : [];

  const seenProductIds = new Set();
  const uniqueProducts = products.filter((product) => {
    if (seenProductIds.has(product.id)) return false;
    seenProductIds.add(product.id);
    return true;
  });
  const productIds = new Set(uniqueProducts.map((p) => p.id));

  const drivers = Array.isArray(raw.drivers)
    ? raw.drivers
        .slice(0, 1000)
        .map((d) => {
          if (!d || typeof d !== "object") return null;
          const name = normalizeText(d.name, "", 120);
          if (!name) return null;
          return {
            id: normalizeText(d.id, "", 80) || uid("driver"),
            name,
            phone: normalizeText(d.phone, "", 80),
            vehicle: normalizeText(d.vehicle, "", 120),
            photo: typeof d.photo === "string" && d.photo.startsWith("data:image/") ? d.photo.slice(0, 700000) : ""
          };
        })
        .filter(Boolean)
    : [];

  const seenDriverIds = new Set();
  const uniqueDrivers = drivers.filter((driver) => {
    if (seenDriverIds.has(driver.id)) return false;
    seenDriverIds.add(driver.id);
    return true;
  });
  const driverIds = new Set(uniqueDrivers.map((d) => d.id));
  const allowedTypes = new Set(["incoming", "adjust_in", "adjust_out", "driver_out", "other_out", "driver_return"]);

  const movements = Array.isArray(raw.movements)
    ? raw.movements
        .slice(0, 50000)
        .map((m) => {
          if (!m || typeof m !== "object") return null;
          const type = normalizeText(m.type, "", 40);
          if (!allowedTypes.has(type)) return null;
          const productId = normalizeText(m.productId, "", 80);
          if (!productIds.has(productId)) return null;
          const unit = m.unit === "bag" ? "bag" : "piece";
          const qty = toNonNegativeInt(m.qty, 0);
          if (qty <= 0) return null;
          const driverId = normalizeText(m.driverId, "", 80);
          return {
            id: normalizeText(m.id, "", 80) || uid("mv"),
            date: isIsoDate(m.date) ? m.date : todayIso(),
            type,
            productId,
            unit,
            qty,
            pieces: 0,
            amount: toNonNegativeNumber(m.amount, 0),
            driverId: driverId && driverIds.has(driverId) ? driverId : null,
            note: normalizeText(m.note, "", 500),
            batchId: normalizeText(m.batchId, "", 120)
          };
        })
        .filter(Boolean)
    : [];

  movements.forEach((m) => {
    const p = uniqueProducts.find((x) => x.id === m.productId);
    m.pieces = p ? toPieces(p, m.qty, m.unit) : 0;
  });

  const initialStock = {};
  const rawInitialStock = raw.initialStock && typeof raw.initialStock === "object" ? raw.initialStock : {};
  uniqueProducts.forEach((p) => {
    initialStock[p.id] = toNonNegativeInt(rawInitialStock[p.id], 0);
  });

  const catalogVersion = normalizeText(raw.catalogVersion, "", 80);

  return { version: 2, admin, products: uniqueProducts, drivers: uniqueDrivers, movements, initialStock, catalogVersion };
}

function extractStoredState(parsed) {
  if (!parsed || typeof parsed !== "object") return { data: null, revision: 0, updatedAt: "" };
  if (parsed.data && typeof parsed.revision === "number") {
    return {
      data: normalizePersistedState(parsed.data),
      revision: Math.max(0, Math.floor(parsed.revision)),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : ""
    };
  }
  return { data: normalizePersistedState(parsed), revision: 0, updatedAt: "" };
}

async function readStoredState(store) {
  const raw = (await store.get(STATE_KEY)) || (await store.get(LEGACY_STATE_KEY));
  if (!raw) return { data: null, revision: 0, updatedAt: "" };
  try {
    return extractStoredState(JSON.parse(raw));
  } catch {
    return { data: null, revision: 0, updatedAt: "" };
  }
}

async function writeBackup(store, previous) {
  if (!previous?.data) return;
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  await store.set(`${BACKUP_PREFIX}${stamp}-${previous.revision}.json`, JSON.stringify(previous));
}

function authConfig() {
  return {
    login: process.env.ADMIN_LOGIN || DEFAULT_ADMIN_LOGIN,
    passwordHash: process.env.ADMIN_PASSWORD_HASH || DEFAULT_PASSWORD_SHA256,
    apiToken: process.env.API_TOKEN || ""
  };
}

async function createSession(store, login) {
  const token = randomBytes(32).toString("hex");
  const tokenHash = sha256(token);
  const expiresAt = Date.now() + SESSION_TTL_MS;
  await store.set(`${SESSION_PREFIX}${tokenHash}`, JSON.stringify({ login, expiresAt }));
  return { token, expiresAt };
}

async function isAuthorized(req, store) {
  const auth = req.headers.get("authorization") || "";
  const bearer = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  const config = authConfig();

  if (config.apiToken && bearer === config.apiToken) return true;
  if (!bearer) return false;

  const raw = await store.get(`${SESSION_PREFIX}${sha256(bearer)}`);
  if (!raw) return false;
  try {
    const session = JSON.parse(raw);
    return session && session.expiresAt > Date.now();
  } catch {
    return false;
  }
}

async function handleLogin(req, store) {
  let payload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "JSON noto'g'ri formatda." }, 400);
  }

  const login = normalizeText(payload?.login, "", 80);
  const password = typeof payload?.password === "string" ? payload.password : "";
  const config = authConfig();
  const passwordHash = sha256(password);

  if (login !== config.login || !safeEqual(passwordHash, config.passwordHash)) {
    return json({ error: "Login yoki parol noto'g'ri." }, 401);
  }

  const session = await createSession(store, login);
  const current = await readStoredState(store);
  return json({ ok: true, ...session, data: current.data, revision: current.revision, updatedAt: current.updatedAt });
}

export default async (req) => {
  try {
    const store = getStore("sklad-doctor-state");

    if (req.method === "POST") {
      return handleLogin(req, store);
    }

    if (!(await isAuthorized(req, store))) {
      return json({ error: "Avtorizatsiya kerak." }, 401);
    }

    if (req.method === "GET") {
      const current = await readStoredState(store);
      return json({ data: current.data, revision: current.revision, updatedAt: current.updatedAt });
    }

    if (req.method === "PUT") {
      let payload;
      try {
        payload = await req.json();
      } catch {
        return json({ error: "JSON noto'g'ri formatda." }, 400);
      }

      const clientRevision = Number(payload?.revision);
      const incomingData = payload?.data && typeof payload.data === "object" ? payload.data : payload;
      const normalized = normalizePersistedState(incomingData);
      if (!normalized) return json({ error: "Saqlash uchun to'g'ri ma'lumot yuboring." }, 400);

      const current = await readStoredState(store);
      if (Number.isFinite(clientRevision) && clientRevision !== current.revision) {
        return json({
          error: "Ma'lumot boshqa foydalanuvchi tomonidan yangilangan. Sahifa yangi holatga moslandi.",
          data: current.data,
          revision: current.revision,
          updatedAt: current.updatedAt
        }, 409);
      }

      const next = {
        data: normalized,
        revision: current.revision + 1,
        updatedAt: new Date().toISOString()
      };
      await writeBackup(store, current);
      await store.set(STATE_KEY, JSON.stringify(next));
      return json({ ok: true, revision: next.revision, updatedAt: next.updatedAt });
    }

    return json({ error: "Method not allowed" }, 405);
  } catch (error) {
    console.error("state function error:", error);
    return json({ error: "Server xatoligi" }, 500);
  }
};
