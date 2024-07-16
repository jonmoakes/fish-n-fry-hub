import Balancer from "react-wrap-balancer";

import { ColumnDiv } from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { H2 } from "../../styles/h2/h2.styles";

const RenderButtonsList = ({ buttons }) => (
  <>
    {buttons.map((button) => {
      const { id, heading, text, onClick } = button;

      return (
        <ColumnDiv key={id}>
          {heading ? (
            <H2>
              <Balancer>{heading}</Balancer>
            </H2>
          ) : null}
          <YellowGreenButton onClick={onClick}>{text}</YellowGreenButton>
          <BlackHr />
        </ColumnDiv>
      );
    })}
  </>
);

export default RenderButtonsList;
