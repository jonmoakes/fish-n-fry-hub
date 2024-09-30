import { useDispatch } from "react-redux";
import useGetDatabaseManagementSelectors from "../selectors/use-get-database-management-selectors";
import { setDataToUpdateDocument } from "../../store/database-management/database-management.slice";

const useHandleDataToUpdateDocumentChange = () => {
  const { dataToUpdateDocument } = useGetDatabaseManagementSelectors();

  const dispatch = useDispatch();

  const handleDataToUpdateDocumentChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setDataToUpdateDocument({ ...dataToUpdateDocument, [name]: value })
    );
  };

  return { handleDataToUpdateDocumentChange };
};

export default useHandleDataToUpdateDocumentChange;
