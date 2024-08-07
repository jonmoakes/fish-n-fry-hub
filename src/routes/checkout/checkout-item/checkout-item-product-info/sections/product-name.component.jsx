import { BlackHr } from "../../../../../styles/hr/hr.styles";

import { replacePartOfString } from "../../../../../functions/replace-part-of-string";

const ProductName = ({ cartItemObject }) => {
  const { name } = cartItemObject;

  return (
    <>
      {replacePartOfString(name, "fish", "")}
      <br />
      <BlackHr />
    </>
  );
};

export default ProductName;
