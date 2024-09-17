import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const Intro = () => {
  const { name } = useGetCurrentUserSelectors();

  return (
    <ParentDiv>
      <Text>welcome{name ? ` ${name}!` : "!"}</Text>
      <Text>what would you like to do?</Text>
    </ParentDiv>
  );
};

export default Intro;
