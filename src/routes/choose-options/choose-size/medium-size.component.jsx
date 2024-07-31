import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueSpan } from "../../../styles/span/span.styles";

const MediumSize = ({ sizeOptionMediumPrice, handleRadioChange }) => {
  return (
    <>
      {sizeOptionMediumPrice ? (
        <>
          <Label className="no-padding">
            medium <br />
          </Label>
          <BlueSpan className="margin">
            ( + £{(sizeOptionMediumPrice / 100).toFixed(2)} )
          </BlueSpan>
          <input
            type="radio"
            name="sizeChoice"
            value="medium"
            onChange={handleRadioChange}
          />
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default MediumSize;
