import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";

import useGetCurrentUserSelectors from "./hooks/selectors/use-get-current-user-selectors";
import useCartItemsListener from "./hooks/use-cart-items-listener";
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
  checkoutRoute,
  paymentResultRoute,
  ordersOwnerRoute,
  ordersOwnerAllTimeOrdersRoute,
  uploadOrderResultRoute,
  uploadOrderDeleteCartItemsRoute,
  uploadOrderSendEmailConfirmationRoute,
  allUsersRoute,
  incomeRoute,
} from "./strings/routes/routes-strings";

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
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const PaymentResult = lazy(() =>
  import("./routes/payment-result/payment-result.component")
);
const UploadOrderResult = lazy(() =>
  import("./routes/upload-order-result/upload-order-result.component")
);
const UploadOrderSendEmailConfirmation = lazy(() =>
  import(
    "./routes/upload-order-send-email-confirmation/upload-order-send-email-confirmation.component"
  )
);
const UploadOrderDeleteCartItems = lazy(() =>
  import(
    "./routes/upload-order-delete-cart-items/upload-order-delete-cart-items.component"
  )
);
const OrdersOwner = lazy(() =>
  import("./routes/orders-owner/orders-owner.component")
);
const OrdersOwnerAllTimeOrders = lazy(() =>
  import(
    "./routes/orders-owner-all-time-orders/orders-owner-all-time-orders.component"
  )
);
const AllUsers = lazy(() => import("./routes/all-users/all-users.component"));
const Income = lazy(() => import("./routes/income/income.component"));

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
              <Route path={checkoutRoute} element={<Checkout />} />

              <Route path={paymentResultRoute} element={<PaymentResult />} />

              <Route
                path={uploadOrderResultRoute}
                element={<UploadOrderResult />}
              />

              <Route
                path={uploadOrderSendEmailConfirmationRoute}
                element={<UploadOrderSendEmailConfirmation />}
              />

              <Route
                path={uploadOrderDeleteCartItemsRoute}
                element={<UploadOrderDeleteCartItems />}
              />

              <Route
                path={ordersOwnerRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <OrdersOwner />
                  ) : null
                }
              />

              <Route
                path={ordersOwnerAllTimeOrdersRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <OrdersOwnerAllTimeOrders />
                  ) : null
                }
              />

              <Route
                path={allUsersRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <AllUsers />
                  ) : null
                }
              />

              <Route
                path={incomeRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <Income />
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
