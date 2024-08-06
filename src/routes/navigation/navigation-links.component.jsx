import useNavLogic from "./nav-hooks/use-nav-logic";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink, CheckoutLink } from "../../styles/span/span.styles";

import { checkoutRoute } from "../../strings/routes/routes-strings";

const NavigationLinks = ({ path }) => {
  const { handleNavigate, navigationLinks, formattedLink } = useNavLogic();

  return (
    <>
      {navigationLinks.map((route) => {
        const isCheckoutRoute = route === checkoutRoute;

        return route !== path ? (
          <NavLink key={route} onClick={() => handleNavigate(route)}>
            {isCheckoutRoute ? (
              <CheckoutLink>{formattedLink(route)}</CheckoutLink>
            ) : (
              <BorderLink>{formattedLink(route)}</BorderLink>
            )}
          </NavLink>
        ) : null;
      })}
    </>
  );
};

export default NavigationLinks;
