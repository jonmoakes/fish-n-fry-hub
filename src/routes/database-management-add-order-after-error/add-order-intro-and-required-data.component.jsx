import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { StyledUnorderedList, ListItem } from "../../styles/ul/ul.styles";
import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";

const AddOrderIntroAndRequiredData = () => {
  const { errorIdFromEmail } = useGetDatabaseManagementSelectors();

  return (
    <ParentDiv>
      <Text>
        if you're on this page, it means you should have received an email
        saying that
        <br />'
        <YellowShadowSpan>
          a user recently placed an order but due to an error, the database
          didn't receive the details so you will be unaware of it.
        </YellowShadowSpan>
        '
      </Text>

      <Text>
        the email has the error id
        <br />'<YellowShadowSpan>{errorIdFromEmail}</YellowShadowSpan>'
      </Text>

      <BlackHr />
      <Text>
        to add this order to the database manually, we need the following data
        from the email:{" "}
      </Text>

      <StyledUnorderedList>
        <ListItem>customer name</ListItem>
        <ListItem>customer email</ListItem>
        <ListItem>customer ID</ListItem>
        <ListItem>order details</ListItem>
      </StyledUnorderedList>

      <Text>tap on the button below to show detailed instructions.</Text>
    </ParentDiv>
  );
};

export default AddOrderIntroAndRequiredData;
