import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

import useGetCurrentUserSelectors from "./hooks/selectors/use-get-current-user-selectors";
import useGetUserOnLoadThunkUseEffect from "./hooks/use-get-user-on-load-thunk-use-effect";

import { appOwnerId } from "./constants/constants";

import useScrollToTop from "./hooks/use-scroll-to-top";
import PrivateRoutes from "./components/private-routes/private-routes.component";
import ErrorFallback from "./components/errors/error-fallback.component";
import Loader from "./components/loader/loader.component";
import {
  menuRoute,
  signInRoute,
  signUpRoute,
  chooseOptionsRoute,
  categoryItemsRoute,
  uploadMenuItemsRoute,
} from "./strings/routes/routes-strings";
import useCartItemsListener from "./hooks/use-cart-items-listener";
// import FloatingBackButton from "./components/floating-back-button/floating-back-button.component";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const Menu = lazy(() => import("./routes/menu/menu.component"));
const CategoryItems = lazy(() =>
  import("./routes/category-items/category-items.component")
);
const ChooseOptions = lazy(() =>
  import("./routes/choose-options/choose-options.component")
);
const UploadMenuItems = lazy(() =>
  import("./routes/upload-menu-items/upload-menu-items.component")
);

const App = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  useGetUserOnLoadThunkUseEffect();
  useCartItemsListener();
  useScrollToTop();

  return (
    <>
      <GlobalStyle />
      {/* <FloatingBackButton /> */}
      <Navigation />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={signUpRoute} element={<SignUp />} />
            <Route path={signInRoute} element={<SignIn />} />
            <Route path={menuRoute} element={<Menu />} />
            <Route path={categoryItemsRoute} element={<CategoryItems />} />
            <Route path={chooseOptionsRoute} element={<ChooseOptions />} />
            <Route element={<PrivateRoutes />}>
              <Route
                path={uploadMenuItemsRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <UploadMenuItems />
                  ) : null
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
