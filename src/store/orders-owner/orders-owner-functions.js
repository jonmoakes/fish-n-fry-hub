import { databaseId, ordersCollectionId } from "../../constants/constants";
import { formatOrderString } from "../../functions/format-order-string/fomat-order-string";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";

export const getOrderDocuments = async (rateLimit) => {
  const orderDocuments = await listDocumentsInACollection(
    databaseId,
    ordersCollectionId,
    rateLimit
  );

  const { documents } = orderDocuments;

  return documents;
};

export const orderObject = (order, grandTotal, orderItems) => {
  return {
    customerName: order.customerName,
    customerEmail: order.customerEmail,
    createdAt: order.$createdAt,
    orderId: order.$id,
    orderStatus: order.orderStatus,
    grandTotal: `£${(grandTotal / 100).toFixed(2)}`,
    order: orderItems.map((ord) => formatOrderString(ord.cartItem)),
    createdAtAsDateObjectForSearching: new Date(order.$createdAt), // Create Date object for searching
  };
};

export const sortedOrders = (orders) => {
  return orders.sort((orderA, orderB) => {
    const dateA = new Date(orderA.createdAt);
    const dateB = new Date(orderB.createdAt);
    return dateB - dateA;
  });
};
