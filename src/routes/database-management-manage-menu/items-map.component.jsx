import { SelectProductButton } from "../../styles/buttons/buttons.styles";
import { WholeMenuListDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const ItemsMap = ({
  inputText,
  menuDocuments,
  filteredDocuments,
  addProductToEdit,
}) => {
  return (
    <WholeMenuListDiv>
      {!inputText ? (
        menuDocuments.map((doc) => (
          <SelectProductButton
            className="margin"
            key={doc.$id}
            onClick={() => addProductToEdit(doc)}
          >
            {doc.name}
          </SelectProductButton>
        ))
      ) : !filteredDocuments.length ? (
        <>
          <Text>no results found..</Text>
          <Text>
            try changing your search query or empty it to show all items again.
          </Text>
        </>
      ) : (
        filteredDocuments.map((doc) => (
          <SelectProductButton
            className="margin"
            key={doc.$id}
            onClick={() => addProductToEdit(doc)}
          >
            {doc.name}
          </SelectProductButton>
        ))
      )}
    </WholeMenuListDiv>
  );
};

export default ItemsMap;
