import useCategorySelectionLogic from "./category-selection-logic-hooks/use-category-selection-logic";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ItemSearch from "../../components/item-search/item-search.component";
import CategoryButtons from "./category-buttons.component";
import ItemsReturnedAfterSearchRequest from "../../components/items-returned-after-search-request/items-returned-after-search-request.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

import { searchTermHasBeenEntered } from "../../functions/search-term-has-been-entered";

const CategorySelection = () => {
  const {
    menuError,
    searchField,
    handleSearchFieldChange,
    resetSearchField,
    itemsReturnedFromSearch,
  } = useCategorySelectionLogic();

  return (
    <Container>
      <ParentDiv>
        <Title>menu</Title>
      </ParentDiv>

      {menuError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <ItemSearch
            {...{
              searchField,
              handleSearchFieldChange,
              resetSearchField,
            }}
          />

          <CategoryButtons {...{ searchField }} />

          {searchTermHasBeenEntered(searchField) ? (
            <ItemsReturnedAfterSearchRequest {...{ itemsReturnedFromSearch }} />
          ) : null}
        </>
      )}
    </Container>
  );
};

export default CategorySelection;
