import { Link } from "react-router-dom";

import useUpdateAttributeResultUseEffect from "./hooks/use-update-attribute-result-use-effect";
import useDeleteProductResultSwalUseEffect from "./hooks/use-delete-product-result-swal-use-effect";
import useFetchMenu from "./hooks/use-fetch-menu";
import useManageMenuLogic from "./hooks/use-manage-menu-logic";

import ManageMenuInstructions from "./manage-menu-instructions.component";
import ProductToEditDetails from "./product-to-edit-details.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import ItemSearch from "./item-search.component";
import ItemsMap from "./items-map.component";

import {
  Container,
  NoHeaderFooterContainer,
} from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import {
  databaseManagementCreateNewProductRoute,
  databaseManagementEditOptionsPricesRoute,
} from "../../strings/routes/routes-strings";

const DBManageManageMenu = () => {
  useFetchMenu();
  useUpdateAttributeResultUseEffect();
  useDeleteProductResultSwalUseEffect();

  const {
    productToEdit,
    databaseManagementIsLoading,
    menuIsLoading,
    menuError,
    inputText,
    handleSearchInputChange,
    clearSearch,
    menuDocuments,
    filteredDocuments,
    addProductToEdit,
  } = useManageMenuLogic();

  const ContainerComponent = Object.keys(productToEdit).length
    ? NoHeaderFooterContainer
    : Container;

  return (
    <ContainerComponent>
      <ParentDiv>
        <Title>manage menu</Title>
      </ParentDiv>

      {menuIsLoading || databaseManagementIsLoading ? (
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
                <Link to={databaseManagementCreateNewProductRoute}>
                  <YellowGreenButton>create a new product</YellowGreenButton>
                </Link>

                <Link to={databaseManagementEditOptionsPricesRoute}>
                  <YellowGreenButton>edit options prices</YellowGreenButton>
                </Link>
              </ParentDiv>

              <ParentDiv>
                {!inputText ? (
                  <Text>or choose or search for a product to edit it.</Text>
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
    </ContainerComponent>
  );
};

export default DBManageManageMenu;
