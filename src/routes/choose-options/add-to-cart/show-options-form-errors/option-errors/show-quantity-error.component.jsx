import useGetChooseOptionsSelectors from "../../../../../hooks/selectors/use-get-choose-options-selectors";

import { RequiredError } from "../../../../../styles/p/p.styles";

const ShowQuantityError = () => {
  const { quantity } = useGetChooseOptionsSelectors();

  return (
    <>
      {Number(quantity) < 1 ? (
        <RequiredError>quantity must be at least 1</RequiredError>
      ) : Number(quantity) > 10 ? (
        <RequiredError>quantity can't be more than 10</RequiredError>
      ) : Number.isNaN(quantity) ? (
        <RequiredError>
          quantity must be a number value, not text.
        </RequiredError>
      ) : null}
    </>
  );
};

export default ShowQuantityError;
