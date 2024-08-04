import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueSpan } from "../../../styles/span/span.styles";

const DoubleSize = ({ sizeOptionDoublePrice, handleOptionChange }) => (
  <>
    {sizeOptionDoublePrice ? (
      <>
        <Label className="no-padding">
          double
          <br />
        </Label>
        <BlueSpan className="margin">
          ( + £{(sizeOptionDoublePrice / 100).toFixed(2)} )
        </BlueSpan>
        <input
          type="radio"
          name="sizeChoice"
          value="double"
          onChange={handleOptionChange}
        />
        <BlackHr />
      </>
    ) : null}
  </>
);

export default DoubleSize;
