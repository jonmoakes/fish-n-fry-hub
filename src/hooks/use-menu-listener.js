// import { useEffect } from "react";

// import { client } from "../utils/appwrite/appwrite-config";

// import useGetCurrentUserSelectors from "./selectors/use-get-current-user-selectors";
// import { setCartItems } from "../store/cart/cart.slice";

// import { databaseId, cartItemsCollectionId } from "../constants/constants";
// import { useDispatch } from "react-redux";
// import useGetCartItemsSelectors from "./selectors/use-get-cart-items-selectors";

// const useCartItemsListener = () => {
//   const { id } = useGetCurrentUserSelectors();
//   const { cartItems } = useGetCartItemsSelectors();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!id) return;
//     const unsubscribe = client.subscribe(
//       `databases.${databaseId}.collections.${cartItemsCollectionId}.documents`,

//       (response) => {
//         const newCartItems = response.payload;

//         const updatedCartItems = [...cartItems, newCartItems];
//         dispatch(setCartItems(updatedCartItems));
//       }
//     );

//     return () => {
//       unsubscribe();
//     };
//   }, [id, cartItems, dispatch]);
// };

// export default useCartItemsListener;
