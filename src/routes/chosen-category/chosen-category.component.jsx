import useChosenCategoryLogic from "./chosen-category-logic-hooks/use-chosen-category-logic";

import ItemSearch from "../../components/item-search/item-search.component";
import ItemsReturnedAfterSearchRequest from "../../components/items-returned-after-search-request/items-returned-after-search-request.component";
import CategoryItems from "./category-items.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

import { searchTermHasBeenEntered } from "../../functions/search-term-has-been-entered";

const ChosenCategory = () => {
  const {
    chosenCategory,
    itemsReturnedFromSearch,
    searchField,
    resetSearchField,
    handleSearchFieldChange,
    menuDocumentsFromChosenCategory,
  } = useChosenCategoryLogic();

  return (
    <Container>
      <ParentDiv>
        <Title>{chosenCategory}</Title>
      </ParentDiv>

      <ItemSearch
        {...{
          searchField,
          handleSearchFieldChange,
          resetSearchField,
        }}
      />

      {searchTermHasBeenEntered(searchField) ? (
        <ItemsReturnedAfterSearchRequest {...{ itemsReturnedFromSearch }} />
      ) : (
        <CategoryItems {...{ menuDocumentsFromChosenCategory }} />
      )}
    </Container>
  );
};

export default ChosenCategory;
