import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { ListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const DesktopInstructions = () => (
  <ParentDiv>
    <Title>Desktop/Laptop Machines:</Title>

    <H2>Google Chrome:</H2>
    <StyledUnorderedList>
      <ListItem>Open Chrome and navigate to our site.</ListItem>
      <ListItem>
        In the address bar, click on the install icon (a small plus sign inside
        a circle) on the right side of the address bar.
      </ListItem>
      <ListItem>Click "Install" in the prompt that appears.</ListItem>
      <ListItem>
        Breakfast & After School Club will now be installed and accessible from
        your desktop.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />

    <H2>Safari (macOS):</H2>
    <StyledUnorderedList>
      <ListItem>Open Safari and go to our site.</ListItem>
      <ListItem>
        Click on the Share button in the toolbar (a square with an upward
        arrow).
      </ListItem>
      <ListItem>Select "Add to Home Screen".</ListItem>
      <ListItem>
        Follow the prompts to add Breakfast & After School Club to your desktop.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />

    <H2>Mozilla Firefox:</H2>
    <StyledUnorderedList>
      <ListItem>Open Firefox and go to our site.</ListItem>
      <ListItem>
        Click the menu button (three horizontal lines) at the top-right corner.
      </ListItem>
      <ListItem>
        Select "More Tools" and then "Install Breakfast & After School Club".
      </ListItem>
      <ListItem>Follow the prompts to install the app.</ListItem>
      <ListItem>
        Breakfast & After School Club will now be added to your desktop.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />

    <H2>Microsoft Edge:</H2>
    <StyledUnorderedList>
      <ListItem>Open Edge and navigate to our site.</ListItem>
      <ListItem>
        In the address bar, click on the install icon (a small plus sign inside
        a circle) on the right side.
      </ListItem>
      <ListItem>Click "Install" in the dialog box.</ListItem>
      <ListItem>
        Breakfast & After School Club will now be available from your desktop.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />

    <H2>Brave:</H2>
    <StyledUnorderedList>
      <ListItem>Open Brave and navigate to our site.</ListItem>
      <ListItem>
        In the address bar, click on the install icon (a small plus sign inside
        a circle).
      </ListItem>
      <ListItem>Click "Install" in the prompt.</ListItem>
      <ListItem>
        Breakfast & After School Club will be installed and accessible from your
        desktop.
      </ListItem>
    </StyledUnorderedList>

    <BlackHr />
  </ParentDiv>
);

export default DesktopInstructions;
