import useGetCardInputResultSelectors from "../../../../hooks/selectors/use-get-card-input-result-selectors";

import { PaymentErrorDiv, WarningDiv } from "../../../../styles/div/div.styles";
import { BlackText } from "../../../../styles/p/p.styles";

const CardInputErrors = () => {
  const { warning, error } = useGetCardInputResultSelectors();

  return (
    <>
      {warning ? (
        <WarningDiv>
          <BlackText>{warning}</BlackText>
        </WarningDiv>
      ) : (
        error && (
          <PaymentErrorDiv>
            <BlackText>{error}</BlackText>
          </PaymentErrorDiv>
        )
      )}
    </>
  );
};

export default CardInputErrors;
