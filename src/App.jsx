import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

// import useGetCurrentUserSelectors from "./hooks/selectors/use-get-current-user-selectors";
import useGetUserOnLoadThunkUseEffect from "./hooks/use-get-user-on-load-thunk-use-effect";

import useScrollToTop from "./hooks/use-scroll-to-top";
import PrivateRoutes from "./components/private-routes/private-routes.component";
import ErrorFallback from "./components/errors/error-fallback.component";
import Loader from "./components/loader/loader.component";
import {
  mainMenuRoute,
  signInRoute,
  signUpRoute,
  chooseOptionsRoute,
} from "./strings/routes/routes-strings";
// import FloatingBackButton from "./components/floating-back-button/floating-back-button.component";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const Menu = lazy(() => import("./routes/menu/menu.component"));
const ChooseOptions = lazy(() =>
  import("./routes/choose-options/choose-options.component")
);

const App = () => {
  // const { currentUser, appOwnerId } = useGetCurrentUserSelectors();
  useGetUserOnLoadThunkUseEffect();
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
            <Route path={mainMenuRoute} element={<Menu />} />
            <Route path={chooseOptionsRoute} element={<ChooseOptions />} />
            <Route element={<PrivateRoutes />}></Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
