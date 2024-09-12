export const sortedOrders = (orders) => {
  return orders.sort((orderA, orderB) => {
    const dateA = new Date(orderA.createdAt);
    const dateB = new Date(orderB.createdAt);
    return dateB - dateA;
  });
};
