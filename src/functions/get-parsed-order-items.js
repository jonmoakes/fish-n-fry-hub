export const getParsedOrderItems = (orderString) => {
  return JSON.parse(orderString).map((order) => ({
    ...order,
    cartItem: JSON.parse(order.cartItem),
  }));
};
