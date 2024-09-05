import useMenuLogic from "./menu-hooks/use-menu-logic";
import useFetchMenuDocumentsThunkUseEffect from "./menu-hooks/use-fetch-menu-documents-thunk-use-effect";
import useFetchCartItemsThunkUseEffect from "./menu-hooks/use-fetch-cart-tems-thunk-use-effect";

import MenuTitleAndLoader from "./menu-title-and-loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ItemSearch from "../../components/item-search/item-search.component";
import CategoryButtons from "./category-buttons.component";
import ItemsReturnedAfterSearchRequest from "../../components/items-returned-after-search-request/items-returned-after-search-request.component";

import { Container } from "../../styles/container/container.styles";

import { searchTermHasBeenEntered } from "../../functions/search-term-has-been-entered";

const Menu = () => {
  useFetchMenuDocumentsThunkUseEffect();
  useFetchCartItemsThunkUseEffect();

  const {
    menuIsLoading,
    menuError,
    searchField,
    handleSearchFieldChange,
    resetSearchField,
    itemsReturnedFromSearch,
    categories,
    navigateToCategory,
    cartItemsIsLoading,
    cartItemsError,
  } = useMenuLogic();

  return (
    <Container>
      <MenuTitleAndLoader {...{ menuIsLoading, cartItemsIsLoading }} />

      {menuError || cartItemsError ? (
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

          <CategoryButtons
            {...{ searchField, categories, navigateToCategory }}
          />

          {searchTermHasBeenEntered(searchField) ? (
            <ItemsReturnedAfterSearchRequest {...{ itemsReturnedFromSearch }} />
          ) : null}
        </>
      )}
    </Container>
  );
};

export default Menu;
