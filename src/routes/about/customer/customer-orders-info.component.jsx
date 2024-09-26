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

import { ordersCustomerImage } from "../../../strings/img-links/img-links";

const CustomerOrdersInfo = () => {
  const { getImacImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getImacImageSizeBasedOnScreen();

  return (
    <ParentDiv>
      <H2 className="underline">orders table</H2>
      <Text>
        <Balancer>
          on the customers orders page, they are presented with a table of all
          of their previous orders.
        </Balancer>
      </Text>
      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <>
              <a href={ordersCustomerImage}>
                <LazyLoadImage
                  src={ordersCustomerImage}
                  width={imageSize.width}
                  height={imageSize.height}
                  placeholderSrc={PlaceholderImage}
                  alt="Customers Orders Table On An Imac"
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
          they can search their orders and even reorder a previous meal ( useful
          for convenience instead of having to keep adding a regular meal to the
          cart ) in one tap!
        </Balancer>
      </Text>
    </ParentDiv>
  );
};

export default CustomerOrdersInfo;
