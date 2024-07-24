import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SingleSize = ({ handleSizeChange }) => (
  <>
    <BlackHr />

    <Label className="no-padding">single </Label>

    <input
      type="radio"
      name="chosenSize"
      value="single"
      onChange={handleSizeChange}
    />

    <BlackHr />
  </>
);

export default SingleSize;
