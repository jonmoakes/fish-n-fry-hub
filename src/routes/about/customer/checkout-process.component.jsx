import { LazyLoadImage } from "react-lazy-load-image-component";
import Balancer from "react-wrap-balancer";

import useIsMobileDevice from "../../../hooks/use-is-mobile-device";
import useIsOnline from "../../../hooks/use-is-online";

import CheckConnection from "../check-connection.component";
import PlaceholderImage from "../../../assets/placeholder.jpg";

import { Text } from "../../../styles/p/p.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

import { checkoutImage } from "../../../strings/img-links/img-links";

const CheckoutProcess = () => {
  const { getPhoneImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getPhoneImageSizeBasedOnScreen();

  return (
    <ParentDiv>
      <H2 className="underline">checkout process</H2>
      <Text>
        once in the checkout, the user can adjust quantities or completely
        remove an item.
      </Text>
      <Text>
        <Balancer>
          the price is updated in real-time both for the product itself ( if
          they change quantity ), and the grand total which is just above the
          card details input.
        </Balancer>
      </Text>

      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <a href={checkoutImage}>
              <LazyLoadImage
                src={checkoutImage}
                width={imageSize.width}
                height={imageSize.height}
                placeholderSrc={PlaceholderImage}
                alt="Checkout Screen On A Phone"
              />
            </a>
          ) : null}

          <BlackHr />
        </>
      ) : (
        <CheckConnection />
      )}
      <Text>
        <Balancer>
          once again, this gives the user no nasty surprises as to how much they
          are going to be charged if they have made a mistake regarding quantity
          etc.
        </Balancer>
      </Text>
      <Text>
        our payment processor uses{" "}
        <a className="red" href="https://stripe.com/gb">
          stripe
        </a>
        , one of the world leaders in processing online payments.
      </Text>
      <Text>
        <Balancer>
          this means that your customers can be confident in safe transactions
          and you have full control over any disputes that may arise.
        </Balancer>
      </Text>
    </ParentDiv>
  );
};

export default CheckoutProcess;
