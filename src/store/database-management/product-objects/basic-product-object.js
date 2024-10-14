export const basicProductObject = (productToAdd) => {
  const { name, price, category } = productToAdd;
  return {
    name: name.toLowerCase(),
    price: Number(price),
    category: category.toLowerCase(),
  };
};
