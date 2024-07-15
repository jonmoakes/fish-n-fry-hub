import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

// import useGetCurrentUserSelectors from "./hooks/get-selectors/use-get-current-user-selectors";
// import useGetUserOnLoadThunkUseEffect from "./hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-get-user-on-load-thunk-use-effect";

import useScrollToTop from "./hooks/use-scroll-to-top";
import PrivateRoutes from "./components/private-routes/private-routes.component";
import ErrorFallback from "./components/errors/error-fallback.component";
import Loader from "./components/loader/loader.component";
// import FloatingBackButton from "./components/floating-back-button/floating-back-button.component";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));

const App = () => {
  // const { currentUser, appOwnerId } = useGetCurrentUserSelectors();
  // useGetUserOnLoadThunkUseEffect();
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

            {/*private routes - if no user, redirect to sign in route */}
            <Route element={<PrivateRoutes />}></Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
