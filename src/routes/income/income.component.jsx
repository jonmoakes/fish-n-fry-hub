import useFetchIncomeDataThunkUseEffect from "./income-hooks/use-fetch-income-data-thunk-use-effect";
import useGetIncomeDataSelectors from "../../hooks/selectors/use-get-income-data-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import IncomeTable from "./income-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { standardRateLimit } from "../../constants/constants";

const Income = () => {
  useFetchIncomeDataThunkUseEffect();
  const { incomeDataIsLoading } = useGetIncomeDataSelectors();

  return (
    <Container>
      {incomeDataIsLoading ? (
        <SkeletonBox loadingText="Fetching Income Data..." />
      ) : null}
      <ParentDiv>
        <Title>your income</Title>
        <BlackHr />
        <Text>
          on this page, you can view a list of the{" "}
          <YellowShadowSpan>last {standardRateLimit} payments</YellowShadowSpan>{" "}
          that you have received from all users of the app.
        </Text>
        <Text>
          if you require more entries, please sign into your stripe dashboard.
        </Text>
      </ParentDiv>
      <IncomeTable />
    </Container>
  );
};

export default Income;
