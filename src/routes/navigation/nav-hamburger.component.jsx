import { useDispatch, useSelector } from "react-redux";

import {
  selectHamburgerMenuSelectors,
  toggleHamburgerMenu,
} from "../../store/hamburger-menu/hamburger-menu.slice";

import { HamburgerContainer, Hamburger } from "../../styles/div/div.styles";
import {
  HamburgerSpan,
  HamburgerSpanCloseMenu,
} from "../../styles/span/span.styles";

const NavHamburger = () => {
  const { showHamburgerMenu } = useSelector(selectHamburgerMenuSelectors);

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
