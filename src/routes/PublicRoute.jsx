import React from 'react';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout.jsx";
import Login from "../pages/auth/login/Login.jsx";
import VerifyOtp from "../pages/auth/verifyotp/VerifyOtp.jsx";
import LogoutConfirm from "../pages/auth/logoutconfirm/LogoutConfirm.jsx";
import LocationAccess from '../pages/auth/locationaccess/LocationAccess.jsx'
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
import OrderConfirmed from "../pages/modules/order/OrderConfirm.jsx";
import OrderCancel from "../pages/modules/order/OrderCancel.jsx";
import ViewOrderDetail from "../pages/modules/order/ViewOrderDetail.jsx";
import TrackOrder from "../pages/modules/trackorder/TrackOrder.jsx";

const PublicRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
