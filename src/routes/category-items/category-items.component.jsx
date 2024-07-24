import useChosenCategoryLogic from "./category-items-hooks/use-category-items-logic";

import NoProductsFound from "./no-products-found.component";
import ItemSearch from "../../components/item-search/item-search.component";
import ItemsReturnedAfterSearchRequest from "../../components/items-returned-after-search-request/items-returned-after-search-request.component";
import ProductItemDetails from "../../components/product-item-details/product-item-details.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

import { searchTermHasBeenEntered } from "../../functions/search-term-has-been-entered";

const CategoryItems = () => {
  const {
    chosenCategory,
    itemsReturnedFromSearch,
    searchField,
    resetSearchField,
    handleSearchFieldChange,
    categoryItems,
    categoryItemsFound,
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

      {!categoryItemsFound ? (
        <NoProductsFound />
      ) : searchTermHasBeenEntered(searchField) ? (
        <ItemsReturnedAfterSearchRequest {...{ itemsReturnedFromSearch }} />
      ) : (
        <>
          {categoryItems.map((item) => {
            const { id } = item;
            return <ProductItemDetails key={id} {...{ item }} />;
          })}
        </>
      )}
    </Container>
  );
};

export default CategoryItems;
