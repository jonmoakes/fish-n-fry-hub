import { useMemo } from "react";

import useGetAllUsersSelectors from "../../../hooks/selectors/use-get-all-users-selectors";

import { defaultTableSize } from "../../../constants/constants";
import TABLE_COLUMNS from "../table-columns";

const useAllUsersLogic = () => {
  let { allUserWithFormattedCreatedAt } = useGetAllUsersSelectors();
  const { getAllUsersError } = useGetAllUsersSelectors();

  const allUsersPageSizeFromLocalStorage = localStorage.getItem(
    "allUsersChosenTablePageSize"
  );

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(
    () =>
      allUserWithFormattedCreatedAt !== undefined
        ? allUserWithFormattedCreatedAt
        : [],
    [allUserWithFormattedCreatedAt]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "name", desc: false }],
      pageSize: allUsersPageSizeFromLocalStorage
        ? Number(allUsersPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [allUsersPageSizeFromLocalStorage]
  );

  return { getAllUsersError, columns, data, initialState };
};

export default useAllUsersLogic;
