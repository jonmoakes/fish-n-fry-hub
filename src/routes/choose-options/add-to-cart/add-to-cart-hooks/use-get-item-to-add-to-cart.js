import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";
import useCalculateTotalPrice from "./use-calculate-total-price";

const useGetItemToAddToCart = () => {
  const { selectedItem } = useChooseOptionsVariables();
  const { totalPriceWithOptionsAndQuantity } = useCalculateTotalPrice();

  //finalItem is using the rest operator. This operator collects all remaining properties that are not explicitly listed and puts them into a new object called finalItem.
  // have to removed $id as can't upload that name to appwrite so renamed it to id.
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
    priceWithOptionsAndQuantity: totalPriceWithOptionsAndQuantity,
  };

  const cartItem = JSON.stringify(finalItem);

  return { cartItem };
};

export default useGetItemToAddToCart;
