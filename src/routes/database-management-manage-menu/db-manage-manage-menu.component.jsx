import useFetchMenu from "./hooks/use-fetch-menu";
import useManageMenuLogic from "./hooks/use-manage-menu-logic";

import ManageMenuInstructions from "./manage-menu-instructions.component";
import ProductToEditDetails from "./product-to-edit-details.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import ItemSearch from "./item-search.component";
import ItemsMap from "./items-map.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import useUpdateAttributeResultUseEffect from "./hooks/use-update-attribute-result-use-effect";

const DBManageManageMenu = () => {
  useFetchMenu();
  useUpdateAttributeResultUseEffect();

  const {
    databaseManagementIsLoading,
    menuIsLoading,
    menuError,
    inputText,
    handleSearchInputChange,
    clearSearch,
    menuDocuments,
    filteredDocuments,
    addProductToEdit,
    productToEdit,
  } = useManageMenuLogic();

  return (
    <Container>
      <ParentDiv>
        <Title>manage menu</Title>
      </ParentDiv>

      {databaseManagementIsLoading || menuIsLoading ? (
        <SkeletonBox
          loadingText={
            databaseManagementIsLoading ? "Updating Item..." : "fetching menu"
          }
        />
      ) : menuError ? (
        <ShowFetchErrors />
      ) : (
        <>
          {Object.keys(productToEdit).length ? (
            <ProductToEditDetails />
          ) : (
            <>
              <ManageMenuInstructions />
              <ParentDiv>
                {!inputText ? (
                  <Text>choose or search for a product.</Text>
                ) : (
                  <Text>clear the search to show all items again.</Text>
                )}
                <ItemSearch
                  {...{ handleSearchInputChange, inputText, clearSearch }}
                />
                <ItemsMap
                  {...{
                    inputText,
                    menuDocuments,
                    filteredDocuments,
                    addProductToEdit,
                  }}
                />
              </ParentDiv>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default DBManageManageMenu;
