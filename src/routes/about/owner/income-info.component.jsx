import { LazyLoadImage } from "react-lazy-load-image-component";
import Balancer from "react-wrap-balancer";

import useIsMobileDevice from "../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../hooks/use-is-online";

import CheckConnection from "../check-connection.component";
import PlaceholderImage from "../../../assets/placeholder.jpg";

import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { ListItem, StyledUnorderedList } from "../../../styles/ul/ul.styles";

import { incomeImage } from "../../../strings/img-links/img-links";

const IncomeInfo = () => {
  const { getImacImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getImacImageSizeBasedOnScreen();

  return (
    <ParentDiv>
      <H2 className="underline">income info</H2>
      <Text>
        on this table, you can view a list of all of your received income.
      </Text>
      <Text>you get the payees:</Text>
      <StyledUnorderedList>
        <ListItem>name</ListItem>
        <ListItem>email</ListItem>
        <ListItem>date payment received on</ListItem>
        <ListItem>a receipt url to click on</ListItem>
        <ListItem>paymentId</ListItem>
      </StyledUnorderedList>

      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <>
              <a href={incomeImage}>
                <LazyLoadImage
                  src={incomeImage}
                  width={imageSize.width}
                  height={imageSize.height}
                  placeholderSrc={PlaceholderImage}
                  alt="Income Table On An Imac"
                />
              </a>

              <BlackHr />
            </>
          ) : null}
        </>
      ) : (
        <CheckConnection />
      )}

      <Text>
        <Balancer>
          you can search for any information in this table and even filter by
          week.
        </Balancer>
      </Text>
      <Text>
        simply enter a week number 1 -52 to see all of income received in that
        week.
      </Text>
      <Text>
        <Balancer>
          a handy tool is that whatever entries are returned, the total amount
          of all orders combined is displayed automatically, making it easy to
          instantly see how much you made each week.
        </Balancer>
      </Text>
    </ParentDiv>
  );
};

export default IncomeInfo;
