import useHandleDataToUpdateDocumentChange from "../../hooks/database-management/use-handle-data-to-update-document-change";
import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";
import useDbManageConfirmAddOrder from "./hooks/use-db-manage-confirm-add-order";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import {
  Form,
  Label,
  StyledInput,
  StyledTextArea,
} from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const AddOrderAfterErrorForm = () => {
  const { customerName, customerEmail, customerId, orderDetails } =
    useGetDatabaseManagementSelectors();
  const { handleDataToUpdateDocumentChange } =
    useHandleDataToUpdateDocumentChange();
  const { dbManageConfirmAddOrder } = useDbManageConfirmAddOrder();

  return (
    <ParentDiv>
      <Form>
        <Label>
          <RedSpan>* </RedSpan>customer name
        </Label>
        <StyledInput
          type="text"
          name="customerName"
          onChange={handleDataToUpdateDocumentChange}
          value={customerName || ""}
          placeholder="lowercased"
        />

        <Label>
          <RedSpan>* </RedSpan>customer email
        </Label>
        <StyledInput
          type="text"
          name="customerEmail"
          onChange={handleDataToUpdateDocumentChange}
          value={customerEmail || ""}
          placeholder="lowercased"
        />

        <Label>
          <RedSpan>* </RedSpan>customer ID
        </Label>
        <StyledInput
          type="text"
          name="customerId"
          onChange={handleDataToUpdateDocumentChange}
          value={customerId || ""}
          placeholder="20 characters, lowercased"
        />

        <Label>
          <RedSpan>* </RedSpan>order details
        </Label>
        <StyledTextArea
          type="text"
          name="orderDetails"
          onChange={handleDataToUpdateDocumentChange}
          value={orderDetails || ""}
        />

        <YellowGreenButton type="button" onClick={dbManageConfirmAddOrder}>
          upload order
        </YellowGreenButton>
      </Form>
    </ParentDiv>
  );
};

export default AddOrderAfterErrorForm;
