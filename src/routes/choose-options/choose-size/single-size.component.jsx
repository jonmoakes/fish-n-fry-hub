import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SingleSize = ({ sizeOptionLargePrice, handleRadioChange }) => {
  const choice = !sizeOptionLargePrice ? "single" : "small";

  return (
    <>
      <BlackHr />

      <Label className="no-padding">{choice}</Label>

      <input
        type="radio"
        name="sizeChoice"
        value={choice}
        onChange={handleRadioChange}
      />

      <BlackHr />
    </>
  );
};

export default SingleSize;
