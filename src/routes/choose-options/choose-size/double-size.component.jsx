import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlackSpan } from "../../../styles/span/span.styles";

const DoubleSize = ({ sizeOptionDoublePrice, handleRadioChange }) => (
  <>
    {sizeOptionDoublePrice ? (
      <>
        <Label className="no-padding">
          double
          <br />
          <BlackSpan>
            ( + £{(sizeOptionDoublePrice / 100).toFixed(2)} )
          </BlackSpan>
        </Label>

        <input
          type="radio"
          name="sizeChoice"
          value="double"
          onChange={handleRadioChange}
        />

        <BlackHr />
      </>
    ) : null}
  </>
);

export default DoubleSize;
