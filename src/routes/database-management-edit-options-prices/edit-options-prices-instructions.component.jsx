import { useDispatch } from "react-redux";

import useGetShouldShowElementSelectors from "../../hooks/selectors/use-get-should-show-element-selectors";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { RedSpan } from "../../styles/span/span.styles";

const EditOptionsPricesInstructions = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();

  const dispatch = useDispatch();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>
            {shouldShowElement
              ? "ok, close"
              : "edit options prices instructions"}
          </div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Text>
              this is a list of options that can be added to certain products.
            </Text>
            <Text>you can edit the prices of those options here.</Text>

            <Text>
              simply type in the new price of an option and then tap the 'update
              price' button.
            </Text>
            <Text>
              please make sure to enter the value in <RedSpan>pence</RedSpan> (
              ie 100 for £1 ).
            </Text>
            <Text>this is because of how the database processes prices.</Text>
            <Text>you can only update one price at a time.</Text>
            <Text>
              once updated, the new price will be reflected as soon as the
              customer navigates to the menu page.
            </Text>

            <YellowGreenButton onClick={() => dispatch(hideElement())}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default EditOptionsPricesInstructions;
