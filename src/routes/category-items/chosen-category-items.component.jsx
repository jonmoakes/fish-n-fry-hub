import ProductItemDetails from "../../components/product-item-details/product-item-details.component";

const ChosenCategoryItems = ({ categoryItems }) => (
  <>
    {categoryItems.map((item) => {
      const { id } = item;
      return <ProductItemDetails key={id} {...{ item }} />;
    })}
  </>
);

export default ChosenCategoryItems;
