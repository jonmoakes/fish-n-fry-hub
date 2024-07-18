import ProductItemDetails from "../product-item-details/product-item-details.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { BlackText } from "../../styles/p/p.styles";
import { WhiteSpan } from "../../styles/span/span.styles";
import Balancer from "react-wrap-balancer";

const ItemsReturnedAfterSearchRequest = ({ itemsReturnedFromSearch }) => (
  <>
    {itemsReturnedFromSearch.length ? (
      <>
        <ParentDiv>
          <H2 className="no-underline">
            <Balancer>we found the following items:</Balancer>
          </H2>
          <WhiteSpan>&darr; &darr;</WhiteSpan>
        </ParentDiv>

        {itemsReturnedFromSearch.map((item) => {
          const { id, name, description, price } = item;

          return (
            <ProductItemDetails
              key={id}
              {...{ id, name, description, price }}
            />
          );
        })}
      </>
    ) : (
      <ParentDiv className="no-result-found left">
        <BlackText>no result found..</BlackText>
        <BlackText>
          <Balancer>please try changing your search query.</Balancer>
        </BlackText>
      </ParentDiv>
    )}
  </>
);

export default ItemsReturnedAfterSearchRequest;
