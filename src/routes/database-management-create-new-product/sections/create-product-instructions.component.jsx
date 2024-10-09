import { useDispatch } from "react-redux";

import useGetShouldShowElementSelectors from "../../../hooks/selectors/use-get-should-show-element-selectors";
import {
  hideElement,
  toggleShowElement,
} from "../../../store/should-show-element/should-show-element.slice";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";

const CreateProductInstructions = () => {
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
            {shouldShowElement ? "ok, close" : "create product instructions"}
          </div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Text>here, you can create a new product to add to your menu.</Text>
            <Text>
              firstly, you need to tell the app which 'collection' the new
              product will go into.
            </Text>
            <Text>for example, 'burgers' or 'chicken' etc.</Text>
            <Text>
              this will allow the app to show you the correct options list that
              is available in each collection - For example 'sauces' or 'salt &
              vinegar' etc.
            </Text>

            <Text>
              next, you choose the new products name, description, price and
              options available.
            </Text>

            <Text>
              once you've finished, tap 'create product' and after confirmation,
              the product is created and available immediately to order for your
              customers.
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

export default CreateProductInstructions;
