/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Layout from "../components/layouts/Layout.jsx";
import Login from "../pages/auth/Login.jsx";
import Home from "../pages/modules/home/Home.jsx";
import OrderComfirmed from "../pages/modules/order/OrderConfirmed.jsx";
import OrderCancel from "../pages/modules/ordercancel/OrderCancel.jsx";
import OrderDetail from "../pages/modules/vieworderdetail/OrderDetail.jsx";
import TrackOrder from "../pages/modules/trackorder/TrackOrder.jsx";
import Homepage from "../pages/modules/homepage/Homepage.jsx";
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
        <Route path="/order" element={<OrderComfirmed/>}/>
        <Route path="/cancel-Order" element={<OrderCancel/>}/>
        <Route path="/ViewDetail" element={<OrderDetail/>}/>
        <Route path="/Trackorder" element={<TrackOrder/>}/>
        <Route path="/home" element={<Homepage/>}/>
      {/* </Route> */}
    </Routes>
  )
};

export default PublicRoute;
