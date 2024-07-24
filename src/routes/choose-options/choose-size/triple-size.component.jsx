import { Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlackSpan } from "../../../styles/span/span.styles";

const TripleSize = ({ sizeOptionTriplePrice, handleSizeChange }) => (
  <>
    {sizeOptionTriplePrice ? (
      <>
        <Label className="no-padding">
          triple <br />
          <BlackSpan>
            ( + £{(sizeOptionTriplePrice / 100).toFixed(2)} )
          </BlackSpan>
        </Label>

        <input
          type="radio"
          name="chosenSize"
          value="triple"
          onChange={handleSizeChange}
        />

        <BlackHr />
      </>
    ) : null}
  </>
);

export default TripleSize;
