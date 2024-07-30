import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const LargeSize = ({ sizeOptionLargePrice, handleRadioChange }) => {
  return (
    <>
      {sizeOptionLargePrice ? (
        <>
          <Label className="no-padding">large</Label>

          <input
            type="radio"
            name="sizeChoice"
            value="large"
            onChange={handleRadioChange}
          />

          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default LargeSize;
