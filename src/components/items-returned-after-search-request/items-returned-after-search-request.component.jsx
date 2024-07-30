import ProductItemDetails from "../product-item-details/product-item-details.component";
import ItemsReturnedIntro from "./items-returned-intro.component";
import NoItemsFoundAfterSearch from "./no-items-found-after-search.component";

const ItemsReturnedAfterSearchRequest = ({ itemsReturnedFromSearch }) => (
  <>
    {itemsReturnedFromSearch.length ? (
      <>
        <ItemsReturnedIntro />

        {itemsReturnedFromSearch.map((item) => {
          const { $id } = item;
          return <ProductItemDetails key={$id} item={item} />;
        })}
      </>
    ) : (
      <NoItemsFoundAfterSearch />
    )}
  </>
);

export default ItemsReturnedAfterSearchRequest;
