import Balancer from "react-wrap-balancer";
import { NoSearchResultDiv } from "../../styles/div/div.styles";
import { RedH2 } from "../../styles/h2/h2.styles";
import { BlackText } from "../../styles/p/p.styles";
import { ClearButtonExampleSpan } from "../../styles/span/span.styles";

const NoSearchResult = () => (
  <NoSearchResultDiv>
    <RedH2>no result found....</RedH2>
    <BlackText>
      <Balancer>
        please refine your search query or tap the
        <br />
        <br />
        <ClearButtonExampleSpan>X</ClearButtonExampleSpan>
        <br />
        <br />
        in the search bar to clear it.
      </Balancer>
    </BlackText>
  </NoSearchResultDiv>
);

export default NoSearchResult;
