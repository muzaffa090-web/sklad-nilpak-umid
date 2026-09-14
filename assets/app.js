    const PAGE_SIZE = 30;
    const INITIAL_PRODUCTS = [
      { name: "Салфетки22*22 см \"Nilpak\" 40шт.", pieces: 80, price: 1200, priceBag: 96000 },
      { name: "Салфетки22*22 см \"Nilpak\" 50шт.", pieces: 80, price: 1500, priceBag: 120000 },
      { name: "Салфетки22*22 см \"Nilpak\" 100шт.", pieces: 40, price: 2500, priceBag: 100000 },
      { name: "Салфетки22*24 см \"Nice\" 30шт.", pieces: 80, price: 1000, priceBag: 80000 },
      { name: "Салфетки22*24 см \"Nice\" 40шт.", pieces: 80, price: 1200, priceBag: 96000 },
      { name: "Салфетки22*24 см \"Nice\" 50шт", pieces: 80, price: 1500, priceBag: 120000 },
      { name: "Салфетки22*24 см \"Nice\" 200шт (с узором)", pieces: 20, price: 5500, priceBag: 110000 },
      { name: "Салфетки22*24 см \"Nice\" 200шт (прозрачные)", pieces: 20, price: 5000, priceBag: 100000 },
      { name: "Салфетки22*24 см \"Nice\" 100шт (прозрачные)", pieces: 40, price: 2500, priceBag: 100000 },
      { name: "Салфетки22*24 см \"Nice\" 50шт", pieces: 80, price: 1500, priceBag: 120000 },
      { name: "Салфетки \"Nilpak\" (50 шт)24*24 см", pieces: 80, price: 1700, priceBag: 136000 },
      { name: "Салфетки \"Nilpak\" (100 шт) 23*24 см", pieces: 40, price: 3000, priceBag: 120000 },
      { name: "Салфетки \"Nilpak\" (100 шт) 24*24 см", pieces: 40, price: 3000, priceBag: 120000 },
      { name: "Салфетки цветные24*24 см \"Nilpak\" (50 шт) Тук", pieces: 80, price: 1750, priceBag: 140000 },
      { name: "Салфетки цветные24*24 см \"Nilpak\" (100 шт) Тук", pieces: 40, price: 3500, priceBag: 140000 },
      { name: "Салфетки \"Nilpak\"(50 шт)27*27 см", pieces: 70, price: 2300, priceBag: 161000 },
      { name: "Салфетки \"Nilpak\"( 100 шт)27*27 см", pieces: 40, price: 4000, priceBag: 160000 },
      { name: "Салфетки \"Nilpak\"(50 шт)27*29 см", pieces: 70, price: 2000, priceBag: 140000 },
      { name: "Салфетки \"Nilpak\"( 100 шт)27*29 см", pieces: 40, price: 4700, priceBag: 188000 },
      { name: "Салфетки белые 33*33 см \"Nilpak\" (20 шт)", pieces: 48, price: 3250, priceBag: 162500 },
      { name: "Салфетки цветные 33*33 см \"Nilpak\" (20 шт) Тук", pieces: 48, price: 4250, priceBag: 212500 },
      { name: "Салфетки цветные 30*32 см \"Nilpak\" (30 шт) Тук", pieces: 30, price: 7500, priceBag: 225000 },
      { name: "Салфетки диспенсерные 21*21 см стол \"Nilpak\" (100 шт)", pieces: 60, price: 2600, priceBag: 156000 },
      { name: "Салфетки диспенсерные 21*21 см стол \"Nilpak\" (75 шт)", pieces: 60, price: 2000, priceBag: 120000 },
      { name: "Салфетки HoReCa 11*18 см стол \"Nilpak\" (150 шт)", pieces: 30, price: 3150, priceBag: 94500 },
      { name: "Салфетки HoReCa Longer", pieces: 30, price: 6000, priceBag: 180000 },
      { name: "Коробочные салфетки 21*20 см \"Nilpak\" (50шт)", pieces: 20, price: 6000, priceBag: 120000 },
      { name: "Коробочные салфетки 21*20 см \"Nilpak\" (70шт)", pieces: 20, price: 7500, priceBag: 150000 },
      { name: "Коробочные салфетки 21*20 см \"Nilpak\" (100шт)", pieces: 10, price: 10000, priceBag: 100000 },
      { name: "Коробочные салфетки 21*20 см \"Nilpak\" (100шт) куб", pieces: 12, price: 10000, priceBag: 120000 },
      { name: "Коробочные салфетки 21*20 см \"Nilpak\" (120шт)", pieces: 10, price: 10000, priceBag: 120000 },
      { name: "Коробочные салфетки 21*20 см \"Nilpak\"(200шт)", pieces: 8, price: 14000, priceBag: 112000 },
      { name: "Диспенсерные полотенца \"Nilpak\" Z (150 шт)", pieces: 15, price: 8200, priceBag: 123000 },
      { name: "Диспенсерные полотенца прозр \"Nilpak\" Z (180 шт)", pieces: 15, price: 9500, priceBag: 142500 },
      { name: "Диспенсерные полотенца \"Nilpak\" Z (200 шт)", pieces: 15, price: 10400, priceBag: 156000 },
      { name: "Рулонные полотенца \"Big size\"(1шт)2х", pieces: 12, price: 12700, priceBag: 152400 },
      { name: "Рулонные полотенца \"Big size\"(1шт)3х", pieces: 12, price: 13500, priceBag: 162000 },
      { name: "Рулонные полотенца \"Big size\"(1шт)3х (ассорти)", pieces: 12, price: 14500, priceBag: 174000 },
      { name: "Рулонные полотенца \"Big size\"(1шт)3х (кук)", pieces: 12, price: 14500, priceBag: 174000 },
      { name: "Рулонные полотенца \"Big size\"(1шт)3х (кизил)", pieces: 12, price: 14500, priceBag: 174000 },
      { name: "Рулонные полотенца \"Big size\"(1шт)3х (сарик)", pieces: 12, price: 14500, priceBag: 174000 },
      { name: "Рулонные полотенца \"Big size\"(1шт)3х (яшил)", pieces: 12, price: 14500, priceBag: 174000 },
      { name: "Рулонные полотенца \"Nilpak\"(2шт)(Blue)", pieces: 12, price: 8300, priceBag: 99600 },
      { name: "Рулонные полотенца \"Nilpak\"(2шт)(Delfin)", pieces: 12, price: 8300, priceBag: 99600 },
      { name: "Рулонные полотенца \"Nilpak\"(2шт)(Classic)", pieces: 12, price: 8300, priceBag: 99600 },
      { name: "Рулонные полотенца \"Nilpak\"(2шт)(Delfin) 3х", pieces: 12, price: 10700, priceBag: 128400 },
      { name: "Полотенца рулонные 46 см (прозрачные)", pieces: 1, price: 10000, priceBag: 100000 },
      { name: "Полотенца рулонные 69 см (прозрачные)", pieces: 1, price: 15000, priceBag: 120000 },
      { name: "Влажные салфетки \"Nilpak\" 1 шт (500)", pieces: 1, price: 150, priceBag: 75000 },
      { name: "Влажные салфетки \"Nilpak\" 15 шт (45)", pieces: 45, price: 1500, priceBag: 67500 },
      { name: "Влажные салфетки \"Nilpak\" 20 шт (24)", pieces: 24, price: 2500, priceBag: 60000 },
      { name: "Влажные салфетки \"Nilpak\" 72 шт (24)", pieces: 24, price: 6000, priceBag: 144000 },
      { name: "Влажные салфетки \"Nilpak\" 120 шт (12)", pieces: 12, price: 10000, priceBag: 120000 },
      { name: "Туалетная бумага 2/20 \"Nilpak\" (2 шт)", pieces: 20, price: 5000, priceBag: 100000 },
      { name: "Туалетная бумага 4/12 \"Nilpak\" (4 шт)", pieces: 12, price: 10000, priceBag: 120000 },
      { name: "Туалетная бумага 6/48 \"Nilpak\" (6шт) (Classic)", pieces: 8, price: 14500, priceBag: 116000 },
      { name: "Туалетная бумага 8/64 \"Nilpak\" (8шт) classic", pieces: 8, price: 20000, priceBag: 160000 },
      { name: "Туалетная бумага 1/6 \"Nilpak\" (1 шт) mega roll (120 м)", pieces: 6, price: 12000, priceBag: 72000 },
      { name: "Туалетная бумага 1/2 \"Nilpak\" (1 шт) mega roll (230 м)", pieces: 2, price: 21000, priceBag: 42000 },
      { name: "Туалетная бумага 1/2 \"Nilpak\" (1 шт) mega roll (160 м)", pieces: 2, price: 14000, priceBag: 28000 },
      { name: "Туалетная бумага 6 \"Nilpak\" (6шт) Вторичка втулка", pieces: 10, price: 13500, priceBag: 135000 },
      { name: "Туалетная бумага 6 \"Nilpak\" (6шт) Вторичка втулка Еко", pieces: 10, price: 13000, priceBag: 130000 },
      { name: "Туалетная бумага 1/8 \"Nilpak\" Aroma Siren", pieces: 8, price: 28500, priceBag: 228000 },
      { name: "Туалетная бумага 1/8 \"Nilpak\" Aroma Olma", pieces: 8, price: 28500, priceBag: 228000 },
      { name: "Туалетная бумага 1/8 \"Nilpak\" Aroma Limon", pieces: 8, price: 28500, priceBag: 228000 },
      { name: "Туалетная бумага 1/8 \"Nilpak\" Aroma Atirgul", pieces: 8, price: 28500, priceBag: 228000 },
      { name: "Туалетная бумага 1/8 \"Nilpak\" Aroma Okean", pieces: 8, price: 28500, priceBag: 228000 },
      { name: "Туалетная бумага 8/64 \"Nilpak\" Делух 3х Куб", pieces: 8, price: 25000, priceBag: 200000 },
      { name: "Туалетная бумага 8/64 \"Nilpak\" Делух 3х", pieces: 8, price: 24000, priceBag: 192000 },
      { name: "Туалетная бумага 1/8 Делфин", pieces: 8, price: 17500, priceBag: 140000 }
    ];
    const PRODUCT_CATALOG_VERSION = "20260912102321";

    const state = {
      user: null,
      admin: {
        name: "Umid",
        role: "Sklad Admin",
        email: "admin@example.com",
        login: "Umid",
        password: "",
        status: "Faol",
        photo: ""
      },
      products: [],
      drivers: [],
      movements: [],
      initialStock: {},
      catalogVersion: "",
      editingProductId: null,
      selectedDriverId: null,
      driverOutDriverSearch: "",
      editingEntry: null,
      productSearch: {
        incoming: "",
        stockEdit: "",
        driverOut: "",
        return: "",
        otherOut: "",
        initialStock: "",
        products: "",
        stock: ""
      },
      entryOnlyFilled: {
        incoming: false,
        stockEdit: false,
        driverOut: false,
        return: false,
        otherOut: false
      },
      flowType: "all",
      globalFilter: {
        active: false,
        from: "",
        to: ""
      },
      stockAsOfDate: "",
      pagination: {},
      entryDrafts: {
        incoming: {},
        stockEdit: {},
        driverOut: {},
        otherOut: {},
        return: {}
      }
    };

    const el = {
      loginScreen: document.getElementById("loginScreen"),
      app: document.getElementById("app"),
      loginForm: document.getElementById("loginForm"),
      loginError: document.getElementById("loginError"),
      menuList: document.getElementById("menuList"),
      sections: document.querySelectorAll(".section"),
      todayLabel: document.getElementById("todayLabel"),
      profileChip: document.getElementById("profileChip"),
      profileDropdown: document.getElementById("profileDropdown"),
      topbarAvatar: document.getElementById("topbarAvatar"),
      topbarName: document.getElementById("topbarName"),
      topbarRole: document.getElementById("topbarRole"),
      dropdownAvatar: document.getElementById("dropdownAvatar"),
      dropdownName: document.getElementById("dropdownName"),
      dropdownRole: document.getElementById("dropdownRole"),
      dropdownEmail: document.getElementById("dropdownEmail"),
      dropdownLogin: document.getElementById("dropdownLogin"),
      dropdownStatus: document.getElementById("dropdownStatus"),
      adminAvatar: document.getElementById("adminAvatar"),
      adminPhoto: document.getElementById("adminPhoto"),
      adminName: document.getElementById("adminName"),
      adminRoleInput: document.getElementById("adminRoleInput"),
      adminEmail: document.getElementById("adminEmail"),
      adminStatus: document.getElementById("adminStatus"),
      adminLogin: document.getElementById("adminLogin"),
      adminPassword: document.getElementById("adminPassword"),

      globalFilterCard: document.getElementById("globalFilterCard"),
      toggleFilterPanel: document.getElementById("toggleFilterPanel"),
      globalFilterPanel: document.getElementById("globalFilterPanel"),
      applyGlobalFilter: document.getElementById("applyGlobalFilter"),
      cancelGlobalFilter: document.getElementById("cancelGlobalFilter"),
      clearGlobalFilter: document.getElementById("clearGlobalFilter"),
      globalFrom: document.getElementById("globalFrom"),
      globalTo: document.getElementById("globalTo"),
      globalFilterText: document.getElementById("globalFilterText"),
      stockAsOfDate: document.getElementById("stockAsOfDate"),
      applyStockAsOfDate: document.getElementById("applyStockAsOfDate"),
      resetAllDataBtn: document.getElementById("resetAllDataBtn"),

      productForm: document.getElementById("productForm"),
      deleteProductForm: document.getElementById("deleteProductForm"),
      productNotice: document.getElementById("productNotice"),
      deleteProductNotice: document.getElementById("deleteProductNotice"),
      productsBody: document.getElementById("productsBody"),
      deleteProductSelect: document.getElementById("deleteProductSelect"),
      productsSearch: document.getElementById("productsSearch"),
      stockProductSearch: document.getElementById("stockProductSearch"),
      initialStockForm: document.getElementById("initialStockForm"),
      initialStockBody: document.getElementById("initialStockBody"),
      initialStockTotal: document.getElementById("initialStockTotal"),
      initialStockNotice: document.getElementById("initialStockNotice"),
      initialStockSearch: document.getElementById("initialStockSearch"),
      clearInitialStockBtn: document.getElementById("clearInitialStockBtn"),

      incomingForm: document.getElementById("incomingForm"),
      incomingBody: document.getElementById("incomingBody"),
      incomingEntryBody: document.getElementById("incomingEntryBody"),
      incomingEntryTotal: document.getElementById("incomingEntryTotal"),
      incomingNotice: document.getElementById("incomingNotice"),
      incomingComment: document.getElementById("incomingComment"),
      incomingProductSearch: document.getElementById("incomingProductSearch"),

      stockBody: document.getElementById("stockBody"),
      stockFoot: document.getElementById("stockFoot"),
      stockEditForm: document.getElementById("stockEditForm"),
      stockEditOperation: document.getElementById("stockEditOperation"),
      stockEditEntryBody: document.getElementById("stockEditEntryBody"),
      stockEditEntryTotal: document.getElementById("stockEditEntryTotal"),
      stockEditNote: document.getElementById("stockEditNote"),
      stockEditBody: document.getElementById("stockEditBody"),
      stockEditNotice: document.getElementById("stockEditNotice"),
      stockEditProductSearch: document.getElementById("stockEditProductSearch"),
      zeroStockBtn: document.getElementById("zeroStockBtn"),

      driverForm: document.getElementById("driverForm"),
      driverNotice: document.getElementById("driverNotice"),
      driversBody: document.getElementById("driversBody"),
      driverProfile: document.getElementById("driverProfile"),
      driverPhoto: document.getElementById("driverPhoto"),

      driverOutForm: document.getElementById("driverOutForm"),
      driverOutDriver: document.getElementById("driverOutDriver"),
      driverOutBody: document.getElementById("driverOutBody"),
      driverOutEntryBody: document.getElementById("driverOutEntryBody"),
      driverOutEntryTotal: document.getElementById("driverOutEntryTotal"),
      driverOutNotice: document.getElementById("driverOutNotice"),
      driverOutComment: document.getElementById("driverOutComment"),
      driverOutProductSearch: document.getElementById("driverOutProductSearch"),
      driverOutDriverSearch: document.getElementById("driverOutDriverSearch"),

      otherOutForm: document.getElementById("otherOutForm"),
      otherOutReason: document.getElementById("otherOutReason"),
      otherOutBody: document.getElementById("otherOutBody"),
      otherOutEntryBody: document.getElementById("otherOutEntryBody"),
      otherOutEntryTotal: document.getElementById("otherOutEntryTotal"),
      otherOutNotice: document.getElementById("otherOutNotice"),
      otherOutProductSearch: document.getElementById("otherOutProductSearch"),

      returnForm: document.getElementById("returnForm"),
      returnDriver: document.getElementById("returnDriver"),
      returnsBody: document.getElementById("returnsBody"),
      returnEntryBody: document.getElementById("returnEntryBody"),
      returnEntryTotal: document.getElementById("returnEntryTotal"),
      returnNotice: document.getElementById("returnNotice"),
      returnComment: document.getElementById("returnComment"),
      returnProductSearch: document.getElementById("returnProductSearch"),

      dashboardProductsBody: document.getElementById("dashboardProductsBody"),
      dashboardDriversBody: document.getElementById("dashboardDriversBody"),
      dashRangeText: document.getElementById("dashRangeText"),

      flowRangeText: document.getElementById("flowRangeText"),
      dailyFlowBody: document.getElementById("dailyFlowBody"),

      reportRangeText: document.getElementById("reportRangeText"),
      reportStockAsOfText: document.getElementById("reportStockAsOfText"),
      reportsBody: document.getElementById("reportsBody"),

      movementEditModal: document.getElementById("movementEditModal"),
      movementEditForm: document.getElementById("movementEditForm"),
      movementEditId: document.getElementById("movementEditId"),
      movementEditType: document.getElementById("movementEditType"),
      movementEditDate: document.getElementById("movementEditDate"),
      movementEditProduct: document.getElementById("movementEditProduct"),
      movementEditUnit: document.getElementById("movementEditUnit"),
      movementEditQty: document.getElementById("movementEditQty"),
      movementEditAmount: document.getElementById("movementEditAmount"),
      movementEditGroupWrap: document.getElementById("movementEditGroupWrap"),
      movementEditGroupBody: document.getElementById("movementEditGroupBody"),
      movementEditDriverWrap: document.getElementById("movementEditDriverWrap"),
      movementEditDriver: document.getElementById("movementEditDriver"),
      movementEditNote: document.getElementById("movementEditNote"),
      movementEditNotice: document.getElementById("movementEditNotice"),
      movementEditCloseBtn: document.getElementById("movementEditCloseBtn"),
      movementEditCancelBtn: document.getElementById("movementEditCancelBtn"),

      driverEditModal: document.getElementById("driverEditModal"),
      driverEditForm: document.getElementById("driverEditForm"),
      driverEditId: document.getElementById("driverEditId"),
      driverEditAvatar: document.getElementById("driverEditAvatar"),
      driverEditPhoto: document.getElementById("driverEditPhoto"),
      driverEditPhotoRemoveBtn: document.getElementById("driverEditPhotoRemoveBtn"),
      driverEditName: document.getElementById("driverEditName"),
      driverEditPhone: document.getElementById("driverEditPhone"),
      driverEditVehicle: document.getElementById("driverEditVehicle"),
      driverEditNotice: document.getElementById("driverEditNotice"),
      driverEditCloseBtn: document.getElementById("driverEditCloseBtn"),
      driverEditCancelBtn: document.getElementById("driverEditCancelBtn")
    };

    const fmtMoney = (n) => `${Number(n || 0).toLocaleString("uz-UZ")} so'm`;
    const safeDate = (v) => v || "-";
    function dateToIso(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    const todayIso = () => dateToIso(new Date());
    const isValidNumber = (v) => Number.isFinite(Number(v));
    const toInt = (v) => parseInt(v, 10);
    const escapeHtml = (v) =>
      String(v ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    const avatarPlaceholderSvg = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.14 0-7.5 2.91-7.5 6.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1c0-3.59-3.36-6.5-7.5-6.5Z"></path>
      </svg>
    `;
    const CP1251_CHARS =
      "Р‚РѓвЂљС“вЂћвЂ¦вЂ вЂЎв‚¬вЂ°Р‰вЂ№РЉРЊР‹РЏС’вЂвЂ™вЂњвЂќвЂўвЂ“вЂ”пїЅв„ўС™вЂєСљСњС›Сџ РЋСћР€В¤ТђВ¦В§РЃВ©Р„В«В¬В­В®Р‡В°В±Р†С–Т‘ВµВ¶В·С‘в„–С”В»СР…С•С—" +
      "РђР‘Р’Р“Р”Р•Р–Р—РР™РљР›РњРќРћРџР РЎРўРЈР¤РҐР¦Р§РЁР©РЄР«Р¬Р­Р®РЇР°Р±РІРіРґРµР¶Р·РёР№РєР»РјРЅРѕРїСЂСЃС‚СѓС„С…С†С‡С€С‰СЉС‹СЊСЌСЋСЏ";

    function paintAvatar(node, photo, altText = "Avatar") {
      if (!node) return;
      node.innerHTML = "";
      if (photo) {
        const img = document.createElement("img");
        img.src = photo;
        img.alt = altText;
        node.appendChild(img);
      } else {
        node.innerHTML = avatarPlaceholderSvg;
      }
    }

    function fileToDataUrl(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(new Error("Fayl o'qilmadi"));
        reader.readAsDataURL(file);
      });
    }

    const REMOTE_STATE_ENDPOINT = "/.netlify/functions/state";
    const REMOTE_STATE_VERSION = 1;
    const REMEMBER_LOGIN_KEY = "skladDoctorRememberLogin";
    const SESSION_TOKEN_KEY = "skladDoctorSessionToken";
    const LOCAL_STATE_KEY = "skladDoctorOfflineState";
    const LOCAL_LOGIN = "Umid";
    const LOCAL_PASSWORD = "5555";
    let remoteSessionToken = "";
    let remoteStateRevision = 0;
    let remoteStateUpdatedAt = "";
    let remoteStateReady = false;
    let offlineMode = false;
    let remoteSaveTimer = null;
    let remoteSaveInFlight = false;
    let remoteSaveQueued = false;
    let retryAfterConflictAction = null;

    function defaultAdminState() {
      return {
        name: "Umid",
        role: "Sklad Admin",
        email: "admin@example.com",
        login: "Umid",
        password: "",
        status: "Faol",
        photo: ""
      };
    }

    function normalizeText(value, fallback = "") {
      const text = typeof value === "string" ? value.trim() : "";
      return text || fallback;
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

    function buildPersistedState() {
      return {
        version: REMOTE_STATE_VERSION,
        admin: {
          name: state.admin.name,
          role: state.admin.role,
          email: state.admin.email,
          login: state.admin.login,
          status: state.admin.status,
          photo: state.admin.photo || ""
        },
        products: state.products.map((p) => ({
          id: p.id,
          name: p.name,
          piecesPerBag: p.piecesPerBag,
          priceBag: p.priceBag,
          pricePiece: p.pricePiece
        })),
        drivers: state.drivers.map((d) => ({
          id: d.id,
          name: d.name,
          phone: d.phone || "",
          vehicle: d.vehicle || "",
          photo: d.photo || ""
        })),
        movements: state.movements.map((m) => ({
          id: m.id,
          date: m.date,
          type: m.type,
          productId: m.productId,
          unit: m.unit,
          qty: m.qty,
          amount: m.amount,
          driverId: m.driverId || null,
          note: m.note || "",
          batchId: m.batchId || ""
        })),
        initialStock: { ...state.initialStock },
        catalogVersion: state.catalogVersion || ""
      };
    }

    function normalizePersistedState(raw) {
      if (!raw || typeof raw !== "object") return null;

      const adminBase = defaultAdminState();
      const rawAdmin = raw.admin && typeof raw.admin === "object" ? raw.admin : {};
      const admin = {
        name: normalizeText(rawAdmin.name, adminBase.name),
        role: normalizeText(rawAdmin.role, adminBase.role),
        email: normalizeText(rawAdmin.email, adminBase.email),
        login: normalizeText(rawAdmin.login, adminBase.login),
        password: "",
        status: normalizeText(rawAdmin.status, adminBase.status),
        photo: typeof rawAdmin.photo === "string" ? rawAdmin.photo : ""
      };

      const products = Array.isArray(raw.products)
        ? raw.products
            .map((p) => {
              if (!p || typeof p !== "object") return null;
              const name = normalizeText(p.name);
              if (!name) return null;
              return {
                id: normalizeText(p.id) || uid("product"),
                name,
                piecesPerBag: Math.max(1, toNonNegativeInt(p.piecesPerBag, 1)),
                priceBag: toNonNegativeNumber(p.priceBag, 0),
                pricePiece: toNonNegativeNumber(p.pricePiece, 0)
              };
            })
            .filter(Boolean)
        : [];

      const productIds = new Set(products.map((p) => p.id));

      const drivers = Array.isArray(raw.drivers)
        ? raw.drivers
            .map((d) => {
              if (!d || typeof d !== "object") return null;
              const name = normalizeText(d.name);
              if (!name) return null;
              return {
                id: normalizeText(d.id) || uid("driver"),
                name,
                phone: typeof d.phone === "string" ? d.phone : "",
                vehicle: typeof d.vehicle === "string" ? d.vehicle : "",
                photo: typeof d.photo === "string" ? d.photo : ""
              };
            })
            .filter(Boolean)
        : [];

      const driverIds = new Set(drivers.map((d) => d.id));
      const allowedTypes = new Set(["incoming", "adjust_in", "adjust_out", "driver_out", "other_out", "driver_return"]);

      const movements = Array.isArray(raw.movements)
        ? raw.movements
            .map((m) => {
              if (!m || typeof m !== "object") return null;
              const type = normalizeText(m.type);
              if (!allowedTypes.has(type)) return null;
              const productId = normalizeText(m.productId);
              if (!productIds.has(productId)) return null;
              const unit = m.unit === "bag" ? "bag" : "piece";
              const qty = toNonNegativeInt(m.qty, 0);
              if (qty <= 0) return null;
              const driverId = normalizeText(m.driverId);
              return {
                id: normalizeText(m.id) || uid("mv"),
                date: normalizeText(m.date, todayIso()),
                type,
                productId,
                unit,
                qty,
                pieces: 0,
                amount: toNonNegativeNumber(m.amount, 0),
                driverId: driverId && driverIds.has(driverId) ? driverId : null,
                note: typeof m.note === "string" ? m.note : "",
                batchId: normalizeText(m.batchId, "")
              };
            })
            .filter(Boolean)
        : [];

      movements.forEach((m) => {
        const p = products.find((x) => x.id === m.productId);
        m.pieces = p ? toPieces(p, m.qty, m.unit) : 0;
      });

      const initialStock = {};
      const rawInitialStock = raw.initialStock && typeof raw.initialStock === "object" ? raw.initialStock : {};
      products.forEach((p) => {
        initialStock[p.id] = toNonNegativeInt(rawInitialStock[p.id], 0);
      });

      const catalogVersion = normalizeText(raw.catalogVersion, "");

      return { admin, products, drivers, movements, initialStock, catalogVersion };
    }

    function authHeaders(extra = {}) {
      return remoteSessionToken ? { ...extra, Authorization: `Bearer ${remoteSessionToken}` } : extra;
    }

    function rememberSessionToken(token) {
      remoteSessionToken = token || "";
      try {
        if (remoteSessionToken) localStorage.setItem(SESSION_TOKEN_KEY, remoteSessionToken);
        else localStorage.removeItem(SESSION_TOKEN_KEY);
      } catch (error) {
        console.warn("Sessiya saqlanmadi:", error);
      }
    }

    function applyRemoteStatePayload(payload) {
      const normalized = normalizePersistedState(payload?.data || null);
      remoteStateRevision = Number.isFinite(Number(payload?.revision)) ? Number(payload.revision) : 0;
      remoteStateUpdatedAt = typeof payload?.updatedAt === "string" ? payload.updatedAt : "";
      if (normalized) {
        state.admin = normalized.admin;
        state.products = normalized.products;
        state.drivers = normalized.drivers;
        state.movements = normalized.movements;
        state.initialStock = normalized.initialStock;
        state.catalogVersion = normalized.catalogVersion || "";
        state.selectedDriverId = state.drivers[0]?.id || null;
      } else {
        seedInitialProducts();
      }
      if (applyExcelCatalogIfNeeded() && remoteStateReady) requestStateSave();
    }

    function canUseOfflineLogin() {
      return location.protocol === "file:" || location.hostname === "127.0.0.1" || location.hostname === "localhost";
    }

    function loadLocalState() {
      try {
        const raw = localStorage.getItem(LOCAL_STATE_KEY);
        if (!raw) return false;
        const normalized = normalizePersistedState(JSON.parse(raw));
        if (!normalized) return false;
        state.admin = normalized.admin;
        state.products = normalized.products;
        state.drivers = normalized.drivers;
        state.movements = normalized.movements;
        state.initialStock = normalized.initialStock;
        state.catalogVersion = normalized.catalogVersion || "";
        state.selectedDriverId = state.drivers[0]?.id || null;
        if (applyExcelCatalogIfNeeded()) persistLocalStateNow();
        return true;
      } catch (error) {
        console.warn("Lokal ma'lumot yuklanmadi:", error);
        return false;
      }
    }

    function persistLocalStateNow() {
      try {
        localStorage.setItem(LOCAL_STATE_KEY, JSON.stringify(buildPersistedState()));
      } catch (error) {
        console.warn("Lokal saqlashda xatolik:", error);
      }
    }

    async function clearResetCaches() {
      try {
        localStorage.removeItem(LOCAL_STATE_KEY);
      } catch (error) {
        console.warn("Lokal kesh tozalanmadi:", error);
      }
      try {
        sessionStorage.clear();
      } catch (error) {
        console.warn("Sessiya keshi tozalanmadi:", error);
      }
      try {
        if ("caches" in window) {
          const cacheNames = await caches.keys();
          await Promise.all(cacheNames.map((name) => caches.delete(name)));
        }
      } catch (error) {
        console.warn("Brauzer keshi tozalanmadi:", error);
      }
    }

    function saveWithConflictRetry(action) {
      retryAfterConflictAction = typeof action === "function" ? action : null;
      requestStateSave();
    }

    function startOfflineSession() {
      offlineMode = true;
      remoteStateReady = true;
      remoteSessionToken = "";
      if (!loadLocalState()) seedInitialProducts();
      if (applyExcelCatalogIfNeeded()) persistLocalStateNow();
    }

    async function loginRemote(user, pass) {
      try {
        const response = await fetch(REMOTE_STATE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ login: user, password: pass })
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(payload?.error || "Login yoki parol noto'g'ri.");
        rememberSessionToken(payload.token || "");
        offlineMode = false;
        remoteStateReady = true;
        applyRemoteStatePayload(payload);
        if (!payload.data) requestStateSave();
      } catch (error) {
        if (canUseOfflineLogin() && user === LOCAL_LOGIN && pass === LOCAL_PASSWORD) {
          startOfflineSession();
          return;
        }
        throw error;
      }
    }

    async function persistStateNow() {
      if (!remoteStateReady) return;
      if (offlineMode) {
        persistLocalStateNow();
        return;
      }
      if (remoteSaveInFlight) {
        remoteSaveQueued = true;
        return;
      }
      remoteSaveInFlight = true;
      try {
        const response = await fetch(REMOTE_STATE_ENDPOINT, {
          method: "PUT",
          headers: authHeaders({ "Content-Type": "application/json" }),
          body: JSON.stringify({ revision: remoteStateRevision, data: buildPersistedState() })
        });
        const payload = await response.json().catch(() => ({}));
        if (response.status === 409) {
          applyRemoteStatePayload(payload);
          if (retryAfterConflictAction) {
            const action = retryAfterConflictAction;
            retryAfterConflictAction = null;
            action();
            renderAll();
            remoteSaveInFlight = false;
            return persistStateNow();
          }
          renderAll();
          alert(payload?.error || "Ma'lumot boshqa foydalanuvchi tomonidan yangilangan. Qayta tekshirib saqlang.");
          return;
        }
        if (response.status === 401) {
          clearRememberedLogin();
          showLogin();
          alert("Sessiya tugagan. Qayta kiring.");
          return;
        }
        if (!response.ok) {
          throw new Error(payload?.error || `Saqlash xatosi: ${response.status}`);
        }
        remoteStateRevision = Number.isFinite(Number(payload?.revision)) ? Number(payload.revision) : remoteStateRevision;
        remoteStateUpdatedAt = typeof payload?.updatedAt === "string" ? payload.updatedAt : remoteStateUpdatedAt;
        retryAfterConflictAction = null;
      } catch (error) {
        console.warn("Ma'lumotlarni saqlashda xatolik:", error);
      } finally {
        remoteSaveInFlight = false;
        if (remoteSaveQueued) {
          remoteSaveQueued = false;
          requestStateSave();
        }
      }
    }

    function requestStateSave() {
      if (!remoteStateReady) return;
      clearTimeout(remoteSaveTimer);
      remoteSaveTimer = setTimeout(() => {
        persistStateNow();
      }, 700);
    }

    async function loadRemoteState() {
      try {
        if (offlineMode) {
          if (!loadLocalState()) seedInitialProducts();
          return true;
        }
        if (!remoteSessionToken) return false;
        const response = await fetch(REMOTE_STATE_ENDPOINT, { method: "GET", cache: "no-store", headers: authHeaders() });
        if (response.status === 401) {
          clearRememberedLogin();
          return false;
        }
        if (!response.ok) throw new Error(`Server javobi: ${response.status}`);
        const payload = await response.json();
        remoteStateReady = true;
        applyRemoteStatePayload(payload);
        if (!payload.data) requestStateSave();
        return true;
      } catch (error) {
        console.warn("Serverdan ma'lumot yuklanmadi:", error);
        return false;
      }
    }

    function decodeMojibake(text) {
      const bytes = [];
      for (const ch of String(text || "")) {
        const code = ch.charCodeAt(0);
        const cpIndex = CP1251_CHARS.indexOf(ch);
        if (code <= 0xff) bytes.push(code);
        else if (cpIndex >= 0) bytes.push(0x80 + cpIndex);
        else return text;
      }
      try {
        return new TextDecoder("utf-8", { fatal: true }).decode(new Uint8Array(bytes));
      } catch {
        return text;
      }
    }

    function uid(prefix) {
      return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    }

    function getProduct(id) {
      return state.products.find((p) => p.id === id);
    }

    function getDriver(id) {
      return state.drivers.find((d) => d.id === id);
    }

    function inRange(date, from, to) {
      if (from && date < from) return false;
      if (to && date > to) return false;
      return true;
    }

    function movementDirection(type) {
      if (type === "incoming" || type === "adjust_in" || type === "driver_return") return "in";
      return "out";
    }

    function movementLabel(type) {
      if (type === "incoming") return "<span class='tag in'>Kirim</span>";
      if (type === "adjust_in") return "<span class='tag edit'>Tahrir +</span>";
      if (type === "adjust_out") return "<span class='tag edit'>Tahrir -</span>";
      if (type === "driver_out") return "<span class='tag out'>Chiqim</span>";
      if (type === "other_out") return "<span class='tag out'>Boshqa chiqim</span>";
      return "<span class='tag in'>Vozvrat</span>";
    }

    function movementSource(type) {
      if (type === "driver_out") return "Haydovchilar Tovari";
      if (type === "other_out") return "Boshqa Chiqimlar";
      if (type === "driver_return") return "Vozvratlar";
      if (type === "incoming") return "Skladga Kirim";
      return "Sklad Tahrir";
    }

    function toPieces(product, qty, unit) {
      if (!product) return 0;
      return unit === "bag" ? qty * product.piecesPerBag : qty;
    }

    function qtyToText(product, pieces) {
      if (!product || product.piecesPerBag <= 0) return "0 dona";
      const abs = Math.max(0, pieces);
      const bag = Math.floor(abs / product.piecesPerBag);
      const rem = abs % product.piecesPerBag;
      return `${bag} qop ${rem} dona`;
    }

    function movementQtyText(m) {
      const p = getProduct(m.productId);
      if (!p) return "-";
      const unitName = m.unit === "bag" ? "qop" : "dona";
      return `${m.qty} ${unitName} (${qtyToText(p, m.pieces)})`;
    }

    function stockMap(asOfDate = "") {
      const map = {};
      state.products.forEach((p) => {
        map[p.id] = Math.max(0, toInt(state.initialStock[p.id]) || 0);
      });
      state.movements.forEach((m) => {
        if (!(m.productId in map)) return;
        if (asOfDate && m.date && m.date > asOfDate) return;
        if (movementDirection(m.type) === "in") map[m.productId] += m.pieces;
        else map[m.productId] -= m.pieces;
      });
      return map;
    }

    function stockTotals(asOfDate = "") {
      const sMap = stockMap(asOfDate);
      let amount = 0;
      let pieces = 0;
      let products = 0;
      state.products.forEach((p) => {
        const qty = Math.max(0, Number(sMap[p.id] || 0));
        if (qty > 0) products += 1;
        pieces += qty;
        amount += Math.floor(qty / p.piecesPerBag) * p.priceBag + (qty % p.piecesPerBag) * p.pricePiece;
      });
      return { map: sMap, amount, pieces, products };
    }

    function sumBy(items, fn) {
      return items.reduce((acc, it) => acc + fn(it), 0);
    }

    function showNotice(node, text, kind) {
      node.textContent = text;
      node.className = `notice ${kind}`;
    }

    function clearNotice(node) {
      node.textContent = "";
      node.className = "notice";
    }

    function tableEmpty(body, colspan, text) {
      body.innerHTML = `<tr><td class="empty" colspan="${colspan}">${text}</td></tr>`;
    }

    function movementDeleteButton(id) {
      return `<button class="btn btn-danger btn-sm movement-delete-btn" data-movement-delete-id="${id}" type="button">O'chirish</button>`;
    }

    function movementEditButton(id) {
      return `<button class="btn btn-soft btn-sm movement-edit-btn" data-movement-edit-id="${id}" type="button">Tahrir</button>`;
    }

    function movementActionButtons(id) {
      return `<div class="row-actions">${movementEditButton(id)}${movementDeleteButton(id)}</div>`;
    }

    function movementGroupKey(m) {
      return m.batchId || [m.type, m.date, m.driverId || "", m.note || ""].join("|");
    }

    function groupedMovements(rows) {
      const groups = new Map();
      rows.forEach((m) => {
        const key = movementGroupKey(m);
        if (!groups.has(key)) {
          groups.set(key, {
            key,
            date: m.date,
            type: m.type,
            driverId: m.driverId || "",
            note: m.note || "",
            items: [],
            amount: 0
          });
        }
        const group = groups.get(key);
        group.items.push(m);
        group.amount += Number(m.amount || 0);
        if ((m.date || "") > (group.date || "")) group.date = m.date;
      });
      return [...groups.values()].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    }

    function groupIds(group) {
      return group.items.map((m) => m.id).join(",");
    }

    function movementGroupDetails(group) {
      return group.items.map((m) => {
        const p = getProduct(m.productId);
        return `${p ? p.name : "-"}: ${movementQtyText(m)} - ${fmtMoney(m.amount)}`;
      }).join("; ");
    }

    function groupActionButtons(group) {
      const ids = groupIds(group);
      return `<div class="row-actions"><button class="btn btn-soft btn-sm movement-group-edit-btn" data-movement-edit-ids="${ids}" type="button">Tahrir</button><button class="btn btn-danger btn-sm movement-group-delete-btn" data-movement-delete-ids="${ids}" type="button">O'chirish</button></div>`;
    }

    function selectCell(id) {
      return `<td class="select-cell"><input class="export-row-check" data-export-row="${id}" type="checkbox" aria-label="Excel uchun tanlash"></td>`;
    }

    function normalizeSearch(value) {
      return String(value || "").trim().toLocaleLowerCase("uz-UZ");
    }

    function productMatchesSearch(product, query) {
      if (!query) return true;
      return normalizeSearch(product.name).includes(query);
    }

    function entrySearchKey(type) {
      if (type === "incoming") return "incoming";
      if (type === "stockEdit") return "stockEdit";
      if (type === "driverOut") return "driverOut";
      if (type === "otherOut") return "otherOut";
      return "return";
    }

    function movementTypeName(type) {
      if (type === "incoming") return "Skladga kirim";
      if (type === "adjust_in") return "Sklad tahrir +";
      if (type === "adjust_out") return "Sklad tahrir -";
      if (type === "driver_out") return "Haydovchiga chiqim";
      if (type === "driver_return") return "Vozvrat";
      return "Boshqa chiqim";
    }

    function movementNeedsDriver(type) {
      return type === "driver_out" || type === "driver_return";
    }

    const FILTER_VISIBLE_SECTIONS = new Set([
      "dashboardSection",
      "takenGoodsSection",
      "reportsSection",
      "incomingHistorySection",
      "dailyFlowSection",
      "returnsHistorySection"
    ]);

    function updateFilterCardVisibility(activeSectionId = "dashboardSection") {
      if (!el.globalFilterCard) return;
      el.globalFilterCard.classList.toggle("hidden", !FILTER_VISIBLE_SECTIONS.has(activeSectionId));
    }

    function getReportStockDate() {
      if (state.globalFilter.active && state.globalFilter.to) return state.globalFilter.to;
      return state.stockAsOfDate || todayIso();
    }

    function entryTypeFromMovementType(type) {
      if (type === "incoming") return "incoming";
      if (type === "driver_out") return "driverOut";
      if (type === "other_out") return "otherOut";
      if (type === "driver_return") return "return";
      if (type === "adjust_in" || type === "adjust_out") return "stockEdit";
      return "";
    }

    function sectionForEntryType(type) {
      if (type === "incoming") return "incomingSection";
      if (type === "driverOut") return "driverOutSection";
      if (type === "otherOut") return "otherOutSection";
      if (type === "return") return "returnsSection";
      if (type === "stockEdit") return "stockSection";
      return "dashboardSection";
    }

    function noticeForEntryType(type) {
      if (type === "incoming") return el.incomingNotice;
      if (type === "driverOut") return el.driverOutNotice;
      if (type === "otherOut") return el.otherOutNotice;
      if (type === "return") return el.returnNotice;
      if (type === "stockEdit") return el.stockEditNotice;
      return null;
    }

    function setFormSubmitText(form, text) {
      const button = form?.querySelector('button[type="submit"]');
      if (button) button.textContent = text;
    }

    function renderEntryEditStatus() {
      setFormSubmitText(el.incomingForm, state.editingEntry?.type === "incoming" ? "Kirimni yangilash" : "Kirimni saqlash");
      setFormSubmitText(el.driverOutForm, state.editingEntry?.type === "driverOut" ? "Chiqimni yangilash" : "Chiqimni saqlash");
      setFormSubmitText(el.otherOutForm, state.editingEntry?.type === "otherOut" ? "Chiqimni yangilash" : "Boshqa chiqimni saqlash");
      setFormSubmitText(el.returnForm, state.editingEntry?.type === "return" ? "Vozvratni yangilash" : "Vozvratni saqlash");
      setFormSubmitText(el.stockEditForm, state.editingEntry?.type === "stockEdit" ? "Sklad tahririni yangilash" : "Sklad tahririni saqlash");
    }

    function entryFormForType(type) {
      if (type === "incoming") return el.incomingForm;
      if (type === "driverOut") return el.driverOutForm;
      if (type === "otherOut") return el.otherOutForm;
      if (type === "return") return el.returnForm;
      if (type === "stockEdit") return el.stockEditForm;
      return null;
    }

    function entrySearchInputForType(type) {
      if (type === "incoming") return el.incomingProductSearch;
      if (type === "driverOut") return el.driverOutProductSearch;
      if (type === "otherOut") return el.otherOutProductSearch;
      if (type === "return") return el.returnProductSearch;
      if (type === "stockEdit") return el.stockEditProductSearch;
      return null;
    }

    function scrollToEntryForm(type) {
      const form = entryFormForType(type);
      const main = document.querySelector(".main");
      requestAnimationFrame(() => {
        if (main) {
          main.scrollTo({ top: Math.max(0, form ? form.offsetTop - 90 : 0), behavior: "smooth" });
        }
        form?.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    }

    function applyMovementToStockMap(map, movement, factor) {
      if (!movement || !movement.productId) return;
      if (!(movement.productId in map)) map[movement.productId] = 0;
      const sign = movementDirection(movement.type) === "in" ? 1 : -1;
      map[movement.productId] += sign * Number(movement.pieces || 0) * factor;
    }

    function projectedStockMapAfterMovementEdit(oldMovement, nextMovement) {
      const map = stockMap();
      applyMovementToStockMap(map, oldMovement, -1);
      applyMovementToStockMap(map, nextMovement, 1);
      return map;
    }

    function findNegativeStockProductId(map) {
      for (const [productId, pieces] of Object.entries(map)) {
        if (Number(pieces || 0) < 0) return productId;
      }
      return "";
    }

    function fillProductSelect(selectNode, selectedId) {
      selectNode.innerHTML = "";
      state.products.forEach((p) => {
        const op = document.createElement("option");
        op.value = p.id;
        op.textContent = p.name;
        if (p.id === selectedId) op.selected = true;
        selectNode.appendChild(op);
      });
    }

    function fillDriverSelect(selectNode, selectedId) {
      selectNode.innerHTML = "";
      if (!state.drivers.length) {
        const op = document.createElement("option");
        op.value = "";
        op.textContent = "Haydovchi yo'q";
        selectNode.appendChild(op);
        return;
      }
      state.drivers.forEach((d) => {
        const op = document.createElement("option");
        op.value = d.id;
        op.textContent = d.name;
        if (d.id === selectedId) op.selected = true;
        selectNode.appendChild(op);
      });
    }

    function closeMovementEditModal() {
      el.movementEditModal.classList.add("hidden");
      el.movementEditForm.dataset.mode = "single";
      delete el.movementEditForm.dataset.groupIds;
      clearNotice(el.movementEditNotice);
    }

    function openMovementEditModal(movementId) {
      const movement = state.movements.find((m) => m.id === movementId);
      if (!movement) return;
      const entryType = entryTypeFromMovementType(movement.type);
      if (entryType) {
        openEntryEditPage(movement.id);
        return;
      }
      el.movementEditForm.dataset.mode = "single";
      delete el.movementEditForm.dataset.groupIds;
      [el.movementEditProduct, el.movementEditUnit, el.movementEditQty, el.movementEditAmount].forEach((node) => {
        node.disabled = false;
        node?.closest(".field")?.classList.remove("hidden");
      });
      el.movementEditGroupWrap.classList.add("hidden");
      el.movementEditGroupBody.innerHTML = "";
      el.movementEditId.value = movement.id;
      el.movementEditType.value = movementTypeName(movement.type);
      el.movementEditDate.value = movement.date || todayIso();
      fillProductSelect(el.movementEditProduct, movement.productId);
      fillDriverSelect(el.movementEditDriver, movement.driverId || "");
      el.movementEditUnit.value = movement.unit === "bag" ? "bag" : "piece";
      el.movementEditQty.value = movement.qty;
      el.movementEditAmount.value = Number(movement.amount || 0);
      el.movementEditNote.value = movement.note || "";
      el.movementEditDriverWrap.classList.toggle("hidden", !movementNeedsDriver(movement.type));
      clearNotice(el.movementEditNotice);
      el.movementEditModal.classList.remove("hidden");
    }

    function openMovementGroupEditModal(idsText) {
      const ids = String(idsText || "").split(",").filter(Boolean);
      const items = ids.map((id) => state.movements.find((m) => m.id === id)).filter(Boolean);
      if (!items.length) return;
      const entryType = entryTypeFromMovementType(items[0].type);
      if (entryType) {
        openEntryEditPage(ids.join(","));
        return;
      }
      const first = items[0];
      el.movementEditForm.dataset.mode = "group";
      el.movementEditForm.dataset.groupIds = ids.join(",");
      el.movementEditId.value = first.id;
      el.movementEditType.value = movementTypeName(first.type);
      el.movementEditDate.value = first.date || todayIso();
      fillDriverSelect(el.movementEditDriver, first.driverId || "");
      el.movementEditNote.value = first.note || "";
      el.movementEditDriverWrap.classList.toggle("hidden", !movementNeedsDriver(first.type));
      [el.movementEditProduct, el.movementEditUnit, el.movementEditQty, el.movementEditAmount].forEach((node) => {
        node.disabled = true;
        node?.closest(".field")?.classList.add("hidden");
      });
      el.movementEditGroupWrap.classList.remove("hidden");
      el.movementEditGroupBody.innerHTML = "";
      items.forEach((m) => {
        const tr = document.createElement("tr");
        tr.dataset.groupMovementId = m.id;
        tr.innerHTML = `
          <td><select class="entry-input" data-group-field="product"></select></td>
          <td><select class="entry-input" data-group-field="unit"><option value="bag">Qop</option><option value="piece">Dona</option></select></td>
          <td><input class="entry-input" data-group-field="qty" type="number" min="1" step="1" value="${m.qty}"></td>
          <td><input class="entry-input" data-group-field="amount" type="number" min="0" step="1" value="${Number(m.amount || 0)}"></td>
        `;
        el.movementEditGroupBody.appendChild(tr);
        fillProductSelect(tr.querySelector('[data-group-field="product"]'), m.productId);
        tr.querySelector('[data-group-field="unit"]').value = m.unit === "bag" ? "bag" : "piece";
      });
      clearNotice(el.movementEditNotice);
      el.movementEditModal.classList.remove("hidden");
    }

    function setSelectValue(selectNode, value) {
      if (!selectNode) return;
      const safeValue = String(value || "");
      if (safeValue && ![...selectNode.options].some((option) => option.value === safeValue)) {
        const option = document.createElement("option");
        option.value = safeValue;
        option.textContent = safeValue;
        selectNode.appendChild(option);
      }
      selectNode.value = safeValue;
    }

    function movementDraftPrice(movement) {
      const qty = Math.max(1, Number(movement.qty || 0));
      return Math.round(Number(movement.amount || 0) / qty);
    }

    function fillDraftFromMovements(type, items) {
      clearEntryDraft(type);
      items.forEach((movement) => {
        const product = getProduct(movement.productId);
        if (!product) return;
        const draft = ensureEntryDraft(type, product);
        const amount = Number(movement.amount || 0);
        draft.amount = String((Number(draft.amount || 0) || 0) + amount);
        if (movement.unit === "bag") {
          draft.bag = String((toInt(draft.bag) || 0) + Number(movement.qty || 0));
          draft.bagPrice = String(movementDraftPrice(movement));
        } else {
          draft.piece = String((toInt(draft.piece) || 0) + Number(movement.qty || 0));
          draft.piecePrice = String(movementDraftPrice(movement));
        }
      });
    }

    function openEntryEditPage(idsText) {
      const ids = String(idsText || "").split(",").filter(Boolean);
      const items = ids.map((id) => state.movements.find((m) => m.id === id)).filter(Boolean);
      if (!items.length) return;
      const first = items[0];
      const type = entryTypeFromMovementType(first.type);
      if (!type) return;

      state.editingEntry = { type, ids: items.map((m) => m.id) };
      state.productSearch[entrySearchKey(type)] = "";
      const searchInput = entrySearchInputForType(type);
      if (searchInput) searchInput.value = "";
      state.pagination[`${type}Entry`] = 1;
      fillDraftFromMovements(type, items);

      if (type === "incoming") {
        document.getElementById("incomingDate").value = first.date || todayIso();
        el.incomingComment.value = first.note || "";
      }
      if (type === "driverOut") {
        document.getElementById("driverOutDate").value = first.date || todayIso();
        setSelectValue(el.driverOutDriver, first.driverId || "");
        el.driverOutComment.value = first.note || "";
      }
      if (type === "otherOut") {
        document.getElementById("otherOutDate").value = first.date || todayIso();
        setSelectValue(el.otherOutReason, first.note || "Obrazets");
      }
      if (type === "return") {
        document.getElementById("returnDate").value = first.date || todayIso();
        setSelectValue(el.returnDriver, first.driverId || "");
        el.returnComment.value = first.note || "";
      }
      if (type === "stockEdit") {
        document.getElementById("stockEditDate").value = first.date || todayIso();
        el.stockEditOperation.value = first.type === "adjust_out" ? "subtract" : "add";
        el.stockEditNote.value = first.note || "";
      }

      activateSection(sectionForEntryType(type));
      renderAll();
      scrollToEntryForm(type);
      const noticeNode = noticeForEntryType(type);
      if (noticeNode) showNotice(noticeNode, "Tahrirlash rejimi: kerakli mahsulotlarni to'liq ro'yxatda o'zgartirib, yangilash tugmasini bosing.", "ok");
    }

    function closeDriverEditModal() {
      el.driverEditModal.classList.add("hidden");
      delete el.driverEditModal.dataset.photo;
      clearNotice(el.driverEditNotice);
    }

    function openDriverEditModal(driverId) {
      const driver = getDriver(driverId);
      if (!driver) return;
      el.driverEditId.value = driver.id;
      el.driverEditName.value = driver.name || "";
      el.driverEditPhone.value = driver.phone || "";
      el.driverEditVehicle.value = driver.vehicle || "";
      el.driverEditModal.dataset.photo = driver.photo || "";
      if (el.driverEditPhoto) el.driverEditPhoto.value = "";
      paintAvatar(el.driverEditAvatar, driver.photo, `${driver.name} rasmi`);
      clearNotice(el.driverEditNotice);
      el.driverEditModal.classList.remove("hidden");
    }

    function filterLabel() {
      if (!state.globalFilter.active) return "Filtr: o'chirilgan";
      return `Filtr: ${state.globalFilter.from} dan ${state.globalFilter.to} gacha`;
    }

    function shiftDate(baseDate, days) {
      const d = new Date(baseDate);
      d.setDate(d.getDate() + days);
      return dateToIso(d);
    }

    function applyFilterPreset(preset) {
      const now = new Date();
      const today = dateToIso(now);
      let from = today;
      let to = today;
      if (preset === "yesterday") {
        from = shiftDate(now, -1);
        to = from;
      }
      if (preset === "last7") {
        from = shiftDate(now, -6);
        to = today;
      }
      if (preset === "last30") {
        from = shiftDate(now, -29);
        to = today;
      }
      if (preset === "prevMonth") {
        const first = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const last = new Date(now.getFullYear(), now.getMonth(), 0);
        from = dateToIso(first);
        to = dateToIso(last);
      }
      if (preset === "custom") {
        return;
      }
      el.globalFrom.value = from;
      el.globalTo.value = to;
      document.querySelectorAll(".filter-preset-btn").forEach((b) => b.classList.toggle("active", b.dataset.filterPreset === preset));
    }

    function movementInGlobalFilter(m) {
      if (!state.globalFilter.active) return true;
      return inRange(m.date, state.globalFilter.from, state.globalFilter.to);
    }

    function ensurePager(tableId) {
      const id = `${tableId}Pager`;
      let node = document.getElementById(id);
      if (!node) {
        const table = document.getElementById(tableId);
        if (!table || !table.parentElement) return null;
        node = document.createElement("div");
        node.className = "pager";
        node.id = id;
        table.parentElement.insertAdjacentElement("afterend", node);
      }
      return node;
    }

    function pageInfo(key, totalItems) {
      const pages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
      let page = state.pagination[key] || 1;
      if (page > pages) page = pages;
      if (page < 1) page = 1;
      state.pagination[key] = page;
      const start = (page - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      return { page, pages, start, end };
    }

    function slicePage(rows, key) {
      const p = pageInfo(key, rows.length);
      return { pageRows: rows.slice(p.start, p.end), page: p.page, pages: p.pages };
    }

    function renderPager(tableId, key, totalItems) {
      const pager = ensurePager(tableId);
      if (!pager) return;
      const p = pageInfo(key, totalItems);
      pager.innerHTML = `
        <button class="pager-btn" data-pager-key="${key}" data-pager-move="-1" ${p.page <= 1 ? "disabled" : ""}>Oldingi</button>
        <span class="pager-info">${p.page} / ${p.pages} (har betda 30 qator)</span>
        <button class="pager-btn" data-pager-key="${key}" data-pager-move="1" ${p.page >= p.pages ? "disabled" : ""}>Keyingi</button>
      `;
    }

    function ensureEntryDraft(type, productOrId) {
      const product = typeof productOrId === "string" ? getProduct(productOrId) : productOrId;
      const productId = product ? product.id : productOrId;
      if (!state.entryDrafts[type][productId]) {
        state.entryDrafts[type][productId] = {
          bag: "",
          piece: "",
          bagPrice: product ? product.priceBag : "",
          piecePrice: product ? product.pricePiece : "",
          amount: ""
        };
      }
      const draft = state.entryDrafts[type][productId];
      if (product) {
        if (draft.bagPrice === "" || !isValidNumber(draft.bagPrice)) draft.bagPrice = product.priceBag;
        if (draft.piecePrice === "" || !isValidNumber(draft.piecePrice)) draft.piecePrice = product.pricePiece;
      }
      return draft;
    }

    function clearEntryDraft(type) {
      state.entryDrafts[type] = {};
      updateEntryTotal(type);
    }

    function entryDraftHasWrittenValues(type, productId) {
      const draft = state.entryDrafts[type]?.[productId];
      if (!draft) return false;
      return Math.max(0, toInt(draft.bag) || 0) > 0
        || Math.max(0, toInt(draft.piece) || 0) > 0
        || Math.max(0, Number(draft.amount) || 0) > 0;
    }

    function ensureEntryOnlyFilledControl(tableId, type) {
      const table = document.getElementById(tableId);
      const wrap = table?.closest(".table-wrap");
      if (!wrap || !wrap.parentElement) return;
      const id = `${tableId}OnlyFilledControl`;
      let control = document.getElementById(id);
      if (!control) {
        control = document.createElement("div");
        control.id = id;
        control.className = "actions";
        control.style.margin = "8px 0";
        wrap.parentElement.insertBefore(control, wrap);
      }
      const active = Boolean(state.entryOnlyFilled[type]);
      control.innerHTML = `<button class="btn ${active ? "btn-primary" : "btn-soft"} entry-only-filled-btn" data-entry-only-filled="${type}" type="button">${active ? "Barchasini ko'rsatish" : "Faqat yozilganlar"}</button>`;
    }

    function calcAmountByPrices(bagQty, pieceQty, bagPrice, piecePrice) {
      return bagQty * bagPrice + pieceQty * piecePrice;
    }

    function splitAmountsByPrices(bagQty, pieceQty, bagPrice, piecePrice, totalAmount) {
      const autoBag = bagQty > 0 ? bagQty * bagPrice : 0;
      const autoPiece = pieceQty > 0 ? pieceQty * piecePrice : 0;
      const total = isValidNumber(totalAmount) ? Number(totalAmount) : autoBag + autoPiece;
      if (bagQty > 0 && pieceQty > 0) {
        const denom = autoBag + autoPiece || 1;
        const bagAmount = Math.round((total * autoBag) / denom);
        return { bagAmount, pieceAmount: total - bagAmount };
      }
      if (bagQty > 0) return { bagAmount: total, pieceAmount: 0 };
      if (pieceQty > 0) return { bagAmount: 0, pieceAmount: total };
      return { bagAmount: 0, pieceAmount: 0 };
    }

    function entryTotalNode(type) {
      if (type === "incoming") return el.incomingEntryTotal;
      if (type === "stockEdit") return el.stockEditEntryTotal;
      if (type === "driverOut") return el.driverOutEntryTotal;
      if (type === "otherOut") return el.otherOutEntryTotal;
      return el.returnEntryTotal;
    }

    function updateEntryTotal(type) {
      const node = entryTotalNode(type);
      if (!node) return;
      const total = parsedDraftRows(type).reduce((acc, r) => acc + Number(r.amount || 0), 0);
      node.textContent = `Jami summa: ${fmtMoney(total)}`;
    }

    function addProduct(name, piecesPerBag, priceBag, pricePiece) {
      const safePieces = Math.max(1, Number(piecesPerBag || 1));
      const safeBagPrice = Math.max(0, Number(priceBag || 0));
      const finalPiecePrice = isValidNumber(pricePiece) ? Number(pricePiece) : Math.round(safeBagPrice / safePieces);
      const id = uid("product");
      state.products.push({
        id,
        name,
        piecesPerBag: safePieces,
        priceBag: safeBagPrice,
        pricePiece: Math.max(0, finalPiecePrice)
      });
      if (!(id in state.initialStock)) state.initialStock[id] = 0;
      requestStateSave();
    }

    function calcPiecePriceFromBag(priceBag, piecesPerBag) {
      const pieces = Math.max(1, toInt(piecesPerBag) || 1);
      const bag = Math.max(0, Number(priceBag) || 0);
      return Math.round(bag / pieces);
    }

    function calcBagPriceFromPiece(pricePiece, piecesPerBag) {
      const pieces = Math.max(1, toInt(piecesPerBag) || 1);
      const piece = Math.max(0, Number(pricePiece) || 0);
      return Math.round(piece * pieces);
    }

    function syncPriceInputs({ container, changedField, piecesPerBag }) {
      if (!container || (changedField !== "priceBag" && changedField !== "pricePiece" && changedField !== "bagPrice" && changedField !== "piecePrice")) return;
      const bagField = changedField === "bagPrice" || changedField === "piecePrice" ? "bagPrice" : "priceBag";
      const pieceField = changedField === "bagPrice" || changedField === "piecePrice" ? "piecePrice" : "pricePiece";
      const bagInput = container.querySelector(`[data-field="${bagField}"]`);
      const pieceInput = container.querySelector(`[data-field="${pieceField}"]`);
      if (!bagInput || !pieceInput) return;
      if (changedField === bagField) {
        pieceInput.value = String(calcPiecePriceFromBag(bagInput.value, piecesPerBag));
      } else if (changedField === pieceField) {
        bagInput.value = String(calcBagPriceFromPiece(pieceInput.value, piecesPerBag));
      }
    }

    function seedInitialProducts() {
      if (state.products.length > 0 || state.movements.length > 0) return;
      INITIAL_PRODUCTS.forEach((item) => {
        addProduct(decodeMojibake(item.name), item.pieces, item.priceBag || item.price * item.pieces, item.price);
      });
      state.catalogVersion = PRODUCT_CATALOG_VERSION;
    }

    function productNameLooksGarbled(name) {
      return /Р[А-Яа-яЁёЎўЋЌќ“”™]|\u0432\u0402|вЂ|С€|С‚/.test(String(name || ""));
    }

    function applyExcelCatalogIfNeeded() {
      if (!INITIAL_PRODUCTS.length) return false;
      const garbledCount = state.products.filter((product) => productNameLooksGarbled(product.name)).length;
      const shouldApply = state.catalogVersion !== PRODUCT_CATALOG_VERSION || !state.products.length || garbledCount >= Math.max(3, Math.ceil(state.products.length * 0.25));
      if (!shouldApply) return false;

      INITIAL_PRODUCTS.forEach((item, index) => {
        const name = decodeMojibake(item.name);
        const pieces = Math.max(1, toInt(item.pieces) || 1);
        const pricePiece = Math.max(0, Number(item.price || 0));
        const priceBag = Math.max(0, Number(item.priceBag || 0)) || pricePiece * pieces;
        const existing = state.products[index];
        if (existing) {
          existing.name = name;
          existing.piecesPerBag = pieces;
          existing.pricePiece = pricePiece;
          existing.priceBag = priceBag;
          if (!(existing.id in state.initialStock)) state.initialStock[existing.id] = 0;
          return;
        }
        const id = uid("product");
        state.products.push({
          id,
          name,
          piecesPerBag: pieces,
          priceBag,
          pricePiece
        });
        state.initialStock[id] = 0;
      });
      if (state.products.length > INITIAL_PRODUCTS.length) {
        const removableIds = new Set();
        state.products.slice(INITIAL_PRODUCTS.length).forEach((product) => {
          const hasMovements = state.movements.some((movement) => movement.productId === product.id);
          const hasInitialStock = Math.max(0, toInt(state.initialStock[product.id]) || 0) > 0;
          if (!hasMovements && !hasInitialStock && productNameLooksGarbled(product.name)) removableIds.add(product.id);
        });
        if (removableIds.size) {
          state.products = state.products.filter((product) => !removableIds.has(product.id));
          removableIds.forEach((id) => {
            delete state.initialStock[id];
            Object.values(state.entryDrafts || {}).forEach((draft) => delete draft[id]);
          });
        }
      }
      state.catalogVersion = PRODUCT_CATALOG_VERSION;
      return true;
    }

    function applyInitialStockResetState() {
      state.products.forEach((product) => {
        state.initialStock[product.id] = 0;
      });
      el.initialStockForm?.querySelectorAll("[data-initial-stock-id]").forEach((input) => {
        input.value = "0";
      });
    }

    function clearAllInitialStock() {
      if (!state.products.length) {
        showNotice(el.initialStockNotice, "Tozalash uchun mahsulot yo'q.", "bad");
        return;
      }
      if (!confirm("Barcha mahsulotlarning boshlang'ich ostatkasi 0 qilinsinmi?")) return;
      applyInitialStockResetState();
      showNotice(el.initialStockNotice, "Barcha boshlang'ich ostatka tozalandi.", "ok");
      saveWithConflictRetry(applyInitialStockResetState);
      void clearResetCaches();
      renderAll();
    }

    function resetEntryDrafts() {
      Object.keys(state.entryDrafts).forEach((type) => {
        state.entryDrafts[type] = {};
      });
    }

    function applyOperationalResetState() {
      state.movements = [];
      applyInitialStockResetState();
      resetEntryDrafts();
      state.editingEntry = null;
      state.editingProductId = null;
      Object.keys(state.entryOnlyFilled).forEach((type) => {
        state.entryOnlyFilled[type] = false;
      });
      state.globalFilter = { active: false, from: "", to: "" };
      state.flowType = "all";
      state.stockAsOfDate = todayIso();
      Object.keys(state.pagination).forEach((key) => {
        state.pagination[key] = 1;
      });
      if (el.globalFrom) el.globalFrom.value = "";
      if (el.globalTo) el.globalTo.value = "";
      if (el.stockAsOfDate) el.stockAsOfDate.value = state.stockAsOfDate;
    }

    function resetOperationalData() {
      const ok = confirm("Barcha kirim, chiqim, vozvrat, sklad tahrirlari va boshlang'ich ostatka 0 qilinsinmi? Mahsulot katalogi va narxlar saqlanadi.");
      if (!ok) return;
      const secondOk = confirm("Bu amal ortga qaytarilmaydi. Davom etasizmi?");
      if (!secondOk) return;

      applyOperationalResetState();
      showNotice(el.productNotice, "Barcha hisoblar 0 qilindi.", "ok");
      saveWithConflictRetry(applyOperationalResetState);
      void clearResetCaches();
      renderAll();
    }

    function addDriver(name, phone, vehicle, photo = "") {
      state.drivers.push({ id: uid("driver"), name, phone, vehicle, photo });
      if (!state.selectedDriverId) state.selectedDriverId = state.drivers[0].id;
      requestStateSave();
    }

    function addMovement({ date, type, productId, unit, qty, amount, driverId = null, note = "", batchId = "" }) {
      const product = getProduct(productId);
      if (!product) return false;
      state.movements.push({
        id: uid("mv"),
        date,
        type,
        productId,
        unit,
        qty,
        pieces: toPieces(product, qty, unit),
        amount: Number(amount || 0),
        driverId,
        note,
        batchId
      });
      requestStateSave();
      return true;
    }

    function renderSelectors() {
      const productSelectIds = ["deleteProductSelect"];
      productSelectIds.forEach((id) => {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = "";
        if (!state.products.length) {
          select.innerHTML = "<option value=''>Mahsulot yo'q</option>";
          return;
        }
        state.products.forEach((p) => {
          const op = document.createElement("option");
          op.value = p.id;
          op.textContent = p.name;
          select.appendChild(op);
        });
      });

      const driverSelectIds = ["driverOutDriver", "returnDriver"];
      driverSelectIds.forEach((id) => {
        const select = document.getElementById(id);
        if (!select) return;
        const selectedValue = select.value;
        select.innerHTML = "";
        if (!state.drivers.length) {
          select.innerHTML = "<option value=''>Haydovchi yo'q</option>";
          return;
        }
        state.drivers.forEach((d) => {
          const op = document.createElement("option");
          op.value = d.id;
          op.textContent = d.name;
          if (d.id === selectedValue) op.selected = true;
          select.appendChild(op);
        });
      });
    }

    function renderEntryTable(type, body, tableId) {
      ensureEntryOnlyFilledControl(tableId, type);
      if (!state.products.length) {
        tableEmpty(body, 6, "Mahsulot qo'shilgach ro'yxat chiqadi.");
        renderPager(tableId, `${type}Entry`, 0);
        updateEntryTotal(type);
        return;
      }
      const query = normalizeSearch(state.productSearch[entrySearchKey(type)]);
      let rows = state.products.filter((p) => productMatchesSearch(p, query));
      if (state.entryOnlyFilled[type]) {
        rows = rows.filter((p) => entryDraftHasWrittenValues(type, p.id));
      }
      if (!rows.length) {
        tableEmpty(body, 6, state.entryOnlyFilled[type] ? "Yozilgan mahsulot yo'q." : "Qidiruv bo'yicha mahsulot topilmadi.");
        renderPager(tableId, `${type}Entry`, 0);
        updateEntryTotal(type);
        return;
      }
      const { pageRows } = slicePage(rows, `${type}Entry`);
      body.innerHTML = "";
      pageRows.forEach((p) => {
        const d = ensureEntryDraft(type, p);
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${escapeHtml(p.name)}</td>
          <td><input class="entry-input" data-entry-type="${type}" data-product-id="${p.id}" data-field="bagPrice" type="number" min="0" step="1" value="${d.bagPrice}"></td>
          <td><input class="entry-input" data-entry-type="${type}" data-product-id="${p.id}" data-field="piecePrice" type="number" min="0" step="1" value="${d.piecePrice}"></td>
          <td><input class="entry-input" data-entry-type="${type}" data-product-id="${p.id}" data-field="bag" type="number" min="0" step="1" value="${d.bag}"></td>
          <td><input class="entry-input" data-entry-type="${type}" data-product-id="${p.id}" data-field="piece" type="number" min="0" step="1" value="${d.piece}"></td>
          <td><input class="entry-input" data-entry-type="${type}" data-product-id="${p.id}" data-field="amount" type="number" min="0" step="1" value="${d.amount}"></td>
        `;
        body.appendChild(tr);
      });
      renderPager(tableId, `${type}Entry`, rows.length);
      updateEntryTotal(type);
    }

    function parsedDraftRows(type) {
      const result = [];
      Object.entries(state.entryDrafts[type]).forEach(([productId, row]) => {
        const product = getProduct(productId);
        if (!product) return;
        const bagQty = Math.max(0, toInt(row.bag) || 0);
        const pieceQty = Math.max(0, toInt(row.piece) || 0);
        const hasQty = bagQty > 0 || pieceQty > 0;
        if (!hasQty) return;
        const bagPrice = isValidNumber(row.bagPrice) ? Number(row.bagPrice) : Number(product.priceBag || 0);
        const piecePrice = isValidNumber(row.piecePrice) ? Number(row.piecePrice) : Number(product.pricePiece || 0);
        const autoAmount = calcAmountByPrices(bagQty, pieceQty, bagPrice, piecePrice);
        const amount = row.amount === "" || !isValidNumber(row.amount) ? autoAmount : Number(row.amount);
        result.push({ productId, bagQty, pieceQty, bagPrice, piecePrice, amount });
      });
      return result;
    }

    function applyEntryRows({ type, date, driverId = null, noticeNode, note = "" }) {
      const rows = parsedDraftRows(type);
      if (!rows.length) {
        showNotice(noticeNode, "Hech bo'lmasa bitta qatorda miqdor kiriting.", "bad");
        return false;
      }
      if (!date) {
        showNotice(noticeNode, "Sana tanlang.", "bad");
        return false;
      }
      const editingIds = state.editingEntry && state.editingEntry.type === type ? state.editingEntry.ids : [];
      const oldEditingItems = editingIds.map((id) => state.movements.find((m) => m.id === id)).filter(Boolean);
      const sMap = stockMap();
      oldEditingItems.forEach((m) => applyMovementToStockMap(sMap, m, -1));
      if (type === "driverOut" || type === "otherOut") {
        const need = {};
        rows.forEach((r) => {
          const p = getProduct(r.productId);
          if (!p) return;
          const pieces = r.bagQty * p.piecesPerBag + r.pieceQty;
          need[r.productId] = (need[r.productId] || 0) + pieces;
        });
        for (const [productId, pieces] of Object.entries(need)) {
          if ((sMap[productId] || 0) < pieces) {
            const p = getProduct(productId);
            showNotice(noticeNode, `Skladda yetarli qoldiq yo'q: ${p ? p.name : productId}`, "bad");
            return false;
          }
        }
      }

      if (editingIds.length) {
        state.movements = state.movements.filter((m) => !editingIds.includes(m.id));
      }
      const batchId = uid("batch");
      rows.forEach((r) => {
        const p = getProduct(r.productId);
        if (!p) return;
        const amounts = splitAmountsByPrices(r.bagQty, r.pieceQty, r.bagPrice, r.piecePrice, r.amount);
        const movementType =
          type === "incoming" ? "incoming" : type === "driverOut" ? "driver_out" : type === "otherOut" ? "other_out" : "driver_return";
        if (r.bagQty > 0) {
          addMovement({
            date,
            type: movementType,
            productId: r.productId,
            unit: "bag",
            qty: r.bagQty,
            amount: amounts.bagAmount,
            driverId,
            note,
            batchId
          });
        }
        if (r.pieceQty > 0) {
          addMovement({
            date,
            type: movementType,
            productId: r.productId,
            unit: "piece",
            qty: r.pieceQty,
            amount: amounts.pieceAmount,
            driverId,
            note,
            batchId
          });
        }
      });
      clearEntryDraft(type);
      if (state.editingEntry && state.editingEntry.type === type) state.editingEntry = null;
      return true;
    }

    function applyStockEditRows({ date, operation, noticeNode, note = "" }) {
      const rows = parsedDraftRows("stockEdit");
      if (!rows.length) {
        showNotice(noticeNode, "Hech bo'lmasa bitta mahsulot qatorida miqdor kiriting.", "bad");
        return false;
      }
      if (!date) {
        showNotice(noticeNode, "Sana tanlang.", "bad");
        return false;
      }

      const editingIds = state.editingEntry && state.editingEntry.type === "stockEdit" ? state.editingEntry.ids : [];
      const oldEditingItems = editingIds.map((id) => state.movements.find((m) => m.id === id)).filter(Boolean);
      const sMap = stockMap();
      oldEditingItems.forEach((m) => applyMovementToStockMap(sMap, m, -1));
      if (operation === "subtract") {
        for (const r of rows) {
          const p = getProduct(r.productId);
          if (!p) continue;
          const pieces = r.bagQty * p.piecesPerBag + r.pieceQty;
          if ((sMap[r.productId] || 0) < pieces) {
            showNotice(noticeNode, `Skladda yetarli qoldiq yo'q: ${p.name}`, "bad");
            return false;
          }
        }
      }

      let changed = false;
      const batchId = uid("batch");
      const pendingMovements = [];
      const queueMovement = (movement) => {
        const product = getProduct(movement.productId);
        if (!product) return;
        pendingMovements.push({
          id: uid("mv"),
          date: movement.date,
          type: movement.type,
          productId: movement.productId,
          unit: movement.unit,
          qty: movement.qty,
          pieces: toPieces(product, movement.qty, movement.unit),
          amount: Number(movement.amount || 0),
          driverId: null,
          note: movement.note || "",
          batchId
        });
        changed = true;
      };
      rows.forEach((r) => {
        const p = getProduct(r.productId);
        if (!p) return;
        if (operation === "reset") {
          const current = sMap[r.productId] || 0;
          if (current <= 0) return;
          const bagQty = Math.floor(current / p.piecesPerBag);
          const pieceQty = current % p.piecesPerBag;
          const resetAmount = calcAmountByPrices(bagQty, pieceQty, r.bagPrice, r.piecePrice);
          const amounts = splitAmountsByPrices(bagQty, pieceQty, r.bagPrice, r.piecePrice, resetAmount);
          if (bagQty > 0) {
            queueMovement({
              date,
              type: "adjust_out",
              productId: r.productId,
              unit: "bag",
              qty: bagQty,
              amount: amounts.bagAmount,
              note: note || "Qoldiq 0 qilindi"
            });
          }
          if (pieceQty > 0) {
            queueMovement({
              date,
              type: "adjust_out",
              productId: r.productId,
              unit: "piece",
              qty: pieceQty,
              amount: amounts.pieceAmount,
              note: note || "Qoldiq 0 qilindi"
            });
          }
          return;
        }

        const amounts = splitAmountsByPrices(r.bagQty, r.pieceQty, r.bagPrice, r.piecePrice, r.amount);
        const movementType = operation === "add" ? "adjust_in" : "adjust_out";
        const defaultNote = operation === "add" ? "Skladga qo'shildi" : "Skladdan kamaytirildi";
        if (r.bagQty > 0) {
          queueMovement({
            date,
            type: movementType,
            productId: r.productId,
            unit: "bag",
            qty: r.bagQty,
            amount: amounts.bagAmount,
            note: note || defaultNote
          });
        }
        if (r.pieceQty > 0) {
          queueMovement({
            date,
            type: movementType,
            productId: r.productId,
            unit: "piece",
            qty: r.pieceQty,
            amount: amounts.pieceAmount,
            note: note || defaultNote
          });
        }
      });

      if (!changed) {
        showNotice(noticeNode, "Tanlangan qatorlarda o'zgartiriladigan qoldiq topilmadi.", "bad");
        return false;
      }
      if (editingIds.length) {
        state.movements = state.movements.filter((m) => !editingIds.includes(m.id));
      }
      state.movements.push(...pendingMovements);
      requestStateSave();
      clearEntryDraft("stockEdit");
      if (state.editingEntry && state.editingEntry.type === "stockEdit") state.editingEntry = null;
      return true;
    }

    function renderProducts() {
      if (!state.products.length) {
        tableEmpty(el.productsBody, 8, "Hozircha mahsulot kiritilmagan.");
        renderPager("productsTable", "products", 0);
        return;
      }
      const sMap = stockMap();
      const query = normalizeSearch(state.productSearch.products);
      const filtered = state.products.filter((p) => productMatchesSearch(p, query));
      if (!filtered.length) {
        tableEmpty(el.productsBody, 8, "Qidiruv bo'yicha mahsulot topilmadi.");
        renderPager("productsTable", "products", 0);
        return;
      }
      const rows = filtered.map((p, i) => {
        const stockPieces = sMap[p.id] || 0;
        const stockValue = Math.floor(stockPieces / p.piecesPerBag) * p.priceBag + (stockPieces % p.piecesPerBag) * p.pricePiece;
        return { product: p, index: i + 1, stock: qtyToText(p, stockPieces), value: stockValue };
      });
      const { pageRows } = slicePage(rows, "products");
      el.productsBody.innerHTML = "";
      pageRows.forEach((r) => {
        const tr = document.createElement("tr");
        const p = r.product;
        const isEditing = state.editingProductId === p.id;
        const disabledAttr = isEditing ? "" : " disabled";
        tr.innerHTML = `
          <td>${r.index}</td>
          <td><input class="product-edit-input" data-product-edit-id="${p.id}" data-field="name" value="${escapeHtml(p.name)}"${disabledAttr}></td>
          <td><input class="product-edit-input" data-product-edit-id="${p.id}" data-field="piecesPerBag" type="number" min="1" step="1" value="${p.piecesPerBag}"${disabledAttr}></td>
          <td><input class="product-edit-input" data-product-edit-id="${p.id}" data-field="priceBag" type="number" min="0" step="1" value="${p.priceBag}"${disabledAttr}></td>
          <td><input class="product-edit-input" data-product-edit-id="${p.id}" data-field="pricePiece" type="number" min="0" step="1" value="${p.pricePiece}"${disabledAttr}></td>
          <td>${r.stock}</td>
          <td>${fmtMoney(r.value)}</td>
          <td>
            <div class="row-actions">
              ${isEditing
                ? `<button class="btn btn-primary btn-sm product-save-btn" data-product-save-id="${p.id}" type="button">Saqlash</button><button class="btn btn-soft btn-sm product-cancel-edit-btn" data-product-cancel-edit-id="${p.id}" type="button">Bekor</button>`
                : `<button class="btn btn-soft btn-sm product-edit-start-btn" data-product-edit-start-id="${p.id}" type="button">Tahrirlash</button>`}
            </div>
          </td>
        `;
        el.productsBody.appendChild(tr);
      });
      renderPager("productsTable", "products", rows.length);
    }

    function renderInitialStock() {
      if (!state.products.length) {
        tableEmpty(el.initialStockBody, 3, "Boshlang'ich ostatka uchun mahsulot qo'shing.");
        renderPager("initialStockTable", "initialStock", 0);
        el.initialStockTotal.textContent = "Jami boshlang'ich ostatka: 0 dona";
        return;
      }
      const query = normalizeSearch(state.productSearch.initialStock);
      const rows = state.products.filter((p) => productMatchesSearch(p, query));
      if (!rows.length) {
        tableEmpty(el.initialStockBody, 3, "Qidiruv bo'yicha mahsulot topilmadi.");
        renderPager("initialStockTable", "initialStock", 0);
        const totalPiecesFallback = state.products.reduce((acc, p) => acc + Math.max(0, toInt(state.initialStock[p.id]) || 0), 0);
        el.initialStockTotal.textContent = `Jami boshlang'ich ostatka: ${totalPiecesFallback.toLocaleString("uz-UZ")} dona`;
        return;
      }
      const { pageRows } = slicePage(rows, "initialStock");
      el.initialStockBody.innerHTML = "";
      pageRows.forEach((p) => {
        const pieces = Math.max(0, toInt(state.initialStock[p.id]) || 0);
        if (!(p.id in state.initialStock)) state.initialStock[p.id] = 0;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${escapeHtml(p.name)}</td>
          <td><input class="product-edit-input" data-initial-stock-id="${p.id}" type="number" min="0" step="1" value="${pieces}"></td>
          <td>${qtyToText(p, pieces)}</td>
        `;
        el.initialStockBody.appendChild(tr);
      });
      renderPager("initialStockTable", "initialStock", rows.length);
      const totalPieces = state.products.reduce((acc, p) => acc + Math.max(0, toInt(state.initialStock[p.id]) || 0), 0);
      el.initialStockTotal.textContent = `Jami boshlang'ich ostatka: ${totalPieces.toLocaleString("uz-UZ")} dona`;
    }

    function renderIncoming() {
      const rows = groupedMovements(state.movements
        .filter((m) => m.type === "incoming")
        .filter(movementInGlobalFilter));
      if (!rows.length) {
        tableEmpty(el.incomingBody, 6, "Skladga kirimlar yo'q.");
        renderPager("incomingTable", "incoming", 0);
      } else {
        const { pageRows } = slicePage(rows, "incoming");
        el.incomingBody.innerHTML = "";
        pageRows.forEach((g) => {
          const tr = document.createElement("tr");
          tr.className = "movement-group-row";
          tr.dataset.movementEditIds = groupIds(g);
          tr.dataset.exportDetails = movementGroupDetails(g);
          tr.innerHTML = `
            ${selectCell(g.key)}
            <td>${safeDate(g.date)}</td>
            <td>${movementLabel(g.type)}</td>
            <td>${fmtMoney(g.amount)}</td>
            <td>${escapeHtml(g.note || "-")}</td>
            <td>${groupActionButtons(g)}</td>
          `;
          el.incomingBody.appendChild(tr);
        });
        renderPager("incomingTable", "incoming", rows.length);
      }
      renderEntryTable("incoming", el.incomingEntryBody, "incomingEntryTable");
    }

    function renderStock() {
      const sMap = stockMap();
      const query = normalizeSearch(state.productSearch.stock);
      const filteredProducts = state.products.filter((p) => productMatchesSearch(p, query));
      const stockRows = filteredProducts.map((p) => {
        const pieces = sMap[p.id] || 0;
        const value = Math.floor(pieces / p.piecesPerBag) * p.priceBag + (pieces % p.piecesPerBag) * p.pricePiece;
        return { p, pieces, value };
      });
      const stockTotal = sumBy(
        state.products.map((p) => {
          const pieces = sMap[p.id] || 0;
          const value = Math.floor(pieces / p.piecesPerBag) * p.priceBag + (pieces % p.piecesPerBag) * p.pricePiece;
          return { value };
        }),
        (r) => r.value
      );
      el.stockFoot.innerHTML = `
        <tr>
          <th colspan="4">Jami sklad summasi</th>
          <th>${fmtMoney(stockTotal)}</th>
          <th></th>
        </tr>
      `;
      if (!state.products.length) {
        tableEmpty(el.stockBody, 6, "Mahsulot qo'shilgandan keyin ostatka ko'rinadi.");
        renderPager("stockTable", "stock", 0);
      } else if (!stockRows.length) {
        tableEmpty(el.stockBody, 6, "Qidiruv bo'yicha mahsulot topilmadi.");
        renderPager("stockTable", "stock", 0);
      } else {
        const { pageRows } = slicePage(stockRows, "stock");
        el.stockBody.innerHTML = "";
        pageRows.forEach((r) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${escapeHtml(r.p.name)}</td>
            <td><input class="product-edit-input" data-stock-price-id="${r.p.id}" data-field="priceBag" type="number" min="0" step="1" value="${r.p.priceBag}"></td>
            <td><input class="product-edit-input" data-stock-price-id="${r.p.id}" data-field="pricePiece" type="number" min="0" step="1" value="${r.p.pricePiece}"></td>
            <td>${qtyToText(r.p, r.pieces)}</td>
            <td>${fmtMoney(r.value)}</td>
            <td><button class="btn btn-soft stock-price-save-btn" data-stock-price-save-id="${r.p.id}" type="button">Saqlash</button></td>
          `;
          el.stockBody.appendChild(tr);
        });
        renderPager("stockTable", "stock", stockRows.length);
      }
      renderEntryTable("stockEdit", el.stockEditEntryBody, "stockEditEntryTable");

      const edits = state.movements
        .filter((m) => m.type === "adjust_in" || m.type === "adjust_out")
        .filter(movementInGlobalFilter)
        .sort((a, b) => (a.date < b.date ? 1 : -1));
      if (!edits.length) {
        tableEmpty(el.stockEditBody, 7, "Sklad tahrir jurnali bo'sh.");
        renderPager("stockEditTable", "stockEdit", 0);
      } else {
        const { pageRows } = slicePage(edits, "stockEdit");
        el.stockEditBody.innerHTML = "";
        pageRows.forEach((m) => {
          const p = getProduct(m.productId);
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${safeDate(m.date)}</td>
            <td>${movementLabel(m.type)}</td>
            <td>${p ? escapeHtml(p.name) : "-"}</td>
            <td>${movementQtyText(m)}</td>
            <td>${fmtMoney(m.amount)}</td>
            <td>${escapeHtml(m.note || "-")}</td>
            <td>${movementActionButtons(m.id)}</td>
          `;
          el.stockEditBody.appendChild(tr);
        });
        renderPager("stockEditTable", "stockEdit", edits.length);
      }
    }

    function renderAdminPanel() {
      const admin = state.admin;
      const name = admin.name || "Admin";
      const role = admin.role || "Admin";
      const email = admin.email || "-";
      const login = admin.login || "-";
      const status = admin.status || "-";

      if (el.adminName && document.activeElement !== el.adminName) el.adminName.value = admin.name;
      if (el.adminRoleInput && document.activeElement !== el.adminRoleInput) el.adminRoleInput.value = admin.role;
      if (el.adminEmail && document.activeElement !== el.adminEmail) el.adminEmail.value = admin.email;
      if (el.adminStatus && document.activeElement !== el.adminStatus) el.adminStatus.value = admin.status;
      if (el.adminLogin && document.activeElement !== el.adminLogin) el.adminLogin.value = admin.login;
      if (el.adminPassword) el.adminPassword.value = "";

      if (el.topbarName) el.topbarName.textContent = name;
      if (el.topbarRole) el.topbarRole.textContent = role;
      if (el.dropdownName) el.dropdownName.textContent = name;
      if (el.dropdownRole) el.dropdownRole.textContent = role;
      if (el.dropdownEmail) el.dropdownEmail.textContent = email;
      if (el.dropdownLogin) el.dropdownLogin.textContent = login;
      if (el.dropdownStatus) el.dropdownStatus.textContent = status;

      paintAvatar(el.topbarAvatar, admin.photo, `${name} rasmi`);
      paintAvatar(el.dropdownAvatar, admin.photo, `${name} rasmi`);
      paintAvatar(el.adminAvatar, admin.photo, `${name} rasmi`);
    }

    function renderDrivers() {
      const today = todayIso();
      if (!state.drivers.length) {
        tableEmpty(el.driversBody, 6, "Hozircha haydovchi qo'shilmagan.");
        renderPager("driversTable", "drivers", 0);
      } else {
        const rows = state.drivers.map((d) => {
          const todayAmount = sumBy(
            state.movements.filter((m) => m.type === "driver_out" && m.driverId === d.id && m.date === today),
            (m) => Number(m.amount || 0)
          );
          const totalOut = sumBy(
            state.movements.filter((m) => m.type === "driver_out" && m.driverId === d.id).filter(movementInGlobalFilter),
            (m) => Number(m.amount || 0)
          );
          return { d, todayAmount, totalOut };
        });
        const { pageRows } = slicePage(rows, "drivers");
        el.driversBody.innerHTML = "";
        pageRows.forEach((r) => {
          const tr = document.createElement("tr");

          const nameCell = document.createElement("td");
          const nameWrap = document.createElement("div");
          nameWrap.className = "driver-name-cell";
          const avatar = document.createElement("div");
          avatar.className = "avatar";
          paintAvatar(avatar, r.d.photo, `${r.d.name} rasmi`);
          const profileBtn = document.createElement("button");
          profileBtn.className = "link-btn";
          profileBtn.dataset.driverId = r.d.id;
          profileBtn.type = "button";
          profileBtn.textContent = r.d.name;
          nameWrap.appendChild(avatar);
          nameWrap.appendChild(profileBtn);
          nameCell.appendChild(nameWrap);
          tr.appendChild(nameCell);

          const phoneCell = document.createElement("td");
          phoneCell.textContent = r.d.phone || "-";
          tr.appendChild(phoneCell);

          const vehicleCell = document.createElement("td");
          vehicleCell.textContent = r.d.vehicle || "-";
          tr.appendChild(vehicleCell);

          const todayCell = document.createElement("td");
          todayCell.textContent = fmtMoney(r.todayAmount);
          tr.appendChild(todayCell);

          const totalCell = document.createElement("td");
          totalCell.textContent = fmtMoney(r.totalOut);
          tr.appendChild(totalCell);

          const actionCell = document.createElement("td");
          const actionWrap = document.createElement("div");
          actionWrap.className = "row-actions";
          const editBtn = document.createElement("button");
          editBtn.className = "btn btn-soft btn-sm driver-edit-btn";
          editBtn.dataset.driverEditId = r.d.id;
          editBtn.type = "button";
          editBtn.textContent = "Tahrir";
          actionWrap.appendChild(editBtn);

          const deleteBtn = document.createElement("button");
          deleteBtn.className = "btn btn-danger btn-sm driver-delete-btn";
          deleteBtn.dataset.driverDeleteId = r.d.id;
          deleteBtn.type = "button";
          deleteBtn.textContent = "O'chirish";
          actionWrap.appendChild(deleteBtn);
          actionCell.appendChild(actionWrap);
          tr.appendChild(actionCell);

          el.driversBody.appendChild(tr);
        });
        renderPager("driversTable", "drivers", rows.length);
      }
      renderDriverProfile();
    }

    function renderDriverProfile() {
      if (!state.drivers.length) {
        el.driverProfile.innerHTML = "<div class='profile-row'><small>Holat</small><strong>Haydovchi yo'q</strong></div>";
        return;
      }
      const selected = getDriver(state.selectedDriverId) || state.drivers[0];
      state.selectedDriverId = selected.id;
      const outRows = state.movements.filter((m) => m.type === "driver_out" && m.driverId === selected.id);
      const retRows = state.movements.filter((m) => m.type === "driver_return" && m.driverId === selected.id);
      const lastOut = [...outRows].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
      const lastReturn = [...retRows].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
      const totalOut = sumBy(outRows.filter(movementInGlobalFilter), (m) => Number(m.amount || 0));
      const totalRet = sumBy(retRows.filter(movementInGlobalFilter), (m) => Number(m.amount || 0));
      el.driverProfile.innerHTML = `
        <div class="admin-head">
          <div class="avatar">${selected.photo ? `<img src="${escapeHtml(selected.photo)}" alt="${escapeHtml(selected.name)} rasmi">` : avatarPlaceholderSvg}</div>
          <div>
            <strong>${escapeHtml(selected.name)}</strong>
            <div class="inline-text" style="margin:4px 0 0;">${escapeHtml(selected.vehicle || "Transport kiritilmagan")}</div>
          </div>
          <button class="btn btn-soft btn-sm driver-edit-btn" data-driver-edit-id="${selected.id}" type="button">Profilni tahrirlash</button>
        </div>
        <div class="profile-row"><small>Haydovchi</small><strong>${escapeHtml(selected.name)}</strong></div>
        <div class="profile-row"><small>Telefon</small><strong>${escapeHtml(selected.phone || "-")}</strong></div>
        <div class="profile-row"><small>Transport</small><strong>${escapeHtml(selected.vehicle || "-")}</strong></div>
        <div class="profile-row"><small>Oxirgi marta tovar olgan</small><strong>${lastOut ? lastOut.date : "-"}</strong></div>
        <div class="profile-row"><small>Oxirgi marta vozvrat qilgan</small><strong>${lastReturn ? lastReturn.date : "-"}</strong></div>
        <div class="profile-row"><small>Jami olgan summa</small><strong>${fmtMoney(totalOut)}</strong></div>
        <div class="profile-row"><small>Jami vozvrat summa</small><strong>${fmtMoney(totalRet)}</strong></div>
      `;
    }

    function renderDriverOut() {
      const rows = groupedMovements(state.movements.filter((m) => m.type === "driver_out").filter(movementInGlobalFilter));
      if (!rows.length) {
        tableEmpty(el.driverOutBody, 7, "Haydovchilar olgan tovarlar yo'q.");
        renderPager("driverOutTable", "driverOut", 0);
      } else {
        const { pageRows } = slicePage(rows, "driverOut");
        el.driverOutBody.innerHTML = "";
        pageRows.forEach((g) => {
          const d = getDriver(g.driverId);
          const tr = document.createElement("tr");
          tr.className = "movement-group-row";
          tr.dataset.movementEditIds = groupIds(g);
          tr.dataset.exportDetails = movementGroupDetails(g);
          tr.innerHTML = `
            ${selectCell(g.key)}
            <td>${safeDate(g.date)}</td>
            <td>${movementLabel(g.type)}</td>
            <td>${d ? escapeHtml(d.name) : "-"}</td>
            <td>${fmtMoney(g.amount)}</td>
            <td>${escapeHtml(g.note || "-")}</td>
            <td>${groupActionButtons(g)}</td>
          `;
          el.driverOutBody.appendChild(tr);
        });
        renderPager("driverOutTable", "driverOut", rows.length);
      }
      renderEntryTable("driverOut", el.driverOutEntryBody, "driverOutEntryTable");
    }

    function renderReturns() {
      const rows = groupedMovements(state.movements.filter((m) => m.type === "driver_return").filter(movementInGlobalFilter));
      if (!rows.length) {
        tableEmpty(el.returnsBody, 7, "Vozvratlar yo'q.");
        renderPager("returnsTable", "returns", 0);
      } else {
        const { pageRows } = slicePage(rows, "returns");
        el.returnsBody.innerHTML = "";
        pageRows.forEach((g) => {
          const d = getDriver(g.driverId);
          const tr = document.createElement("tr");
          tr.className = "movement-group-row";
          tr.dataset.movementEditIds = groupIds(g);
          tr.dataset.exportDetails = movementGroupDetails(g);
          tr.innerHTML = `
            ${selectCell(g.key)}
            <td>${safeDate(g.date)}</td>
            <td>${movementLabel(g.type)}</td>
            <td>${d ? escapeHtml(d.name) : "-"}</td>
            <td>${fmtMoney(g.amount)}</td>
            <td>${escapeHtml(g.note || "-")}</td>
            <td>${groupActionButtons(g)}</td>
          `;
          el.returnsBody.appendChild(tr);
        });
        renderPager("returnsTable", "returns", rows.length);
      }
      renderEntryTable("return", el.returnEntryBody, "returnEntryTable");
    }

    function renderOtherOut() {
      const rows = groupedMovements(state.movements.filter((m) => m.type === "other_out").filter(movementInGlobalFilter));
      if (!rows.length) {
        tableEmpty(el.otherOutBody, 6, "Boshqa chiqimlar yo'q.");
        renderPager("otherOutTable", "otherOut", 0);
      } else {
        const { pageRows } = slicePage(rows, "otherOut");
        el.otherOutBody.innerHTML = "";
        pageRows.forEach((g) => {
          const tr = document.createElement("tr");
          tr.className = "movement-group-row";
          tr.dataset.movementEditIds = groupIds(g);
          tr.dataset.exportDetails = movementGroupDetails(g);
          tr.innerHTML = `
            ${selectCell(g.key)}
            <td>${safeDate(g.date)}</td>
            <td>${movementLabel(g.type)}</td>
            <td>${escapeHtml(g.note || "-")}</td>
            <td>${fmtMoney(g.amount)}</td>
            <td>${groupActionButtons(g)}</td>
          `;
          el.otherOutBody.appendChild(tr);
        });
        renderPager("otherOutTable", "otherOut", rows.length);
      }
      renderEntryTable("otherOut", el.otherOutEntryBody, "otherOutEntryTable");
    }

    function renderDashboard() {
      const filtered = state.movements.filter(movementInGlobalFilter);
      const map = {};
      state.products.forEach((p) => {
        map[p.id] = { in: 0, out: 0, ret: 0 };
      });
      filtered.forEach((m) => {
        if (!map[m.productId]) return;
        if (m.type === "incoming" || m.type === "adjust_in") map[m.productId].in += m.pieces;
        if (m.type === "driver_out" || m.type === "other_out" || m.type === "adjust_out") map[m.productId].out += m.pieces;
        if (m.type === "driver_return") map[m.productId].ret += m.pieces;
      });

      const rows = state.products.map((p) => ({ p, inPieces: map[p.id].in, outPieces: map[p.id].out, retPieces: map[p.id].ret }));
      const topIn = [...rows].sort((a, b) => b.inPieces - a.inPieces)[0];
      const topOut = [...rows].sort((a, b) => b.outPieces - a.outPieces)[0];

      document.getElementById("kpiTopInName").textContent = topIn && topIn.inPieces > 0 ? topIn.p.name : "-";
      document.getElementById("kpiTopInQty").textContent = topIn && topIn.inPieces > 0 ? qtyToText(topIn.p, topIn.inPieces) : "0 qop 0 dona";
      document.getElementById("kpiTopOutName").textContent = topOut && topOut.outPieces > 0 ? topOut.p.name : "-";
      document.getElementById("kpiTopOutQty").textContent = topOut && topOut.outPieces > 0 ? qtyToText(topOut.p, topOut.outPieces) : "0 qop 0 dona";

      const today = todayIso();
      const todayOut = sumBy(
        state.movements.filter((m) => (m.type === "driver_out" || m.type === "other_out") && m.date === today).filter(movementInGlobalFilter),
        (m) => Number(m.amount || 0)
      );
      document.getElementById("kpiTodayOutAmount").textContent = fmtMoney(todayOut);

      const stockDate = state.stockAsOfDate || todayIso();
      const stockInfo = stockTotals(stockDate);
      document.getElementById("kpiStockAmount").textContent = fmtMoney(stockInfo.amount);
      document.getElementById("kpiStockQty").textContent = `${stockDate} holatiga: ${stockInfo.products} mahsulot | ${stockInfo.pieces.toLocaleString("uz-UZ")} dona`;
      el.dashRangeText.textContent = filterLabel().replace("Filtr:", "Oraliq:");

      if (!state.products.length) {
        tableEmpty(el.dashboardProductsBody, 4, "Mahsulot qo'shilgach dashboard ko'rinadi.");
        renderPager("dashboardProductsTable", "dashProducts", 0);
      } else {
        const { pageRows } = slicePage(rows, "dashProducts");
        el.dashboardProductsBody.innerHTML = "";
        pageRows.forEach((r) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${escapeHtml(r.p.name)}</td>
            <td>${qtyToText(r.p, r.inPieces)}</td>
            <td>${qtyToText(r.p, r.outPieces)}</td>
            <td>${qtyToText(r.p, r.retPieces)}</td>
          `;
          el.dashboardProductsBody.appendChild(tr);
        });
        renderPager("dashboardProductsTable", "dashProducts", rows.length);
      }

      if (!state.drivers.length) {
        tableEmpty(el.dashboardDriversBody, 4, "Haydovchi qo'shilgach jadval to'ladi.");
        renderPager("dashboardDriversTable", "dashDrivers", 0);
      } else {
        const dRows = state.drivers.map((d) => {
          const outRows = state.movements.filter((m) => m.type === "driver_out" && m.driverId === d.id).filter(movementInGlobalFilter);
          const todayAmount = sumBy(outRows.filter((m) => m.date === today), (m) => Number(m.amount || 0));
          const total = sumBy(outRows, (m) => Number(m.amount || 0));
          const last = [...outRows].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
          return { d, todayAmount, total, lastDate: last ? last.date : "-" };
        });
        const { pageRows } = slicePage(dRows, "dashDrivers");
        el.dashboardDriversBody.innerHTML = "";
        pageRows.forEach((r) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${escapeHtml(r.d.name)}</td>
            <td>${fmtMoney(r.todayAmount)}</td>
            <td>${fmtMoney(r.total)}</td>
            <td>${r.lastDate}</td>
          `;
          el.dashboardDriversBody.appendChild(tr);
        });
        renderPager("dashboardDriversTable", "dashDrivers", dRows.length);
      }
    }

    function renderDailyFlow() {
      const rows = groupedMovements(state.movements
        .filter((m) => m.type === "driver_out" || m.type === "other_out" || m.type === "driver_return")
        .filter(movementInGlobalFilter)
        .filter((m) => {
          if (state.flowType === "all") return true;
          if (state.flowType === "out") return m.type === "driver_out" || m.type === "other_out";
          return m.type === "driver_return";
        }));

      el.flowRangeText.textContent = `${filterLabel().replace("Filtr:", "Oraliq:")} | Filtr turi: ${
        state.flowType === "all" ? "Barchasi" : state.flowType === "out" ? "Faqat Chiqim" : "Faqat Kirim"
      }`;

      if (!rows.length) {
        tableEmpty(el.dailyFlowBody, 7, "Tanlangan oraliqda harakatlar topilmadi.");
        renderPager("dailyFlowTable", "dailyFlow", 0);
        return;
      }
      const { pageRows } = slicePage(rows, "dailyFlow");
      el.dailyFlowBody.innerHTML = "";
      pageRows.forEach((g) => {
        const d = getDriver(g.driverId);
        const tr = document.createElement("tr");
        tr.className = "movement-group-row";
        tr.dataset.movementEditIds = groupIds(g);
        tr.dataset.exportDetails = movementGroupDetails(g);
        tr.innerHTML = `
          ${selectCell(g.key)}
          <td>${safeDate(g.date)}</td>
          <td>${movementLabel(g.type)}</td>
          <td>${d ? escapeHtml(d.name) : escapeHtml(g.note || "-")}</td>
          <td>${fmtMoney(g.amount)}</td>
          <td>${movementSource(g.type)}</td>
          <td>${groupActionButtons(g)}</td>
        `;
        el.dailyFlowBody.appendChild(tr);
      });
      renderPager("dailyFlowTable", "dailyFlow", rows.length);
    }

    function renderReports() {
      const filtered = state.movements.filter(movementInGlobalFilter);
      const map = {};
      state.products.forEach((p) => {
        map[p.id] = { in: 0, out: 0, ret: 0 };
      });

      let incomingAmount = 0;
      let outAmount = 0;
      let retAmount = 0;

      filtered.forEach((m) => {
        if (m.type === "incoming" || m.type === "adjust_in") {
          incomingAmount += Number(m.amount || 0);
          if (map[m.productId]) map[m.productId].in += m.pieces;
        }
        if (m.type === "driver_out" || m.type === "other_out" || m.type === "adjust_out") {
          outAmount += Number(m.amount || 0);
          if (map[m.productId]) map[m.productId].out += m.pieces;
        }
        if (m.type === "driver_return") {
          retAmount += Number(m.amount || 0);
          if (map[m.productId]) map[m.productId].ret += m.pieces;
        }
      });

      const totalIn = Object.values(map).reduce((a, v) => a + v.in, 0);
      const totalOut = Object.values(map).reduce((a, v) => a + v.out, 0);
      const totalRet = Object.values(map).reduce((a, v) => a + v.ret, 0);

      document.getElementById("reportIncomingQty").textContent = `${totalIn.toLocaleString("uz-UZ")} dona`;
      document.getElementById("reportIncomingAmount").textContent = fmtMoney(incomingAmount);
      document.getElementById("reportOutQty").textContent = `${totalOut.toLocaleString("uz-UZ")} dona`;
      document.getElementById("reportOutAmount").textContent = fmtMoney(outAmount);
      document.getElementById("reportReturnQty").textContent = `${totalRet.toLocaleString("uz-UZ")} dona`;
      document.getElementById("reportReturnAmount").textContent = fmtMoney(retAmount);
      document.getElementById("reportNetAmount").textContent = fmtMoney(outAmount - retAmount);
      el.reportRangeText.textContent = filterLabel().replace("Filtr:", "Hisobot davri:");
      const reportStockDate = getReportStockDate();
      const reportStockInfo = stockTotals(reportStockDate);
      if (el.reportStockAsOfText) {
        el.reportStockAsOfText.textContent = `Ostatka (${reportStockDate}): ${reportStockInfo.products} mahsulot | ${reportStockInfo.pieces.toLocaleString("uz-UZ")} dona | ${fmtMoney(reportStockInfo.amount)}`;
      }

      const sMap = reportStockInfo.map;
      if (!state.products.length) {
        tableEmpty(el.reportsBody, 5, "Hisobot uchun mahsulot qo'shing.");
        renderPager("reportsTable", "reports", 0);
        return;
      }
      const rows = state.products.map((p) => ({
        name: p.name,
        inVal: qtyToText(p, map[p.id].in),
        outVal: qtyToText(p, map[p.id].out),
        retVal: qtyToText(p, map[p.id].ret),
        stockVal: qtyToText(p, sMap[p.id] || 0)
      }));
      const { pageRows } = slicePage(rows, "reports");
      el.reportsBody.innerHTML = "";
      pageRows.forEach((r) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${escapeHtml(r.name)}</td>
          <td>${r.inVal}</td>
          <td>${r.outVal}</td>
          <td>${r.retVal}</td>
          <td>${r.stockVal}</td>
        `;
        el.reportsBody.appendChild(tr);
      });
      renderPager("reportsTable", "reports", rows.length);
    }

    function updateSelectAllState(table) {
      if (!table) return;
      const checks = [...table.querySelectorAll("tbody .export-row-check")];
      const headerCheck = table.querySelector("thead .export-row-check, thead [data-select-all]");
      if (!headerCheck) return;
      const checkedCount = checks.filter((check) => check.checked).length;
      headerCheck.checked = checks.length > 0 && checkedCount === checks.length;
      headerCheck.indeterminate = checkedCount > 0 && checkedCount < checks.length;
      headerCheck.disabled = checks.length === 0;
    }

    function requireProducts(noticeNode) {
      if (!state.products.length) {
        showNotice(noticeNode, "Avval mahsulot qo'shing.", "bad");
        return false;
      }
      return true;
    }

    function requireDrivers(noticeNode) {
      if (!state.drivers.length) {
        showNotice(noticeNode, "Avval haydovchi qo'shing.", "bad");
        return false;
      }
      return true;
    }

    function activateSection(targetId) {
      const target = document.getElementById(targetId);
      if (!target || !target.classList.contains("section")) {
        console.warn("Bo'lim topilmadi:", targetId);
        return;
      }

      el.sections.forEach((section) => {
        section.classList.toggle("active", section.id === targetId);
      });
      document.querySelectorAll(".menu-item").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.target === targetId);
      });
      updateFilterCardVisibility(targetId);

      const main = document.querySelector(".main");
      if (main) main.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderAll() {
      renderAdminPanel();
      renderSelectors();
      el.globalFilterText.textContent = filterLabel();
      if (el.stockAsOfDate && document.activeElement !== el.stockAsOfDate) el.stockAsOfDate.value = state.stockAsOfDate || todayIso();
      renderProducts();
      renderInitialStock();
      renderIncoming();
      renderStock();
      renderDrivers();
      renderDriverOut();
      renderReturns();
      renderOtherOut();
      renderDashboard();
      renderDailyFlow();
      renderReports();
      renderEntryEditStatus();
      const activeSection = document.querySelector(".section.active");
      updateFilterCardVisibility(activeSection?.id || "dashboardSection");
      ["incomingTable", "driverOutTable", "returnsTable", "otherOutTable", "dailyFlowTable"].forEach((tableId) => updateSelectAllState(document.getElementById(tableId)));
    }

    function selectedMovementIdsFromTable(tableId) {
      const table = document.getElementById(tableId);
      if (!table) return [];
      const ids = new Set();
      table.querySelectorAll("tbody .export-row-check:checked").forEach((check) => {
        const row = check.closest("tr");
        String(row?.dataset.movementEditIds || "").split(",").filter(Boolean).forEach((id) => ids.add(id));
      });
      return [...ids];
    }

    function deleteSelectedRows(tableId) {
      const ids = selectedMovementIdsFromTable(tableId);
      if (!ids.length) {
        alert("O'chirish uchun qatorlarni belgilang.");
        return;
      }
      if (!confirm(`${ids.length} ta ichki yozuvga tegishli tanlangan qatorlar o'chirilsinmi?`)) return;
      state.movements = state.movements.filter((m) => !ids.includes(m.id));
      requestStateSave();
      renderAll();
    }

    function applyZeroAllStockState() {
      const sMap = stockMap();
      const rows = state.products.map((p) => ({ product: p, pieces: Math.max(0, Number(sMap[p.id] || 0)) })).filter((row) => row.pieces > 0);
      if (!rows.length) {
        return false;
      }
      const date = todayIso();
      const batchId = uid("batch");
      rows.forEach(({ product, pieces }) => {
        const bagQty = Math.floor(pieces / product.piecesPerBag);
        const pieceQty = pieces % product.piecesPerBag;
        const amounts = splitAmountsByPrices(bagQty, pieceQty, product.priceBag, product.pricePiece, calcAmountByPrices(bagQty, pieceQty, product.priceBag, product.pricePiece));
        if (bagQty > 0) addMovement({ date, type: "adjust_out", productId: product.id, unit: "bag", qty: bagQty, amount: amounts.bagAmount, note: "Ostatka 0 qilindi", batchId });
        if (pieceQty > 0) addMovement({ date, type: "adjust_out", productId: product.id, unit: "piece", qty: pieceQty, amount: amounts.pieceAmount, note: "Ostatka 0 qilindi", batchId });
      });
      return true;
    }

    function zeroAllStock() {
      const sMap = stockMap();
      const rows = state.products.map((p) => Math.max(0, Number(sMap[p.id] || 0))).filter((pieces) => pieces > 0);
      if (!rows.length) {
        showNotice(el.stockEditNotice, "Sklad ostatkasi allaqachon 0.", "ok");
        return;
      }
      if (!confirm("Skladdagi barcha joriy ostatka 0 qilinsinmi?")) return;
      if (!applyZeroAllStockState()) return;
      showNotice(el.stockEditNotice, "Sklad ostatkasi 0 qilindi.", "ok");
      saveWithConflictRetry(applyZeroAllStockState);
      void clearResetCaches();
      renderAll();
    }

    function exportGroupTableRows(table, selectedRows) {
      const sourceRows = selectedRows.length ? selectedRows : [...table.querySelectorAll("tbody tr")];
      const rows = [];
      sourceRows.forEach((row) => {
        const ids = String(row.dataset.movementEditIds || "").split(",").filter(Boolean);
        ids.forEach((id) => {
          const m = state.movements.find((item) => item.id === id);
          if (!m) return;
          const p = getProduct(m.productId);
          const d = getDriver(m.driverId);
          rows.push({
            date: safeDate(m.date),
            status: movementTypeName(m.type),
            owner: d ? d.name : m.note || "-",
            product: p ? p.name : "-",
            qty: movementQtyText(m),
            amount: fmtMoney(m.amount),
            source: movementSource(m.type),
            note: m.note || "-"
          });
        });
      });
      return rows;
    }

    function exportTableToExcel(tableId, filename) {
      const table = document.getElementById(tableId);
      if (!table) return;
      const selected = [...table.querySelectorAll("tbody .export-row-check:checked")].map((check) => check.closest("tr")).filter(Boolean);
      const exportTable = table.cloneNode(true);
      if (selected.length) {
        const selectedKeys = new Set(selected.map((row) => row.querySelector(".export-row-check")?.dataset.exportRow));
        exportTable.querySelectorAll("tbody tr").forEach((row) => {
          const key = row.querySelector(".export-row-check")?.dataset.exportRow;
          if (!selectedKeys.has(key)) row.remove();
        });
      }
      const hasSelectableRows = Boolean(exportTable.querySelector(".export-row-check"));
      if (hasSelectableRows) {
        exportTable.querySelectorAll("thead tr").forEach((row) => {
          row.querySelector("th:last-child")?.remove();
          row.querySelector("th:first-child")?.remove();
          const detailsHead = document.createElement("th");
          detailsHead.textContent = "Tovarlar soni";
          const amountHead = [...row.children].find((cell) => cell.textContent.trim() === "Summa");
          row.insertBefore(detailsHead, amountHead || null);
        });
        exportTable.querySelectorAll("tbody tr").forEach((row) => {
          const ids = String(row.dataset.movementEditIds || "").split(",").filter(Boolean);
          const baseCells = [...row.children].map((cell) => cell.cloneNode(true));
          baseCells.shift();
          baseCells.pop();
          const amountIndex = baseCells.findIndex((cell) => cell.textContent.includes("so'm"));
          const detailIndex = amountIndex >= 0 ? amountIndex : baseCells.length;
          const movements = ids.map((id) => state.movements.find((item) => item.id === id)).filter(Boolean);

          if (!movements.length) {
            row.querySelector("td:last-child")?.remove();
            row.querySelector("td:first-child")?.remove();
            const detailsCell = document.createElement("td");
            detailsCell.textContent = row.dataset.exportDetails || "";
            row.insertBefore(detailsCell, amountIndex >= 0 ? row.children[amountIndex] : null);
            return;
          }

          const expandedRows = movements.map((movement) => {
            const product = getProduct(movement.productId);
            const nextRow = document.createElement("tr");
            const cells = baseCells.map((cell) => cell.cloneNode(true));
            if (amountIndex >= 0 && cells[amountIndex]) cells[amountIndex].textContent = fmtMoney(movement.amount);
            const detailsCell = document.createElement("td");
            detailsCell.textContent = `${product ? product.name : "-"}: ${movementQtyText(movement)}`;
            nextRow.append(...cells.slice(0, detailIndex), detailsCell, ...cells.slice(detailIndex));
            return nextRow;
          });
          row.replaceWith(...expandedRows);
        });
      }
      const title = document.querySelector(`[data-table="${tableId}"]`)?.dataset.file || filename || "hisobot";
      const exportedAt = new Date().toLocaleString("uz-UZ");
      const html = `
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; color: #1d2d44; }
              h2 { margin: 0 0 4px; color: #16355b; }
              p { margin: 0 0 12px; color: #687a95; }
              table { border-collapse: collapse; width: 100%; }
              th { background: #dceeff; color: #17375f; font-weight: 700; }
              th, td { border: 1px solid #b9cbe0; padding: 8px; vertical-align: top; }
              tr:nth-child(even) td { background: #f7fbff; }
            </style>
          </head>
          <body>
            <h2>${escapeHtml(title)}</h2>
            <p>Eksport vaqti: ${escapeHtml(exportedAt)}${selected.length ? ` | Tanlangan qatorlar: ${selected.length}` : ""}</p>
            ${exportTable.outerHTML}
          </body>
        </html>
      `;
      const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.xls`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }

    function initDates() {
      const t = todayIso();
      document.getElementById("incomingDate").value = t;
      document.getElementById("stockEditDate").value = t;
      document.getElementById("driverOutDate").value = t;
      document.getElementById("otherOutDate").value = t;
      document.getElementById("returnDate").value = t;
    }

    function initTopDate() {
      const now = new Date();
      const dateText = now.toLocaleDateString("uz-UZ", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      el.todayLabel.textContent = `Bugungi sana: ${dateText}`;
    }

    function rememberLogin() {
      try {
        localStorage.setItem(REMEMBER_LOGIN_KEY, JSON.stringify({ login: state.admin.login, savedAt: Date.now() }));
      } catch (error) {
        console.warn("Login eslab qolinmadi:", error);
      }
    }

    function clearRememberedLogin() {
      try {
        localStorage.removeItem(REMEMBER_LOGIN_KEY);
        localStorage.removeItem(SESSION_TOKEN_KEY);
        remoteSessionToken = "";
        remoteStateReady = false;
        offlineMode = false;
      } catch (error) {
        console.warn("Eslab qolingan login o'chirilmadi:", error);
      }
    }

    function hasRememberedLogin() {
      try {
        const saved = JSON.parse(localStorage.getItem(REMEMBER_LOGIN_KEY) || "null");
        return Boolean(saved && (localStorage.getItem(SESSION_TOKEN_KEY) || canUseOfflineLogin()));
      } catch {
        return false;
      }
    }

    function showApp() {
      state.user = { name: state.admin.name || state.admin.login };
      el.loginError.textContent = "";
      el.loginScreen.classList.add("hidden");
      el.app.classList.remove("hidden");
      renderAdminPanel();
    }

    function showLogin() {
      state.user = null;
      el.app.classList.add("hidden");
      el.loginScreen.classList.remove("hidden");
      el.loginForm.reset();
      el.profileDropdown.classList.add("hidden");
    }

    function bindEvents() {
      el.loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const user = document.getElementById("loginUsername").value.trim();
        const pass = document.getElementById("loginPassword").value.trim();
        el.loginError.textContent = "";
        try {
          await loginRemote(user, pass);
          rememberLogin();
          renderAll();
          showApp();
        } catch (error) {
          el.loginError.textContent = error.message || "Login yoki parol noto'g'ri.";
        }
      });

      document.getElementById("logoutBtn").addEventListener("click", () => {
        clearRememberedLogin();
        showLogin();
      });

      el.profileChip.addEventListener("click", (e) => {
        e.stopPropagation();
        el.profileDropdown.classList.toggle("hidden");
      });

      document.addEventListener("click", (e) => {
        if (!el.profileDropdown.classList.contains("hidden") && !el.profileDropdown.contains(e.target) && !el.profileChip.contains(e.target)) {
          el.profileDropdown.classList.add("hidden");
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        if (!el.movementEditModal.classList.contains("hidden")) closeMovementEditModal();
        if (!el.driverEditModal.classList.contains("hidden")) closeDriverEditModal();
      });

      el.menuList.addEventListener("click", (e) => {
        const btn = e.target.closest(".menu-item");
        if (!btn) return;
        const target = btn.dataset.target;
        activateSection(target);
      });

      [
        { node: el.incomingProductSearch, key: "incoming", pager: "incomingEntry" },
        { node: el.stockEditProductSearch, key: "stockEdit", pager: "stockEditEntry" },
        { node: el.driverOutProductSearch, key: "driverOut", pager: "driverOutEntry" },
        { node: el.returnProductSearch, key: "return", pager: "returnEntry" },
        { node: el.otherOutProductSearch, key: "otherOut", pager: "otherOutEntry" },
        { node: el.initialStockSearch, key: "initialStock", pager: "initialStock" },
        { node: el.productsSearch, key: "products", pager: "products" },
        { node: el.stockProductSearch, key: "stock", pager: "stock" }
      ].forEach(({ node, key, pager }) => {
        if (!node) return;
        node.addEventListener("input", () => {
          state.productSearch[key] = node.value || "";
          state.pagination[pager] = 1;
          renderAll();
        });
      });

      if (el.driverOutDriverSearch) {
        el.driverOutDriverSearch.addEventListener("input", () => {
          state.driverOutDriverSearch = el.driverOutDriverSearch.value || "";
          state.pagination.driverOut = 1;
          renderDriverOut();
        });
      }

      [
        { node: el.adminName, key: "name" },
        { node: el.adminRoleInput, key: "role" },
        { node: el.adminEmail, key: "email" },
        { node: el.adminStatus, key: "status" }
      ].forEach(({ node, key }) => {
        node.addEventListener("input", () => {
          state.admin[key] = node.value.trim();
          renderAdminPanel();
          requestStateSave();
        });
      });

      el.adminPhoto.addEventListener("change", async () => {
        const file = el.adminPhoto.files && el.adminPhoto.files[0];
        if (!file) return;
        state.admin.photo = await fileToDataUrl(file);
        renderAdminPanel();
        requestStateSave();
      });

      el.movementEditCloseBtn.addEventListener("click", closeMovementEditModal);
      el.movementEditCancelBtn.addEventListener("click", closeMovementEditModal);
      el.movementEditModal.addEventListener("click", (e) => {
        if (e.target === el.movementEditModal) closeMovementEditModal();
      });

      el.driverEditCloseBtn.addEventListener("click", closeDriverEditModal);
      el.driverEditCancelBtn.addEventListener("click", closeDriverEditModal);
      el.driverEditModal.addEventListener("click", (e) => {
        if (e.target === el.driverEditModal) closeDriverEditModal();
      });

      el.movementEditForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (el.movementEditForm.dataset.mode === "group") {
          const ids = String(el.movementEditForm.dataset.groupIds || "").split(",").filter(Boolean);
          const oldItems = ids.map((id) => state.movements.find((m) => m.id === id)).filter(Boolean);
          if (!oldItems.length) {
            showNotice(el.movementEditNotice, "Tahrirlanadigan qator topilmadi.", "bad");
            return;
          }
          const date = el.movementEditDate.value;
          const type = oldItems[0].type;
          const driverId = movementNeedsDriver(type) ? el.movementEditDriver.value : null;
          const note = el.movementEditNote.value.trim();
          if (!date || (movementNeedsDriver(type) && !driverId)) {
            showNotice(el.movementEditNotice, "Sana va haydovchini to'g'ri tanlang.", "bad");
            return;
          }
          const editedItems = [];
          for (const row of el.movementEditGroupBody.querySelectorAll("tr")) {
            const old = state.movements.find((m) => m.id === row.dataset.groupMovementId);
            const productId = row.querySelector('[data-group-field="product"]')?.value || "";
            const unit = row.querySelector('[data-group-field="unit"]')?.value === "bag" ? "bag" : "piece";
            const qty = toInt(row.querySelector('[data-group-field="qty"]')?.value);
            const amount = Number(row.querySelector('[data-group-field="amount"]')?.value);
            const product = getProduct(productId);
            if (!old || !product || !Number.isFinite(qty) || qty <= 0 || !Number.isFinite(amount) || amount < 0) {
              showNotice(el.movementEditNotice, "Guruhdagi mahsulot, miqdor va summalarni to'g'ri kiriting.", "bad");
              return;
            }
            editedItems.push({ ...old, date, productId, unit, qty: Math.max(1, qty), pieces: toPieces(product, Math.max(1, qty), unit), amount: Math.max(0, amount), driverId, note });
          }
          const projectedMap = stockMap();
          oldItems.forEach((m) => applyMovementToStockMap(projectedMap, m, -1));
          editedItems.forEach((m) => applyMovementToStockMap(projectedMap, m, 1));
          const negativeProductId = findNegativeStockProductId(projectedMap);
          if (negativeProductId) {
            const badProduct = getProduct(negativeProductId);
            showNotice(el.movementEditNotice, `Bu tahrir sklad qoldig'ini manfiy qiladi: ${badProduct ? badProduct.name : negativeProductId}`, "bad");
            return;
          }
          editedItems.forEach((edited) => Object.assign(state.movements.find((m) => m.id === edited.id), edited));
          requestStateSave();
          closeMovementEditModal();
          renderAll();
          return;
        }
        const movementId = el.movementEditId.value;
        const movement = state.movements.find((m) => m.id === movementId);
        if (!movement) {
          showNotice(el.movementEditNotice, "Tahrirlanadigan yozuv topilmadi.", "bad");
          return;
        }

        const date = el.movementEditDate.value;
        const productId = el.movementEditProduct.value;
        const unit = el.movementEditUnit.value === "bag" ? "bag" : "piece";
        const qty = toInt(el.movementEditQty.value);
        const amount = Number(el.movementEditAmount.value);
        const note = el.movementEditNote.value.trim();
        const type = movement.type;
        const driverId = movementNeedsDriver(type) ? el.movementEditDriver.value : null;

        if (!date || !productId || !Number.isFinite(qty) || qty <= 0 || !Number.isFinite(amount) || amount < 0) {
          showNotice(el.movementEditNotice, "Maydonlarni to'g'ri to'ldiring.", "bad");
          return;
        }
        if (movementNeedsDriver(type) && !driverId) {
          showNotice(el.movementEditNotice, "Haydovchini tanlang.", "bad");
          return;
        }
        const product = getProduct(productId);
        if (!product) {
          showNotice(el.movementEditNotice, "Mahsulot topilmadi.", "bad");
          return;
        }
        const editedMovement = {
          ...movement,
          date,
          productId,
          unit,
          qty: Math.max(1, qty),
          pieces: toPieces(product, Math.max(1, qty), unit),
          amount: Math.max(0, Number(amount)),
          driverId: movementNeedsDriver(type) ? driverId : null,
          note
        };
        const projectedMap = projectedStockMapAfterMovementEdit(movement, editedMovement);
        const negativeProductId = findNegativeStockProductId(projectedMap);
        if (negativeProductId) {
          const badProduct = getProduct(negativeProductId);
          showNotice(el.movementEditNotice, `Bu tahrir sklad qoldig'ini manfiy qiladi: ${badProduct ? badProduct.name : negativeProductId}`, "bad");
          return;
        }
        Object.assign(movement, editedMovement);

        requestStateSave();
        closeMovementEditModal();
        renderAll();
      });

      el.driverEditPhoto.addEventListener("change", async () => {
        const file = el.driverEditPhoto.files && el.driverEditPhoto.files[0];
        if (!file) return;
        const photo = await fileToDataUrl(file);
        el.driverEditModal.dataset.photo = photo;
        paintAvatar(el.driverEditAvatar, photo, "Haydovchi rasmi");
      });

      el.driverEditPhotoRemoveBtn.addEventListener("click", () => {
        el.driverEditModal.dataset.photo = "";
        paintAvatar(el.driverEditAvatar, "", "Haydovchi rasmi");
      });

      el.driverEditForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const driverId = el.driverEditId.value;
        const driver = getDriver(driverId);
        if (!driver) {
          showNotice(el.driverEditNotice, "Haydovchi topilmadi.", "bad");
          return;
        }
        const name = el.driverEditName.value.trim();
        if (!name) {
          showNotice(el.driverEditNotice, "Haydovchi nomini kiriting.", "bad");
          return;
        }
        driver.name = name;
        driver.phone = el.driverEditPhone.value.trim();
        driver.vehicle = el.driverEditVehicle.value.trim();
        driver.photo = typeof el.driverEditModal.dataset.photo === "string" ? el.driverEditModal.dataset.photo : driver.photo;

        requestStateSave();
        closeDriverEditModal();
        renderAll();
      });

      el.toggleFilterPanel.addEventListener("click", () => {
        el.globalFilterPanel.classList.toggle("hidden");
      });

      document.querySelectorAll(".filter-preset-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          applyFilterPreset(btn.dataset.filterPreset);
        });
      });

      el.applyGlobalFilter.addEventListener("click", () => {
        const from = el.globalFrom.value;
        const to = el.globalTo.value;
        if (!from || !to || from > to) {
          alert("Filtr sanalarini to'g'ri kiriting.");
          return;
        }
        state.globalFilter = { active: true, from, to };
        el.globalFilterPanel.classList.add("hidden");
        renderAll();
      });

      el.cancelGlobalFilter.addEventListener("click", () => {
        el.globalFilterPanel.classList.add("hidden");
      });

      el.clearGlobalFilter.addEventListener("click", () => {
        state.globalFilter = { active: false, from: "", to: "" };
        el.globalFrom.value = "";
        el.globalTo.value = "";
        document.querySelectorAll(".filter-preset-btn").forEach((b) => b.classList.remove("active"));
        document.querySelector('.filter-preset-btn[data-filter-preset="today"]')?.classList.add("active");
        renderAll();
      });

      if (el.applyStockAsOfDate && el.stockAsOfDate) {
        el.applyStockAsOfDate.addEventListener("click", () => {
          state.stockAsOfDate = el.stockAsOfDate.value || todayIso();
          renderAll();
        });
      }

      document.querySelectorAll("[data-flow-type]").forEach((chip) => {
        chip.addEventListener("click", () => {
          state.flowType = chip.dataset.flowType;
          document.querySelectorAll("[data-flow-type]").forEach((c) => c.classList.toggle("active", c === chip));
          renderDailyFlow();
        });
      });

      document.querySelectorAll(".export-btn").forEach((btn) => {
        btn.addEventListener("click", () => exportTableToExcel(btn.dataset.table, btn.dataset.file));
      });

      document.querySelectorAll(".delete-selected-btn").forEach((btn) => {
        btn.addEventListener("click", () => deleteSelectedRows(btn.dataset.table));
      });

      if (el.zeroStockBtn) {
        el.zeroStockBtn.addEventListener("click", zeroAllStock);
      }
      if (el.resetAllDataBtn) {
        el.resetAllDataBtn.addEventListener("click", resetOperationalData);
      }

      document.addEventListener("click", (e) => {
        const selectAll = e.target.closest("[data-select-all]");
        if (selectAll) {
          const table = selectAll.closest("table");
          if (!table) return;
          table.querySelectorAll("tbody .export-row-check").forEach((check) => {
            check.checked = selectAll.checked;
          });
          updateSelectAllState(table);
          return;
        }
        const onlyFilledBtn = e.target.closest(".entry-only-filled-btn");
        if (onlyFilledBtn) {
          const type = onlyFilledBtn.dataset.entryOnlyFilled;
          if (!type || !(type in state.entryOnlyFilled)) return;
          state.entryOnlyFilled[type] = !state.entryOnlyFilled[type];
          state.pagination[`${type}Entry`] = 1;
          renderAll();
          return;
        }
        const pager = e.target.closest("[data-pager-key]");
        if (pager) {
          const key = pager.dataset.pagerKey;
          const move = Number(pager.dataset.pagerMove || 0);
          state.pagination[key] = (state.pagination[key] || 1) + move;
          renderAll();
          return;
        }
        const movementGroupEditBtn = e.target.closest(".movement-group-edit-btn");
        if (movementGroupEditBtn) {
          openMovementGroupEditModal(movementGroupEditBtn.dataset.movementEditIds);
          return;
        }
        const movementEditBtn = e.target.closest(".movement-edit-btn");
        if (movementEditBtn) {
          openMovementEditModal(movementEditBtn.dataset.movementEditId);
          return;
        }
        const movementGroupDeleteBtn = e.target.closest(".movement-group-delete-btn");
        if (movementGroupDeleteBtn) {
          const ids = String(movementGroupDeleteBtn.dataset.movementDeleteIds || "").split(",").filter(Boolean);
          if (!ids.length) return;
          if (!confirm("Ushbu qatordagi barcha yozuvlar o'chirilsinmi? Sklad qoldig'i avtomatik qayta hisoblanadi.")) return;
          state.movements = state.movements.filter((m) => !ids.includes(m.id));
          requestStateSave();
          renderAll();
          return;
        }
        const movementDeleteBtn = e.target.closest(".movement-delete-btn");
        if (movementDeleteBtn) {
          const movementId = movementDeleteBtn.dataset.movementDeleteId;
          const movement = state.movements.find((m) => m.id === movementId);
          if (!movement) return;
          if (!confirm("Ushbu yozuv o'chirilsinmi? Sklad qoldig'i avtomatik qayta hisoblanadi.")) return;
          state.movements = state.movements.filter((m) => m.id !== movementId);
          requestStateSave();
          renderAll();
          return;
        }
        const driverEditBtn = e.target.closest(".driver-edit-btn");
        if (driverEditBtn) {
          openDriverEditModal(driverEditBtn.dataset.driverEditId);
          return;
        }
        const driverDeleteBtn = e.target.closest(".driver-delete-btn");
        if (driverDeleteBtn) {
          const driverId = driverDeleteBtn.dataset.driverDeleteId;
          const driver = getDriver(driverId);
          if (!driver) return;
          if (!confirm(`${driver.name} haydovchisi o'chirilsinmi? Unga tegishli chiqim va vozvratlar ham o'chadi.`)) return;
          state.drivers = state.drivers.filter((d) => d.id !== driverId);
          state.movements = state.movements.filter((m) => m.driverId !== driverId);
          state.selectedDriverId = state.drivers[0]?.id || null;
          requestStateSave();
          renderAll();
          return;
        }
        const saveBtn = e.target.closest(".product-save-btn");
        if (saveBtn) {
          const productId = saveBtn.dataset.productSaveId;
          if (state.editingProductId !== productId) return;
          const row = saveBtn.closest("tr");
          const product = getProduct(productId);
          if (!row || !product) return;
          const name = row.querySelector('[data-field="name"]')?.value?.trim() || "";
          const piecesPerBag = Number(row.querySelector('[data-field="piecesPerBag"]')?.value);
          const priceBag = Number(row.querySelector('[data-field="priceBag"]')?.value);
          const pricePiece = Number(row.querySelector('[data-field="pricePiece"]')?.value);
          if (!name || !isValidNumber(piecesPerBag) || piecesPerBag <= 0 || !isValidNumber(priceBag) || priceBag < 0 || !isValidNumber(pricePiece) || pricePiece < 0) {
            showNotice(el.productNotice, "Tahrirlash maydonlarini to'g'ri kiriting.", "bad");
            return;
          }
          product.name = name;
          product.piecesPerBag = Math.max(1, Math.round(piecesPerBag));
          product.priceBag = Math.max(0, Number(priceBag));
          product.pricePiece = Math.max(0, Number(pricePiece));
          state.editingProductId = null;
          showNotice(el.productNotice, "Mahsulot tahrirlandi.", "ok");
          requestStateSave();
          renderAll();
          return;
        }
        const productEditStartBtn = e.target.closest(".product-edit-start-btn");
        if (productEditStartBtn) {
          state.editingProductId = productEditStartBtn.dataset.productEditStartId;
          renderProducts();
          return;
        }
        const productCancelEditBtn = e.target.closest(".product-cancel-edit-btn");
        if (productCancelEditBtn) {
          state.editingProductId = null;
          renderProducts();
          return;
        }
        const stockPriceSaveBtn = e.target.closest(".stock-price-save-btn");
        if (stockPriceSaveBtn) {
          const productId = stockPriceSaveBtn.dataset.stockPriceSaveId;
          const row = stockPriceSaveBtn.closest("tr");
          const product = getProduct(productId);
          if (!row || !product) return;
          const priceBag = Number(row.querySelector('[data-field="priceBag"]')?.value);
          const pricePiece = Number(row.querySelector('[data-field="pricePiece"]')?.value);
          if (!isValidNumber(priceBag) || priceBag < 0 || !isValidNumber(pricePiece) || pricePiece < 0) {
            showNotice(el.stockEditNotice, "Narxlarni to'g'ri kiriting.", "bad");
            return;
          }
          product.priceBag = Math.max(0, Number(priceBag));
          product.pricePiece = Math.max(0, Number(pricePiece));
          showNotice(el.stockEditNotice, "Sklad narxlari tahrirlandi.", "ok");
          requestStateSave();
          renderAll();
          return;
        }
        const clearBtn = e.target.closest(".clear-entry-btn");
        if (clearBtn) {
          const entryType = clearBtn.dataset.entryType;
          clearEntryDraft(entryType);
          if (state.editingEntry?.type === entryType) state.editingEntry = null;
          renderAll();
          return;
        }
      });

      document.addEventListener("change", (e) => {
        const rowCheck = e.target.closest("tbody .export-row-check");
        if (!rowCheck) return;
        updateSelectAllState(rowCheck.closest("table"));
      });

      document.addEventListener("input", (e) => {
        const field = e.target.closest(".entry-input");
        if (!field) {
          const productField = e.target.closest(".product-edit-input");
          if (productField) {
            const row = productField.closest("tr");
            const changedField = productField.dataset.field;
            const productId = productField.dataset.productEditId || productField.dataset.stockPriceId;
            const product = getProduct(productId);
            const piecesInput = row?.querySelector('[data-field="piecesPerBag"]');
            const piecesPerBag = piecesInput ? piecesInput.value : product?.piecesPerBag;
            if (changedField === "piecesPerBag") {
              syncPriceInputs({ container: row, changedField: "pricePiece", piecesPerBag });
            } else {
              syncPriceInputs({ container: row, changedField, piecesPerBag });
            }
          } else if (e.target.id === "priceBag" || e.target.id === "pricePiece" || e.target.id === "piecesPerBag") {
            const piecesPerBag = document.getElementById("piecesPerBag")?.value;
            const bagInput = document.getElementById("priceBag");
            const pieceInput = document.getElementById("pricePiece");
            if (e.target.id === "priceBag" && pieceInput) {
              pieceInput.value = String(calcPiecePriceFromBag(bagInput.value, piecesPerBag));
            } else if ((e.target.id === "pricePiece" || e.target.id === "piecesPerBag") && bagInput) {
              bagInput.value = String(calcBagPriceFromPiece(pieceInput.value, piecesPerBag));
            }
          }
          return;
        }
        const type = field.dataset.entryType;
        const productId = field.dataset.productId;
        const key = field.dataset.field;
        if (!type || !productId || !key) return;
        const draft = ensureEntryDraft(type, productId);
        draft[key] = field.value;
        if (key === "bagPrice" || key === "piecePrice") {
          const product = getProduct(productId);
          const row = field.closest("tr");
          syncPriceInputs({ container: row, changedField: key, piecesPerBag: product?.piecesPerBag });
          const syncedDraft = ensureEntryDraft(type, productId);
          const bagPriceInput = row?.querySelector('[data-field="bagPrice"]');
          const piecePriceInput = row?.querySelector('[data-field="piecePrice"]');
          if (bagPriceInput) syncedDraft.bagPrice = bagPriceInput.value;
          if (piecePriceInput) syncedDraft.piecePrice = piecePriceInput.value;
        }
        if (key !== "amount") {
          const bagQty = Math.max(0, toInt(draft.bag) || 0);
          const pieceQty = Math.max(0, toInt(draft.piece) || 0);
          const bagPrice = Math.max(0, Number(draft.bagPrice) || 0);
          const piecePrice = Math.max(0, Number(draft.piecePrice) || 0);
          const total = calcAmountByPrices(bagQty, pieceQty, bagPrice, piecePrice);
          draft.amount = total > 0 ? String(total) : "";
          const row = field.closest("tr");
          const amountInput = row ? row.querySelector('[data-field="amount"]') : null;
          if (amountInput && amountInput !== field) amountInput.value = draft.amount;
        }
        updateEntryTotal(type);
      });

      el.initialStockForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!state.products.length) {
          showNotice(el.initialStockNotice, "Avval mahsulot qo'shing.", "bad");
          return;
        }
        const inputs = el.initialStockForm.querySelectorAll("[data-initial-stock-id]");
        const values = [];
        for (const input of inputs) {
          const productId = input.dataset.initialStockId;
          const raw = String(input.value || "").trim();
          const parsed = raw === "" ? 0 : Number(raw);
          if (!Number.isFinite(parsed) || parsed < 0 || !Number.isInteger(parsed)) {
            showNotice(el.initialStockNotice, "Boshlang'ich son maydoniga faqat 0 yoki undan katta butun son kiriting.", "bad");
            return;
          }
          values.push({ productId, value: parsed });
        }
        const applyInitialStockValues = () => {
          values.forEach(({ productId, value }) => {
            state.initialStock[productId] = value;
          });
        };
        applyInitialStockValues();
        showNotice(el.initialStockNotice, "Boshlang'ich ostatka saqlandi.", "ok");
        saveWithConflictRetry(applyInitialStockValues);
        renderAll();
      });

      el.clearInitialStockBtn.addEventListener("click", clearAllInitialStock);

      el.productForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("productName").value.trim();
        const piecesPerBag = toInt(document.getElementById("piecesPerBag").value);
        const priceBag = Number(document.getElementById("priceBag").value);
        const pricePiece = Number(document.getElementById("pricePiece").value);
        if (!name || !isValidNumber(piecesPerBag) || piecesPerBag <= 0 || !isValidNumber(priceBag) || priceBag < 0 || !isValidNumber(pricePiece) || pricePiece < 0) {
          showNotice(el.productNotice, "Maydonlarni to'g'ri to'ldiring.", "bad");
          return;
        }
        addProduct(name, piecesPerBag, priceBag, pricePiece);
        e.target.reset();
        showNotice(el.productNotice, "Mahsulot qo'shildi.", "ok");
        renderAll();
      });

      el.deleteProductForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = el.deleteProductSelect.value;
        if (!id) {
          showNotice(el.deleteProductNotice, "O'chirish uchun mahsulot yo'q.", "bad");
          return;
        }
        state.products = state.products.filter((p) => p.id !== id);
        state.movements = state.movements.filter((m) => m.productId !== id);
        delete state.entryDrafts.incoming[id];
        delete state.entryDrafts.stockEdit[id];
        delete state.entryDrafts.driverOut[id];
        delete state.entryDrafts.otherOut[id];
        delete state.entryDrafts.return[id];
        delete state.initialStock[id];
        showNotice(el.deleteProductNotice, "Mahsulot o'chirildi.", "ok");
        requestStateSave();
        renderAll();
      });

      el.incomingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!requireProducts(el.incomingNotice)) return;
        const wasEditing = state.editingEntry?.type === "incoming";
        const ok = applyEntryRows({
          type: "incoming",
          date: document.getElementById("incomingDate").value,
          noticeNode: el.incomingNotice,
          note: el.incomingComment.value.trim()
        });
        if (!ok) return;
        showNotice(el.incomingNotice, wasEditing ? "Kirim tahrirlandi." : "Skladga kirimlar saqlandi.", "ok");
        el.incomingComment.value = "";
        renderAll();
      });

      el.stockEditForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!requireProducts(el.stockEditNotice)) return;
        const wasEditing = state.editingEntry?.type === "stockEdit";
        const operation = el.stockEditOperation.value;
        const ok = applyStockEditRows({
          date: document.getElementById("stockEditDate").value,
          operation,
          noticeNode: el.stockEditNotice,
          note: el.stockEditNote.value.trim()
        });
        if (!ok) return;
        showNotice(el.stockEditNotice, wasEditing ? "Sklad tahriri yangilandi." : "Sklad tahriri ro'yxat bo'yicha saqlandi.", "ok");
        el.stockEditNote.value = "";
        renderAll();
      });

      el.driverForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("driverName").value.trim();
        const phone = document.getElementById("driverPhone").value.trim();
        const vehicle = document.getElementById("driverVehicle").value.trim();
        const photoFile = el.driverPhoto.files && el.driverPhoto.files[0];
        if (!name) {
          showNotice(el.driverNotice, "Haydovchi nomini kiriting.", "bad");
          return;
        }
        const photo = photoFile ? await fileToDataUrl(photoFile) : "";
        addDriver(name, phone, vehicle, photo);
        e.target.reset();
        showNotice(el.driverNotice, "Haydovchi qo'shildi.", "ok");
        renderAll();
      });

      el.driversBody.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-driver-id]");
        if (!btn) return;
        state.selectedDriverId = btn.dataset.driverId;
        renderDriverProfile();
        openDriverEditModal(btn.dataset.driverId);
      });

      el.driverOutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!requireProducts(el.driverOutNotice) || !requireDrivers(el.driverOutNotice)) return;
        const driverId = el.driverOutDriver.value;
        if (!driverId) {
          showNotice(el.driverOutNotice, "Haydovchini tanlang.", "bad");
          return;
        }
        const wasEditing = state.editingEntry?.type === "driverOut";
        const ok = applyEntryRows({
          type: "driverOut",
          date: document.getElementById("driverOutDate").value,
          driverId,
          noticeNode: el.driverOutNotice,
          note: el.driverOutComment.value.trim()
        });
        if (!ok) return;
        showNotice(el.driverOutNotice, wasEditing ? "Haydovchi chiqimi yangilandi." : "Haydovchi chiqimi saqlandi.", "ok");
        el.driverOutComment.value = "";
        renderAll();
      });

      el.otherOutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!requireProducts(el.otherOutNotice)) return;
        const wasEditing = state.editingEntry?.type === "otherOut";
        const ok = applyEntryRows({
          type: "otherOut",
          date: document.getElementById("otherOutDate").value,
          noticeNode: el.otherOutNotice,
          note: el.otherOutReason.value
        });
        if (!ok) return;
        showNotice(el.otherOutNotice, wasEditing ? "Boshqa chiqim yangilandi." : "Boshqa chiqim sklad ostatkasidan ayirildi.", "ok");
        renderAll();
      });

      el.returnForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!requireProducts(el.returnNotice) || !requireDrivers(el.returnNotice)) return;
        const driverId = el.returnDriver.value;
        if (!driverId) {
          showNotice(el.returnNotice, "Haydovchini tanlang.", "bad");
          return;
        }
        const wasEditing = state.editingEntry?.type === "return";
        const ok = applyEntryRows({
          type: "return",
          date: document.getElementById("returnDate").value,
          driverId,
          noticeNode: el.returnNotice,
          note: el.returnComment.value.trim()
        });
        if (!ok) return;
        showNotice(el.returnNotice, wasEditing ? "Vozvrat yangilandi." : "Vozvratlar saqlandi.", "ok");
        el.returnComment.value = "";
        renderAll();
      });
    }

    async function bootstrap() {
      initTopDate();
      initDates();
      applyFilterPreset("today");
      bindEvents();
      if (hasRememberedLogin()) {
        try {
          remoteSessionToken = localStorage.getItem(SESSION_TOKEN_KEY) || "";
        } catch {
          remoteSessionToken = "";
        }
        if (!remoteSessionToken && canUseOfflineLogin()) {
          startOfflineSession();
        }
        const restored = await loadRemoteState();
        if (restored) {
          renderAll();
          showApp();
          return;
        }
      }
      showLogin();
    }

    bootstrap();
