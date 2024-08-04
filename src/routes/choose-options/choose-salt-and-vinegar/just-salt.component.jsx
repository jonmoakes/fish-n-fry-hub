import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const JustSalt = ({ handleOptionChange }) => (
  <>
    <Label className="no-padding">just salt</Label>

    <input
      type="radio"
      name="saltAndVinegarChoice"
      value="just salt"
      onChange={handleOptionChange}
    />

    <BlackHr />
  </>
);

export default JustSalt;
