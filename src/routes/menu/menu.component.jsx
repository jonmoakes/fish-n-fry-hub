import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMenuDocumentsAsync } from "../../store/menu/menu-thunks";
import useMenuLogic from "./menu-hooks/use-menu-logic";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ItemSearch from "../../components/item-search/item-search.component";
import CategoryButtons from "./category-buttons.component";
import ItemsReturnedAfterSearchRequest from "../../components/items-returned-after-search-request/items-returned-after-search-request.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

import { searchTermHasBeenEntered } from "../../functions/search-term-has-been-entered";

const Menu = () => {
  const {
    menuIsLoading,
    menuError,
    searchField,
    handleSearchFieldChange,
    resetSearchField,
    itemsReturnedFromSearch,
  } = useMenuLogic();

  const dispatch = useDispatch();

  useEffect(() => {
    if (menuError) return;

    dispatch(fetchMenuDocumentsAsync());
  }, [menuError, dispatch]);

  return (
    <Container>
      {menuIsLoading ? <Loader /> : null}
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

export default Menu;
