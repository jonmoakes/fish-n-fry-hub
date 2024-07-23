import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const RequiredInfoText = () => (
  <>
    <Text>please note that items marked</Text>
    <Text>
      <RedSpan>* required</RedSpan>
    </Text>
    <Text> must be selected in order to access the next step.</Text>
    <BlackHr />
    <Text>
      any pricing changes for options selected will be reflected at the bottom
      of the page.
    </Text>
    <BlackHr />
  </>
);

export default RequiredInfoText;
