import { ClearSearchButton } from "../../styles/buttons/buttons.styles";
import { SearchDiv } from "../../styles/div/div.styles";
import { SearchInput } from "../../styles/form/form.styles";
import { HrWithMargin } from "../../styles/hr/hr.styles";

const ItemSearch = ({ handleSearchInputChange, inputText, clearSearch }) => (
  <>
    <SearchDiv>
      <SearchInput
        type="search"
        placeholder="Search..."
        onChange={handleSearchInputChange}
        value={inputText || ""}
      />
      {inputText ? (
        <ClearSearchButton onClick={clearSearch}>x</ClearSearchButton>
      ) : null}
    </SearchDiv>
    <HrWithMargin />
  </>
);

export default ItemSearch;
