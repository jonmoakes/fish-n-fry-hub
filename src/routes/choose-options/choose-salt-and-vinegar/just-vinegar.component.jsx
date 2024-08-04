import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const JustVinegar = ({ handleOptionChange }) => (
  <>
    <Label className="no-padding">just vinegar</Label>

    <input
      type="radio"
      name="saltAndVinegarChoice"
      value="just vinegar"
      onChange={handleOptionChange}
    />

    <BlackHr />
  </>
);

export default JustVinegar;
