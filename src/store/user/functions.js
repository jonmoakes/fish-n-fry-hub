import { account } from "../../utils/appwrite/appwrite-config";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions/";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_USER_COLLECTION_ID;

export const getRetrievedUserFromDocument = async () => {
  const user = await account.get();

  const queryIndex = "$id";
  const queryValue = user.$id;

  const userDocument = await listDocumentsByQueryOrSearch(
    databaseId,
    collectionId,
    queryIndex,
    queryValue,
    false,
    null
  );

  // number of documents found in database and the document.
  //Should only be 1 as only 1 should match the user.$id
  const { total, documents } = userDocument;

  if (total && documents.length) {
    const { id, name, email, createdAt, phoneNumber, provider } = documents[0];

    return {
      id,
      createdAt,
      name,
      email,
      phoneNumber,
      provider,
    };
  } else {
    return;
  }
};

export const createDocumentAndSetUser = async () => {
  const user = await account.get();
  const session = await account.getSession("current");

  const queryIndex = "$id";
  const queryValue = user.$id;
  const documentId = user.$id;

  const userDocument = await listDocumentsByQueryOrSearch(
    databaseId,
    collectionId,
    queryIndex,
    queryValue,
    false,
    null
  );

  const { total, documents } = userDocument;

  if (!total && !documents.length) {
    const dataToAdd = {
      id: user.$id,
      createdAt: user.$createdAt,
      name: user.name ? user.name.toLowerCase() : "customer",
      email: user.email,
      phoneNumber: null,
      provider: session.provider,
    };

    await manageDatabaseDocument(
      "create",
      databaseId,
      collectionId,
      documentId,
      dataToAdd
    );

    return dataToAdd;
  } else {
    return null;
  }
};
