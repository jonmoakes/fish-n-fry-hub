import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const BothSaltAndVinegar = ({ handleRadioChange }) => (
  <>
    <BlackHr />

    <Label className="no-padding">both</Label>

    <input
      type="radio"
      name="saltAndVinegarChoice"
      value="both"
      onChange={handleRadioChange}
    />

    <BlackHr />
  </>
);

export default BothSaltAndVinegar;
