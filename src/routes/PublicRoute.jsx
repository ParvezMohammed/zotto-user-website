import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout.jsx";
import Login from "../pages/auth/login/Login.jsx";
import VerifyOtp from "../pages/auth/verifyotp/VerifyOtp.jsx";
import LogoutConfirm from "../pages/auth/logoutconfirm/LogoutConfirm.jsx";
import LocationAccess from "../pages/auth/locationaccess/LocationAccess.jsx";
import Home from "../pages/modules/home/Home.jsx";
import AddReview from "../pages/modules/addreview/AddReview.jsx";
import PrivacyPolicy from "../pages/modules/privacypolicy/PrivacyPolicy.jsx";
import TermsConditions from "../pages/modules/termsandcondition/Terms&condition.jsx";
import ContactUs from "../pages/modules/contactus/ContactUs.jsx";
import AboutUs from "../pages/modules/aboutus/AboutUs.jsx";
import Testimonials from "../pages/modules/testimonial/Testimonial.jsx";
import Profile from "../pages/modules/profile/profile.jsx";
import OrderDetails from "../pages/modules/order/OrderDetails.jsx";
import Orders from "../pages/modules/order/Order.jsx";
import OrderConfirm from "../pages/modules/order/OrderConfirm.jsx";
import OrderCancel from "../pages/modules/order/OrderCancel.jsx";
import ViewOrderDetail from "../pages/modules/order/ViewOrderDetail.jsx";
import TrackOrder from "../pages/modules/trackorder/TrackOrder.jsx";
import AllProducts from "../pages/modules/allproducts/AllProducts.jsx";
import ProductDetail from "../pages/modules/allproducts/ProductDetail.jsx";
import Checkout from "../pages/modules/checkout/Checkout.jsx";
import Cart from "../pages/modules/cart/Cart.jsx";
import OrderSuccess from "../pages/modules/order/OrderSuccess.jsx";
import Notification from "../pages/modules/notifications/Notifications.jsx";

const PublicRoute = () => {
  const [activeTab, setActiveTab] = useState("/");

  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Home />
          </Layout>
        }
      />

      {/* Authentication Routes */}
      <Route
        path="/login"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/locationaccess"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <LocationAccess />
          </Layout>
        }
      />
      <Route
        path="/verifyotp"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <VerifyOtp />
          </Layout>
        }
      />
      <Route
        path="/logout"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <LogoutConfirm />
          </Layout>
        }
      />

      {/* Other Routes */}
      <Route
        path="/aboutus"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/contactus"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <ContactUs />
          </Layout>
        }
      />
      <Route
        path="/addreview"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <AddReview />
          </Layout>
        }
      />
      <Route
        path="/notifications"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Notification />
          </Layout>
        }
      />
      <Route
        path="/privacypolicy"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <PrivacyPolicy />
          </Layout>
        }
      />
      <Route
        path="/termscondition"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <TermsConditions />
          </Layout>
        }
      />
      <Route
        path="/testimonials"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Testimonials />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/order-details/:orderId"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <OrderDetails />
          </Layout>
        }
      />
      <Route
        path="/orders"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Orders />
          </Layout>
        }
      />
      <Route
        path="/order-confirm"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <OrderConfirm />
          </Layout>
        }
      />
      <Route
        path="/cancel-order"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <OrderCancel />
          </Layout>
        }
      />
      <Route
        path="/view-detail"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <ViewOrderDetail />
          </Layout>
        }
      />
      <Route
        path="/track-order"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <TrackOrder />
          </Layout>
        }
      />
      <Route
        path="/all-products"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <AllProducts />
          </Layout>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <ProductDetail />
          </Layout>
        }
      />
      <Route
        path="/checkout"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Checkout />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Cart />
          </Layout>
        }
      />
      <Route
        path="/order-success"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <OrderSuccess />
          </Layout>
        }
      />
    </Routes>
  );
};

export default PublicRoute;
