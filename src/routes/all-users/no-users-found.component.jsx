import useNoDataFound from "../../hooks/use-no-data-found";

import { ParentDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const NoUsersFound = ({ data }) => {
  const { noDataFound, allUsersIsUndefined } = useNoDataFound();

  return (
    <>
      {noDataFound(data) || allUsersIsUndefined ? (
        <ParentDiv>
          <H2>no users found.</H2>
          <Text>no users have been created yet.</Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoUsersFound;
