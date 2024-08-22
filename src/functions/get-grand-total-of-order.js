export const getGrandTotalOfOrder = (orderItems) => {
  return orderItems.reduce(
    (total, order) => total + order.cartItem.priceWithOptionsAndQuantity,
    0
  );
};
