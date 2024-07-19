// format price

export const formatPrice = (price) => {
  let dollarAmout = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(Math.trunc(price));

  return dollarAmout;
};
