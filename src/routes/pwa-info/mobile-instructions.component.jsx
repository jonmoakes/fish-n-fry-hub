import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { ListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const MobileInstructions = () => (
  <ParentDiv>
    <Title>Mobile Devices:</Title>

    <H2>Safari (iOS):</H2>
    <StyledUnorderedList>
      <ListItem>Open Safari and navigate to our site.</ListItem>
      <ListItem>Tap the Share button (a square with an upward arrow).</ListItem>
      <ListItem>Select "Add to Home Screen".</ListItem>
      <ListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />

    <H2>Google Chrome (Android):</H2>
    <StyledUnorderedList>
      <ListItem>Open Chrome and navigate to our site.</ListItem>
      <ListItem>
        Tap the menu button (three vertical dots) at the top-right corner.
      </ListItem>
      <ListItem>Select "Add to Home Screen".</ListItem>
      <ListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />

    <H2>Mozilla Firefox (Android):</H2>
    <StyledUnorderedList>
      <ListItem>Open Firefox and go to our site.</ListItem>
      <ListItem>
        Tap the menu button (three vertical dots) at the top-right corner.
      </ListItem>
      <ListItem>Select "Install".</ListItem>
      <ListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />

    <H2>Microsoft Edge (Android):</H2>
    <StyledUnorderedList>
      <ListItem>Open Edge and navigate to our site.</ListItem>
      <ListItem>
        Tap the menu button (three horizontal dots) at the bottom of the screen.
      </ListItem>
      <ListItem>Select "Add to Home Screen".</ListItem>
      <ListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />

    <H2>Brave (Android):</H2>
    <StyledUnorderedList>
      <ListItem>Open Brave and navigate to our site.</ListItem>
      <ListItem>
        Tap the menu button (three vertical dots) at the bottom-right corner.
      </ListItem>
      <ListItem>Select "Add to Home Screen".</ListItem>
      <ListItem>
        Follow the prompts to add Breakfast & After School Club to your home
        screen.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />
  </ParentDiv>
);

export default MobileInstructions;
