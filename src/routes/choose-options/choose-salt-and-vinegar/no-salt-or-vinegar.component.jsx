import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const NoSaltOrVinegar = ({ handleRadioChange }) => (
  <>
    <Label className="no-padding">none</Label>

    <input
      type="radio"
      name="saltAndVinegarChoice"
      value="none"
      onChange={handleRadioChange}
    />

    <BlackHr />
  </>
);

export default NoSaltOrVinegar;
