import { cartItemsCollectionId, databaseId } from "../../constants/constants";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

export const removeCartItem = async ($id) => {
  await manageDatabaseDocument(
    "delete",
    databaseId,
    cartItemsCollectionId,
    $id
  );
};
