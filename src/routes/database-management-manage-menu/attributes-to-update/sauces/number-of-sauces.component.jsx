import useConfirmUpdateProperty from "../../hooks/use-confirm-update-property";
import useManageMenuLogic from "../../hooks/use-manage-menu-logic";

import { ParentDiv } from "../../../../styles/div/div.styles";
import { Form, StyledInput } from "../../../../styles/form/form.styles";
import { BlackText } from "../../../../styles/p/p.styles";
import { RedSpan } from "../../../../styles/span/span.styles";
import { YellowGreenButton } from "../../../../styles/buttons/buttons.styles";
import { StyledLink } from "../../../../styles/link/link.styles";
import Balancer from "react-wrap-balancer";
import { H2 } from "../../../../styles/h2/h2.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

const NumberOfSauces = () => {
  const {
    $id,
    $collectionId,
    numberOfSaucesAvailable,
    handleAttributeChange,
    newValue,
  } = useManageMenuLogic();

  const { confirmUpdateProperty } = useConfirmUpdateProperty();

  const attributeDescription = "number of sauces available";
  const attributeKey = "numberOfSaucesAvailable";

  const confirmChangeNumberOfSauces = () => {
    if (Number(newValue) < 1) {
      alert("must be at least 1");
    } else {
      confirmUpdateProperty(attributeKey, Number(newValue), $collectionId, $id);
    }
  };

  return (
    <>
      {numberOfSaucesAvailable ? (
        <ParentDiv>
          <H2>
            <Balancer>edit number of sauces available</Balancer>
          </H2>
          <Form className="no-margin-top">
            <BlackText>
              current {attributeDescription}:
              <br />
              <RedSpan>{numberOfSaucesAvailable}</RedSpan>
            </BlackText>

            <BlackHr />

            {numberOfSaucesAvailable ? (
              <>
                <BlackText>
                  type in a new number of sauces available for this product.
                </BlackText>
                <BlackText>
                  if you want to completely remove the option to choose sauces
                  for this product, please
                  <br />
                  <StyledLink>contact jonathan</StyledLink>.
                </BlackText>

                <StyledInput
                  onWheel={(e) => e.target.blur()}
                  type="number"
                  pattern="[1-9]*[.]?[1-9]+"
                  inputMode="numeric"
                  value={newValue || ""}
                  placeholder="new # of sauces available"
                  onChange={handleAttributeChange}
                />

                {newValue ? (
                  <YellowGreenButton
                    type="button"
                    onClick={confirmChangeNumberOfSauces}
                  >
                    update sauces
                  </YellowGreenButton>
                ) : null}
              </>
            ) : null}
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NumberOfSauces;
