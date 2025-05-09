import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import useGetCurrentUserSelectors from "./hooks/selectors/use-get-current-user-selectors";
import useCartItemsListener from "./hooks/use-cart-items-listener";
import useGetUserOnLoadThunkUseEffect from "./hooks/use-get-user-on-load-thunk-use-effect";

import { appOwnerId } from "./constants/constants";

import SkeletonBox from "./components/skeleton-box/skeleton-box.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import FloatingBackButton from "./components/floating-back-button/floating-back-button.component";
import PrivateRoutes from "./components/private-routes/private-routes.component";
import ErrorFallback from "./components/errors/error-fallback.component";

import {
  menuRoute,
  signInRoute,
  signInEmailOtpRoute,
  signUpRoute,
  chooseOptionsRoute,
  categoryItemsRoute,
  uploadMenuItemsRoute,
  checkoutRoute,
  paymentResultRoute,
  ordersOwnerRoute,
  ordersOwnerAllTimeOrdersRoute,
  ordersCustomerRoute,
  uploadOrderResultRoute,
  uploadOrderDeleteCartItemsRoute,
  uploadOrderSendEmailConfirmationRoute,
  allUsersRoute,
  incomeRoute,
  repeatOrderRoute,
  contactRoute,
  accountRoute,
  pwaInfoRoute,
  databaseManagementRoute,
  databaseManagementDeleteUserRoute,
  aboutRoute,
  databaseManagementAddOrderAfterErrorRoute,
  databaseManagementManageMenuRoute,
  databaseManagementCreateNewProductRoute,
  databaseManagementEditOptionsPricesRoute,
  closeAccountRoute,
  forgotPasswordRequestRoute,
  chooseNewPasswordRoute,
  updatePasswordRoute,
  socialSignInSuccessRoute,
  socialSignInFailRoute,
  updateEmailRoute,
} from "./strings/routes/routes-strings";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const SignInEmailOtp = lazy(() =>
  import("./routes/sign-in-email-otp/sign-in-email-otp.component")
);
const About = lazy(() => import("./routes/about/about.component"));
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
const RepeatOrder = lazy(() =>
  import("./routes/repeat-order/repeat-order.component")
);
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
const OrdersCustomer = lazy(() =>
  import("./routes/orders-customer/orders-customer.component")
);
const AllUsers = lazy(() => import("./routes/all-users/all-users.component"));
const Income = lazy(() => import("./routes/income/income.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));
const Account = lazy(() => import("./routes/account/account.component"));
const PwaInformation = lazy(() =>
  import("./routes/pwa-info/pwa-information.component")
);
const DatabaseManagement = lazy(() =>
  import("./routes/database-management/database-management.component")
);
const DBManageDeleteUser = lazy(() =>
  import(
    "./routes/database-management-delete-user/db-manage-delete-user.component"
  )
);
const DBManageAddOrderAfterError = lazy(() =>
  import(
    "./routes/database-management-add-order-after-error/db-manage-add-order-after-error.component"
  )
);
const DBManageManageMenu = lazy(() =>
  import(
    "./routes/database-management-manage-menu/db-manage-manage-menu.component"
  )
);

const DBManageCreateNewProduct = lazy(() =>
  import(
    "./routes/database-management-create-new-product/datatabase-management-create-new-product.component"
  )
);

const DBManageEditOptionsPrices = lazy(() =>
  import(
    "./routes/database-management-edit-options-prices/db-manage-edit-options-prices.component"
  )
);
const CloseAccount = lazy(() =>
  import("./routes/close-account/close-account.component")
);
const ForgotPasswordRequest = lazy(() =>
  import("./routes/forgot-password-request/forgot-password-request.component")
);
const ChooseNewPassword = lazy(() =>
  import("./routes/choose-new-password/choose-new-password.component")
);
const UpdatePassword = lazy(() =>
  import("./routes/update-password/update-password.component")
);
const SocialSignInSuccess = lazy(() =>
  import("./routes/social-sign-in-success/social-sign-in-success.component")
);
const SocialSignInFail = lazy(() =>
  import("./routes/social-sign-in-fail/social-sign-in-fail.component")
);
const UpdateEmail = lazy(() =>
  import("./routes/update-email/update-email.component")
);

const App = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  useGetUserOnLoadThunkUseEffect();
  useCartItemsListener();

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <FloatingBackButton />
      <Navigation />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<SkeletonBox />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={signUpRoute} element={<SignUp />} />
            <Route path={signInRoute} element={<SignIn />} />
            <Route path={signInEmailOtpRoute} element={<SignInEmailOtp />} />
            <Route
              path={socialSignInSuccessRoute}
              element={<SocialSignInSuccess />}
            />
            <Route
              path={socialSignInFailRoute}
              element={<SocialSignInFail />}
            />
            <Route path={aboutRoute} element={<About />} />
            <Route path={menuRoute} element={<Menu />} />
            <Route path={categoryItemsRoute} element={<CategoryItems />} />
            <Route path={chooseOptionsRoute} element={<ChooseOptions />} />
            <Route path={contactRoute} element={<Contact />} />
            <Route
              path={forgotPasswordRequestRoute}
              element={<ForgotPasswordRequest />}
            />
            <Route
              path={chooseNewPasswordRoute}
              element={<ChooseNewPassword />}
            />

            <Route element={<PrivateRoutes />}>
              <Route path={accountRoute} element={<Account />} />
              <Route path={closeAccountRoute} element={<CloseAccount />} />
              <Route path={updatePasswordRoute} element={<UpdatePassword />} />
              <Route path={updateEmailRoute} element={<UpdateEmail />} />
              <Route
                path={uploadMenuItemsRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <UploadMenuItems />
                  ) : null
                }
              />
              <Route path={checkoutRoute} element={<Checkout />} />
              <Route path={repeatOrderRoute} element={<RepeatOrder />} />
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
                path={ordersCustomerRoute}
                element={
                  currentUser && currentUser.id !== appOwnerId ? (
                    <OrdersCustomer />
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
              <Route
                path={databaseManagementRoute}
                element={
                  currentUser && currentUser.id === appOwnerId ? (
                    <DatabaseManagement />
                  ) : null
                }
              />
              <Route
                path={databaseManagementDeleteUserRoute}
                element={<DBManageDeleteUser />}
              />
              <Route
                path={databaseManagementAddOrderAfterErrorRoute}
                element={<DBManageAddOrderAfterError />}
              />
              <Route
                path={databaseManagementManageMenuRoute}
                element={<DBManageManageMenu />}
              />
              <Route
                path={databaseManagementCreateNewProductRoute}
                element={<DBManageCreateNewProduct />}
              />
              <Route
                path={databaseManagementEditOptionsPricesRoute}
                element={<DBManageEditOptionsPrices />}
              />
              <Route path={pwaInfoRoute} element={<PwaInformation />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
