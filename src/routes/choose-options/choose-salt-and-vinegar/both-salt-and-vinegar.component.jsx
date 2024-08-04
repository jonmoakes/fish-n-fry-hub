import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const BothSaltAndVinegar = ({ handleOptionChange }) => (
  <>
    <BlackHr />

    <Label className="no-padding">both</Label>

    <input
      type="radio"
      name="saltAndVinegarChoice"
      value="both"
      onChange={handleOptionChange}
    />

    <BlackHr />
  </>
);

export default BothSaltAndVinegar;
