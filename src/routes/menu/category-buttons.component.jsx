import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";

const CategoryButtons = ({ searchField, categories, navigateToCategory }) => (
  <>
    {!searchField.length ? (
      <ParentDiv>
        <Text>
          or view each product in a category by tapping a category button below:
        </Text>

        <BlackHr />
        {categories.map((category) => (
          <>
            <YellowGreenButton
              key={category}
              onClick={() => navigateToCategory(category)}
            >
              {category}
            </YellowGreenButton>
            <BlackHr />
          </>
        ))}
      </ParentDiv>
    ) : null}
  </>
);

export default CategoryButtons;
