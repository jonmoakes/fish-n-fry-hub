import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { client } from "../../../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetAllUsersSelectors from "../../../hooks/selectors/use-get-all-users-selectors";
import { setAllUsers } from "../../../store/get-all-users/get-all-users.slice";

import { userCollectionId, databaseId } from "../../../constants/constants";

const useAllUsersListener = () => {
  const { allUsers } = useGetAllUsersSelectors();
  const { currentUser } = useGetCurrentUserSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${userCollectionId}.documents`,

      (response) => {
        const documentChanged = response.payload;

        if (response.events.some((event) => event.includes(".delete"))) {
          const deletedEntryId = documentChanged.$id;

          const updatedEntries = allUsers.filter(
            (session) => session.$id !== deletedEntryId
          );

          dispatch(setAllUsers(updatedEntries));
        } else {
          // Check if the entry with the matching ID exists in the current state
          const existingEntryIndex = allUsers.findIndex(
            (session) => session.$id === documentChanged.$id
          );

          if (existingEntryIndex !== -1) {
            // entry must exist, so update that entry.
            const updatedEntries = allUsers.map((session, index) =>
              index === existingEntryIndex
                ? { ...session, ...documentChanged }
                : session
            );

            dispatch(setAllUsers(updatedEntries));
          } else {
            // entry does not exist so add new entry to the bookedSessionsArray
            const updatedEntries = [...allUsers, documentChanged];
            dispatch(setAllUsers(updatedEntries));
          }
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser, allUsers, dispatch]);
};

export default useAllUsersListener;
