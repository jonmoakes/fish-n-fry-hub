import { useEffect } from "react";

import { client } from "../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "./selectors/use-get-current-user-selectors";
import { setCartItems } from "../store/cart/cart.slice";

import { databaseId, cartItemsCollectionId } from "../constants/constants";
import { useDispatch } from "react-redux";
import useGetCartItemsSelectors from "./selectors/use-get-cart-items-selectors";

const useCartItemsListener = () => {
  const { id } = useGetCurrentUserSelectors();
  const { cartItems } = useGetCartItemsSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${cartItemsCollectionId}.documents`,

      (response) => {
        console.log(response.payload);
        const documentChanged = response.payload;

        if (response.events.some((event) => event.includes(".delete"))) {
          const deletedEntryId = documentChanged.$id;

          const updatedCartItems = cartItems.filter(
            (cartItem) => cartItem.$id !== deletedEntryId
          );
          dispatch(setCartItems(updatedCartItems));
        } else {
          // Check if the entry with the matching ID exists in the current state

          const existingEntryIndex = cartItems.findIndex(
            (cartItem) => cartItem.$id === documentChanged.$id
          );

          if (existingEntryIndex !== -1) {
            // entry must exist, so update that entry.
            const updatedCartItems = cartItems.map((cartItem, index) =>
              index === existingEntryIndex
                ? { ...cartItem, ...documentChanged }
                : cartItem
            );
            dispatch(setCartItems(updatedCartItems));
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            const updatedCartItems = [...cartItems, documentChanged];
            dispatch(setCartItems(updatedCartItems));
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [id, cartItems, dispatch]);
};

export default useCartItemsListener;
