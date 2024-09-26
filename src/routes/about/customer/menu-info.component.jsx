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

import {
  menuImage,
  itemsListImage,
  optionsImage,
  addToCartImage,
} from "../../../strings/img-links/img-links";

const MenuInfo = () => {
  const { getPhoneImageSizeBasedOnScreen } = useIsMobileDevice();
  const { isOnline } = useIsOnline();

  const imageSize = getPhoneImageSizeBasedOnScreen();

  return (
    <ParentDiv>
      <H2 className="underline">the menu</H2>
      <Text>the user is initially greeted with a list of categories.</Text>

      <BlackHr />

      {isOnline ? (
        <>
          {imageSize ? (
            <a href={menuImage}>
              <LazyLoadImage
                src={menuImage}
                width={imageSize.width}
                height={imageSize.height}
                placeholderSrc={PlaceholderImage}
                alt="Menu Screen On A Phone"
              />
            </a>
          ) : null}

          <BlackHr />

          <Text>
            <Balancer>
              they can tap on any category to view its products or, if they know
              what they want, they can search directly using the search bar and
              all matched products will be shown on screen.
            </Balancer>
          </Text>
          <Text>
            having chosen a category, a list of products from within that
            category are displayed.
          </Text>
          <BlackHr />
          {imageSize ? (
            <a href={itemsListImage}>
              <LazyLoadImage
                src={itemsListImage}
                width={imageSize.width}
                height={imageSize.height}
                placeholderSrc={PlaceholderImage}
                alt="List Of Items On A Phone"
              />
            </a>
          ) : null}
          <BlackHr />
          <Text>
            <Balancer>
              a user taps on the 'select & choose options' button on the product
              that they want, where they are then taken to the product details
              page.
            </Balancer>
          </Text>

          <Text>
            <Balancer>
              some products have no options, but those that do will display a
              list of options that the user can pick from.
            </Balancer>
          </Text>
          <Text>some examples are sizes, sauces, salt & vinegar etc.</Text>
          <BlackHr />
          {imageSize ? (
            <a href={optionsImage}>
              <LazyLoadImage
                src={optionsImage}
                width={imageSize.width}
                height={imageSize.height}
                placeholderSrc={PlaceholderImage}
                alt="List Of Options On A Phone"
              />
            </a>
          ) : null}
          <BlackHr />
          <Text>
            <Balancer>
              as the user selects the options, the price will update
              automatically just before the 'add to cart' button.
            </Balancer>
          </Text>
          <Text>
            this keeps the user clearly informed as to the price changes.
          </Text>
          <Text>
            when they are happy, they tap on the 'add to cart button'.
          </Text>
          <BlackHr />
          {imageSize ? (
            <a href={addToCartImage}>
              <LazyLoadImage
                src={addToCartImage}
                width={imageSize.width}
                height={imageSize.height}
                placeholderSrc={PlaceholderImage}
                alt="Add To Cart Button On A Phone"
              />
            </a>
          ) : null}
          <BlackHr />
          <Text>
            <Balancer>
              once a user has at least one item in their cart, the checkout
              option will appear in the navigation menu - clearly highlighted so
              that the user does not have to hunt around for the option.
            </Balancer>
          </Text>
          <Text>
            throughout the whole app, user experience has been put first and
            foremost!
          </Text>
        </>
      ) : (
        <CheckConnection />
      )}
    </ParentDiv>
  );
};

export default MenuInfo;
