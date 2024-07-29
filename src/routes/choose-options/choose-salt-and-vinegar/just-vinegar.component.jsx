import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const JustVinegar = ({ handleRadioChange }) => (
  <>
    <Label className="no-padding">just vinegar</Label>

    <input
      type="radio"
      name="saltAndVinegarChoice"
      value="just vinegar"
      onChange={handleRadioChange}
    />

    <BlackHr />
  </>
);

export default JustVinegar;
