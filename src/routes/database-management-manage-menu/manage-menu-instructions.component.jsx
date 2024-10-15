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
  ParentDiv,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { menuRoute } from "../../strings/routes/routes-strings";

const ManageMenuInstructions = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();

  const dispatch = useDispatch();

  return (
    <ParentDiv>
      <Accordion {...{ shouldShowElement }}>
        <>
          <AccordionTitle
            {...{ shouldShowElement }}
            onClick={() => dispatch(toggleShowElement())}
          >
            <div>
              {shouldShowElement ? "ok, close" : "manage menu instructions"}
            </div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <Text>here, you can manage your menu.</Text>
              <Text>
                you can create or delete products, or update their prices.
              </Text>
              <Text>
                to create anew product, tap the 'create new product' button.
              </Text>
              <Text>
                to edit prices of your options ( if the product has the options
                for adding doner meat or grated cheese for example ), tap on the
                'edit options prices' button.
              </Text>
              <Text>
                to edit the base price of a product ( or any of the size option
                prices ), or to delete a product from the menu, choose the
                product that you wish to edit by tapping its button in the list
                below.
              </Text>
              <Text>
                alternatively, type in a word or words of the product you want
                to edit / delete.
              </Text>
              <Text>
                this should be one of the names of the products in your{" "}
                <StyledLink to={menuRoute}>menu</StyledLink>.
              </Text>
              <Text>
                you will then be shown a list of products that match your query.
              </Text>
              <Text>
                you can then tap on the product you want to edit to proceed to
                the next step.
              </Text>

              <YellowGreenButton onClick={() => dispatch(hideElement())}>
                Ok, Close
              </YellowGreenButton>
            </AccordionContent>
          )}
        </>
      </Accordion>
    </ParentDiv>
  );
};

export default ManageMenuInstructions;
