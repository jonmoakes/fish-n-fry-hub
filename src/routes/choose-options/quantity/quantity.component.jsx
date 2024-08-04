import useGetChooseOptionsSelectors from "../../../hooks/selectors/use-get-choose-options-selectors";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import {
  Label,
  OptionsForm,
  StyledInput,
} from "../../../styles/form/form.styles";
import { ParentDiv, InnerFormDiv } from "../../../styles/div/div.styles";

const Quantity = () => {
  const { quantity } = useGetChooseOptionsSelectors();
  const { handleOptionChange } = useChooseOptionsFunctions();

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
            value={quantity || ""}
            placeholder="choose quantity"
            onChange={handleOptionChange}
            required
          />
        </InnerFormDiv>
      </OptionsForm>
    </ParentDiv>
  );
};

export default Quantity;
