function aplyDescuento(price: number, descuento: number) {
  const desc = price - (descuento * price) / 100;
  return Number(desc.toFixed(2));
}

export { aplyDescuento };
