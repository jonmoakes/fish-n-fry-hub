import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetOrdersOwnerSelectors from "../../../hooks/selectors/use-get-orders-owner-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { setOrdersOwner } from "../../../store/orders-owner/orders-owner-slice";

import { databaseId, ordersCollectionId } from "../../../constants/constants";
import { formatOrderString } from "../../../functions/format-order-string/fomat-order-string";
import { getParsedOrderItems } from "../../../functions/get-parsed-order-items";
import { getGrandTotalOfOrder } from "../../../functions/get-grand-total-of-order";

const useOrdersOwnerListener = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { ordersOwner } = useGetOrdersOwnerSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${ordersCollectionId}.documents`,
      (response) => {
        const {
          $id: orderId,
          customerEmail,
          customerName,
          order: orderString,
          orderStatus,
          $createdAt: createdAt,
        } = response.payload;

        // Parse and format the order data
        const orderItems = getParsedOrderItems(orderString);
        const grandTotal = getGrandTotalOfOrder(orderItems);

        const formattedOrder = orderItems.map((order) =>
          formatOrderString(order.cartItem)
        );

        const formattedEntry = {
          customerName,
          customerEmail,
          createdAt,
          orderId,
          grandTotal: `£${(grandTotal / 100).toFixed(2)}`,
          order: formattedOrder,
          orderStatus,
        };

        // Check if the event is a deletion
        if (response.events.some((event) => event.includes(".delete"))) {
          const deletedEntryId = orderId;

          const updatedEntries = ordersOwner.filter(
            (order) => order.orderId !== deletedEntryId
          );
          dispatch(setOrdersOwner(updatedEntries));
        } else {
          // Check if the entry already exists
          const existingEntryIndex = ordersOwner.findIndex(
            (order) => order.orderId === formattedEntry.orderId
          );

          if (existingEntryIndex !== -1) {
            // Update the existing entry
            const updatedEntries = ordersOwner.map((order, index) =>
              index === existingEntryIndex
                ? { ...order, ...formattedEntry }
                : order
            );
            dispatch(setOrdersOwner(updatedEntries));
          } else {
            // Add the new entry to the state
            const updatedEntries = [...ordersOwner, formattedEntry];
            dispatch(setOrdersOwner(updatedEntries));
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser, dispatch, ordersOwner]);
};

export default useOrdersOwnerListener;
