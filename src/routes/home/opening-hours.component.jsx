import { ParentDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { ListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const OpeningHours = () => (
  <>
    <ParentDiv>
      <BlackHr />
      <H2>opening hours:</H2>
      <Text>monday - saturday</Text>
      <StyledUnorderedList>
        <ListItem>11:45am – 2pm</ListItem>
        <ListItem>4:30pm – 10pm</ListItem>
      </StyledUnorderedList>
      <BlackHr />
    </ParentDiv>
  </>
);

export default OpeningHours;
