import {
  databaseId,
  highRateLimit,
  ordersCollectionId,
} from "../../constants/constants";
import { formatOrderString } from "../../functions/format-order-string/fomat-order-string";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getOrdersCustomerDocuments = async (id) => {
  const queryIndex = "customerId";
  const queryValue = id;

  const customerOrders = await listDocumentsByQueryOrSearch(
    databaseId,
    ordersCollectionId,
    queryIndex,
    queryValue,
    false,
    highRateLimit
  );

  const { documents } = customerOrders;

  return documents;
};

export const ordersCustomerObject = (order, grandTotal, orderItems) => {
  return {
    createdAt: order.$createdAt,
    orderId: order.$id,
    grandTotal: `£${(grandTotal / 100).toFixed(2)}`,
    order: orderItems.map((ord) => formatOrderString(ord.cartItem)),
    createdAtAsDateObjectForSearching: new Date(order.$createdAt), // Create Date object for searching
  };
};
