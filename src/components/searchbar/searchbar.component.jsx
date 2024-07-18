import { ClearSearchButton } from "../../styles/buttons/buttons.styles";
import { SearchDiv } from "../../styles/div/div.styles";
import { SearchInput } from "../../styles/form/form.styles";

const SearchBar = ({
  handleSearchFieldChange,
  resetSearchField,
  searchField,
}) => (
  <SearchDiv>
    <SearchInput
      type="search"
      placeholder="Search..."
      onChange={handleSearchFieldChange}
      value={"" || searchField}
    />
    {searchField ? (
      <ClearSearchButton onClick={resetSearchField}>x</ClearSearchButton>
    ) : null}
  </SearchDiv>
);

export default SearchBar;
