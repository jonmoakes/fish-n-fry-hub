import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const NoSaltOrVinegar = ({ handleOptionChange }) => (
  <>
    <Label className="no-padding">none</Label>

    <input
      type="radio"
      name="saltAndVinegarChoice"
      value="none"
      onChange={handleOptionChange}
    />

    <BlackHr />
  </>
);

export default NoSaltOrVinegar;
