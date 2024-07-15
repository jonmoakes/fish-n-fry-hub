import { ParentDiv } from "../../styles/div/div.styles";
import { ErrorFallbackButton } from "../../styles/buttons/buttons.styles";
import { ErrorImageText } from "../../styles/p/p.styles";

const ErrorFallback = () => (
  <>
    <ParentDiv>
      <ErrorImageText>
        Sorry, there was an error, most likely on our end.. :({" "}
      </ErrorImageText>
      <ErrorImageText>
        Please Try Checking Your internet Connection.
      </ErrorImageText>

      <ErrorImageText>
        if you're sure you're online, please try reloading the page by tapping
        the button below.
      </ErrorImageText>
      <ErrorFallbackButton onClick={() => window.location.reload()}>
        reload the page
      </ErrorFallbackButton>
    </ParentDiv>
  </>
);

export default ErrorFallback;
