import ProductItemDetails from "../../components/product-item-details/product-item-details.component";

const CategoryItems = ({ menuDocumentsFromChosenCategory }) => (
  <>
    {menuDocumentsFromChosenCategory.map((item) => {
      const { id, name, description, price } = item;
      return (
        <ProductItemDetails key={id} {...{ id, name, description, price }} />
      );
    })}
  </>
);

export default CategoryItems;
