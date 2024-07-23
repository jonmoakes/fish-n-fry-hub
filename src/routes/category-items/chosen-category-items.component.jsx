import ProductItemDetails from "../../components/product-item-details/product-item-details.component";

const ChosenCategoryItems = ({ categoryItems }) => (
  <>
    {categoryItems.map((item) => {
      const { id, name, description, price } = item;
      return (
        <ProductItemDetails key={id} {...{ id, name, description, price }} />
      );
    })}
  </>
);

export default ChosenCategoryItems;
