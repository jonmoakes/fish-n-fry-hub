import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SingleSize = ({ sizeOptionLargePrice, handleOptionChange }) => {
  const choice = !sizeOptionLargePrice ? "single" : "small";

  return (
    <>
      <BlackHr />

      <Label className="no-padding">{choice}</Label>

      <input
        type="radio"
        name="sizeChoice"
        value={choice}
        onChange={handleOptionChange}
      />

      <BlackHr />
    </>
  );
};

export default SingleSize;
