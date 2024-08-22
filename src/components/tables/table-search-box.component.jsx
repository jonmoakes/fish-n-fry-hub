import { useState } from "react";
import { useAsyncDebounce } from "react-table";

import Loader from "../loader/loader.component";
import NoSearchResult from "./no-search-result.component";

import { ClearSearchButton } from "../../styles/buttons/buttons.styles";
import { TableSearchDiv } from "../../styles/div/div.styles";
import { SearchInput } from "../../styles/form/form.styles";

const TableSearchBox = ({
  chosenEntry,
  rows,
  data,
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter);
  const [isSearching, setIsSearching] = useState(false);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
    setIsSearching(false);
  }, 400);

  const clearSearch = () => {
    setValue("");
    setGlobalFilter(undefined);
  };

  return (
    <>
      {isSearching && <Loader />}
      {!chosenEntry.length && data.length ? (
        <TableSearchDiv>
          <SearchInput
            type="search"
            placeholder="Search..."
            onChange={(e) => {
              setIsSearching(true);
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            value={value || ""}
          />

          {value && value.length ? (
            <ClearSearchButton onClick={clearSearch}>x</ClearSearchButton>
          ) : null}
        </TableSearchDiv>
      ) : null}

      {value && !rows.length && data.length ? <NoSearchResult /> : null}
    </>
  );
};

export default TableSearchBox;
