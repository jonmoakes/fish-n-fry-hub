import { useDispatch } from "react-redux";

import { toggleHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.slice";

import { HamburgerContainer, Hamburger } from "../../styles/div/div.styles";
import {
  HamburgerSpan,
  HamburgerSpanCloseMenu,
} from "../../styles/span/span.styles";
import useGetHamburgerMenuSelectors from "../../hooks/selectors/use-get-hamburger-menu-selectors";

const NavHamburger = () => {
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();

  const dispatch = useDispatch();

  return (
    <>
      <HamburgerContainer>
        <Hamburger onClick={() => dispatch(toggleHamburgerMenu())}>
          {!showHamburgerMenu ? (
            <>
              <HamburgerSpan />
              <HamburgerSpan />
              <HamburgerSpan />
            </>
          ) : (
            <>
              <HamburgerSpanCloseMenu />
              <HamburgerSpanCloseMenu />
              <HamburgerSpanCloseMenu />
            </>
          )}
        </Hamburger>
      </HamburgerContainer>
    </>
  );
};

export default NavHamburger;
