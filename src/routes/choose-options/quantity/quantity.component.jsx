import { useDispatch } from "react-redux";

import useGetChooseOptionsSelectors from "../../../hooks/selectors/use-get-choose-options-selectors";
import { updateSelectedItem } from "../../../store/choose-options/choose-options.slice";

import {
  Label,
  OptionsForm,
  StyledInput,
} from "../../../styles/form/form.styles";
import { ParentDiv, InnerFormDiv } from "../../../styles/div/div.styles";
import { RequiredError } from "../../../styles/p/p.styles";

const Quantity = () => {
  const { quantity } = useGetChooseOptionsSelectors();

  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateSelectedItem({ [name]: value }));
  };

  return (
    <ParentDiv>
      <OptionsForm>
        <InnerFormDiv>
          <Label>choose quantity:</Label>
          <StyledInput
            onWheel={(e) => e.target.blur()}
            type="number"
            min={1}
            max={10}
            pattern="[1-9]*[.]?[1-9]+"
            inputMode="numeric"
            name="quantity"
            value={quantity}
            placeholder="choose quantity"
            onChange={handleQuantityChange}
            required
          />
        </InnerFormDiv>
      </OptionsForm>

      {quantity < "1" ? (
        <RequiredError>quantity must be at least 1</RequiredError>
      ) : quantity > "10" ? (
        <RequiredError>quantity can't be more than 10</RequiredError>
      ) : Number.isNaN(quantity) ? (
        <RequiredError>
          quantity must be a number value, not text.
        </RequiredError>
      ) : null}
    </ParentDiv>
  );
};

export default Quantity;
