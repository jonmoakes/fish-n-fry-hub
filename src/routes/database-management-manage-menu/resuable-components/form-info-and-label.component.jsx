import { Label } from "../../../styles/form/form.styles";
import { BlackText } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const FormInfoAndLabel = ({ propertyValue, attributeDescription }) => (
  <>
    <BlackText>
      current price <RedSpan>£{(propertyValue / 100).toFixed(2)}</RedSpan>
    </BlackText>
    <BlackHr />

    <Label>new {attributeDescription} price:</Label>
  </>
);

export default FormInfoAndLabel;
