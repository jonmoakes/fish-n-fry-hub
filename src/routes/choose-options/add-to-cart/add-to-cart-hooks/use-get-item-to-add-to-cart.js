import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const useGetItemToAddToCart = () => {
  const { selectedItem } = useChooseOptionsVariables();

  //finalItem is using the rest operator. This operator collects all remaining properties that are not explicitly listed and puts them into a new object called finalItem.
  const {
    $id,
    $collectionId,
    $permissions,
    $createdAt,
    $databaseId,
    $tenant,
    $updatedAt,
    ...itemWithUnusedPropertiesRemoved
  } = selectedItem;

  const finalItem = {
    ...itemWithUnusedPropertiesRemoved,
  };

  const cartItem = JSON.stringify(finalItem);

  return { cartItem };
};

export default useGetItemToAddToCart;
