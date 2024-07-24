import { useDispatch } from "react-redux";

import useGetChooseOptionsSelectors from "../../../hooks/selectors/use-get-choose-options-selectors";
import { updateSelectedItem } from "../../../store/choose-options/choose-options.slice";

import { Form, Label, StyledInput } from "../../../styles/form/form.styles";
import { ParentDiv } from "../../../styles/div/div.styles";

const Quantity = () => {
  const { quantity } = useGetChooseOptionsSelectors();

  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateSelectedItem({ [name]: value }));
  };

  return (
    <ParentDiv>
      <Form>
        <Label>choose quantity:</Label>
        <StyledInput
          onWheel={(e) => e.target.blur()}
          type="number"
          pattern="[0-9]*[.]?[0-9]+"
          name="quantity"
          value={quantity}
          min={1}
          placeholder="choose quantity"
          onChange={handleQuantityChange}
          required
        />
      </Form>
    </ParentDiv>
  );
};

export default Quantity;
