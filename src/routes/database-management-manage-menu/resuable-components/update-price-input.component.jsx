import { StyledInput } from "../../../styles/form/form.styles";

const UpdatePriceInput = ({ newValue, handleAttributeChange }) => (
  <StyledInput
    onWheel={(e) => e.target.blur()}
    type="number"
    min={1}
    pattern="[1-9]*[.]?[1-9]+"
    inputMode="numeric"
    value={newValue || ""}
    placeholder="in pence - ie 100 for £1"
    onChange={handleAttributeChange}
  />
);

export default UpdatePriceInput;
