export function toPieces(product, qty, unit) {
  if (!product) return 0;
  const safeQty = Math.max(0, Math.floor(Number(qty) || 0));
  const piecesPerBag = Math.max(1, Math.floor(Number(product.piecesPerBag) || 1));
  return unit === "bag" ? safeQty * piecesPerBag : safeQty;
}

export function qtyToText(product, pieces) {
  if (!product) return "0 dona";
  const piecesPerBag = Math.max(1, Math.floor(Number(product.piecesPerBag) || 1));
  const safePieces = Math.max(0, Math.floor(Number(pieces) || 0));
  const bag = Math.floor(safePieces / piecesPerBag);
  const rem = safePieces % piecesPerBag;
  return `${bag} qop ${rem} dona`;
}

export function movementDirection(type) {
  if (type === "incoming" || type === "adjust_in" || type === "driver_return") return "in";
  return "out";
}

export function stockMapFor(products, movements, initialStock = {}, asOfDate = "") {
  const map = {};
  products.forEach((product) => {
    map[product.id] = Math.max(0, Math.floor(Number(initialStock[product.id]) || 0));
  });
  movements.forEach((movement) => {
    if (!(movement.productId in map)) return;
    if (asOfDate && movement.date && movement.date > asOfDate) return;
    const pieces = Math.max(0, Math.floor(Number(movement.pieces) || 0));
    if (movementDirection(movement.type) === "in") map[movement.productId] += pieces;
    else map[movement.productId] -= pieces;
  });
  return map;
}

export function stockTotalsFor(products, movements, initialStock = {}, asOfDate = "") {
  const map = stockMapFor(products, movements, initialStock, asOfDate);
  let amount = 0;
  let pieces = 0;
  let productCount = 0;

  products.forEach((product) => {
    const qty = Math.max(0, Number(map[product.id] || 0));
    const piecesPerBag = Math.max(1, Number(product.piecesPerBag || 1));
    if (qty > 0) productCount += 1;
    pieces += qty;
    amount += Math.floor(qty / piecesPerBag) * Number(product.priceBag || 0) + (qty % piecesPerBag) * Number(product.pricePiece || 0);
  });

  return { map, amount, pieces, products: productCount };
}
