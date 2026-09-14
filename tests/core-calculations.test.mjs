import assert from "node:assert/strict";
import { movementDirection, qtyToText, stockMapFor, stockTotalsFor, toPieces } from "../assets/core.mjs";

const products = [
  { id: "p1", name: "Test mahsulot", piecesPerBag: 12, priceBag: 120000, pricePiece: 11000 },
  { id: "p2", name: "Ikkinchi mahsulot", piecesPerBag: 10, priceBag: 90000, pricePiece: 9500 }
];

const movements = [
  { productId: "p1", type: "incoming", date: "2026-09-10", pieces: 24 },
  { productId: "p1", type: "driver_out", date: "2026-09-11", pieces: 5 },
  { productId: "p1", type: "driver_return", date: "2026-09-12", pieces: 2 },
  { productId: "p2", type: "adjust_out", date: "2026-09-12", pieces: 3 }
];

assert.equal(toPieces(products[0], 2, "bag"), 24);
assert.equal(toPieces(products[0], 7, "piece"), 7);
assert.equal(qtyToText(products[0], 27), "2 qop 3 dona");

assert.equal(movementDirection("incoming"), "in");
assert.equal(movementDirection("driver_return"), "in");
assert.equal(movementDirection("driver_out"), "out");

assert.deepEqual(stockMapFor(products, movements, { p1: 6, p2: 4 }, "2026-09-11"), {
  p1: 25,
  p2: 4
});

const totals = stockTotalsFor(products, movements, { p1: 6, p2: 4 }, "2026-09-12");
assert.equal(totals.map.p1, 27);
assert.equal(totals.map.p2, 1);
assert.equal(totals.pieces, 28);
assert.equal(totals.products, 2);
assert.equal(totals.amount, 2 * 120000 + 3 * 11000 + 9500);

console.log("core calculations ok");
