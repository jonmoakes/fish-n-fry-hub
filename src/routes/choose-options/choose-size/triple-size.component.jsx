import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueSpan } from "../../../styles/span/span.styles";

const TripleSize = ({ sizeOptionTriplePrice, handleOptionChange }) => (
  <>
    {sizeOptionTriplePrice ? (
      <>
        <Label className="no-padding">
          triple <br />
        </Label>
        <BlueSpan className="margin">
          ( + £{(sizeOptionTriplePrice / 100).toFixed(2)} )
        </BlueSpan>

        <input
          type="radio"
          name="sizeChoice"
          value="triple"
          onChange={handleOptionChange}
        />

        <BlackHr />
      </>
    ) : null}
  </>
);

export default TripleSize;
