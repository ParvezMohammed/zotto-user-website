/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Layout from "../components/layouts/Layout.jsx";
import Login from "../pages/auth/Login.jsx";
import Home from "../pages/modules/home/Home.jsx";

const PublicRoute = () => {
  const [activeTab, setActiveTab] = useState("/");

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login />
        }
      />
      {/* <Route element={<ProtectedRoute />}> */}

        {/* User Management  */}
        <Route
          path="/"
          element={
            <Layout
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <Home/>
            </Layout>
          }
        />

      {/* </Route> */}
    </Routes>
  )
};

export default PublicRoute;
