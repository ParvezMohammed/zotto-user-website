/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Layout from "../components/layouts/Layout.jsx";
import Login from "../pages/auth/login/Login.jsx";
import VerifyOtp from "../pages/auth/verifyotp/VerifyOtp.jsx";
import LocationAccess from "../pages/auth/locationaccess/LocationAccess.jsx";
import LogoutConfirm from "../pages/auth/logoutconfirm/LogoutConfirm.jsx";
import Home from "../pages/modules/home/Home.jsx";
import AddReview from "../pages/modules/addreview/AddReview.jsx";
import PrivacyPolicy from "../pages/modules/privacypolicy/PrivacyPolicy.jsx";
import TermsConditions from "../pages/modules/termsandcondition/Terms&condition.jsx";
import ContactUs from "../pages/modules/contactus/ContactUs.jsx";
import AboutUs from "../pages/modules/aboutus/AboutUs.jsx";
import AccountPopup from "../pages/modules/accountpopup/AccountPopup.jsx";

const PublicRoute = () => {
  const [activeTab, setActiveTab] = useState("/");

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* <Route element={<ProtectedRoute />}> */}

      {/* User Management  */}

      <Route
        path="/"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Home />
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
        path="/locationaccess"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <LocationAccess />
          </Layout>
        }
      />
      <Route
        path="/logoutconfirm"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <LogoutConfirm />
          </Layout>
        }
      />
      <Route
        path="/accountpopup"
        element={
          <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
            <AccountPopup />
          </Layout>
        }
      />

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

      {/* </Route> */}
    </Routes>
  );
};

export default PublicRoute;
