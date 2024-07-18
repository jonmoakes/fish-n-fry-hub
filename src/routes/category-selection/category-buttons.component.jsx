import { categories } from "../../constants/constants";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import useCategorySelectionLogic from "./category-selection-logic-hooks/use-category-selection-logic";

const CategoryButtons = ({ searchField }) => {
  const { navigateToCategory } = useCategorySelectionLogic();

  return (
    <>
      {!searchField.length ? (
        <ParentDiv>
          <Text>
            or view each product in a category by tapping a category button
            below:
          </Text>
          {categories.map((category) => (
            <YellowGreenButton
              key={category}
              onClick={() => navigateToCategory(category)}
            >
              {category}
            </YellowGreenButton>
          ))}
        </ParentDiv>
      ) : null}
    </>
  );
};

export default CategoryButtons;
