import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueSpan } from "../../../styles/span/span.styles";

const LargeSize = ({ sizeOptionLargePrice, handleRadioChange }) => {
  return (
    <>
      {sizeOptionLargePrice ? (
        <>
          <Label className="no-padding">
            large <br />
          </Label>
          <BlueSpan className="margin">
            ( + £{(sizeOptionLargePrice / 100).toFixed(2)} )
          </BlueSpan>
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
