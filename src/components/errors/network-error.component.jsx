import { Title } from "../../styles/h1/h1.styles";
import { ErrorDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/buttons/buttons.styles";
import { BlackText } from "../../styles/p/p.styles";

const NetworkError = () => (
  <ErrorDiv className="margin">
    <Title className="black">network error</Title>
    <BlackText>
      we've noticed that your internet connection seems to be offline.
    </BlackText>
    <BlackText>
      some features on this page may not be available until your network
      connection is restored.
    </BlackText>
    <BlackText>
      please check your connection. this warning will disappear when your
      connection has been restored.
    </BlackText>
    <BlackText>
      or you can tap the reload page button below to try again.
    </BlackText>

    <Button type="button" onClick={() => window.location.reload()}>
      reload
    </Button>
  </ErrorDiv>
);

export default NetworkError;
