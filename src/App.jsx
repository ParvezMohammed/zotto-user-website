import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import PublicRoute from "./routes/PublicRoute";
import Layout from "./components/layouts/Layout";
import Login from "./pages/auth/login/Login";
import VerifyOtp from "./pages/auth/verifyotp/VerifyOtp";
import LogoutConfirm from "./pages/auth/logoutconfirm/LogoutConfirm";
import LocationAccess from './pages/auth/locationaccess/LocationAccess';
import Home from "./pages/modules/home/Home";
import AllProducts from './pages/modules/allproducts/AllProducts';
import ProductDetail from './pages/modules/productdetails/ProductDetail';
import Cart from './components/Cart';
import Checkout from './pages/modules/checkout/Checkout';
import OrderSuccess from './pages/modules/order/OrderSuccess';
import AddReview from "./pages/modules/addreview/AddReview";
import PrivacyPolicy from "./pages/modules/privacypolicy/PrivacyPolicy";
import TermsConditions from "./pages/modules/termsandcondition/Terms&condition";
import ContactUs from "./pages/modules/contactus/ContactUs";
import AboutUs from "./pages/modules/aboutus/AboutUs";
import Testimonials from "./pages/modules/testimonial/Testimonial";
import Profile from "./pages/modules/profile/profile";
import OrderDetails from "./pages/modules/order/OrderDetails";
import Orders from "./pages/modules/order/Order";
import OrderConfirmed from "./pages/modules/order/OrderConfirm";
import OrderCancel from "./pages/modules/order/OrderCancel";
import ViewOrderDetail from "./pages/modules/order/ViewOrderDetail";
import TrackOrder from "./pages/modules/trackorder/TrackOrder";
import Notifications from './pages/modules/notifications/Notifications';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/verifyotp" element={<PublicRoute><VerifyOtp /></PublicRoute>} />
        
        {/* Protected Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/all-products" element={<Layout><AllProducts /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
        <Route path="/order-success" element={<Layout><OrderSuccess /></Layout>} />
        <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
        <Route path="/logoutconfirm" element={<Layout><LogoutConfirm /></Layout>} />
        <Route path="/locationaccess" element={<Layout><LocationAccess /></Layout>} />
        <Route path="/aboutus" element={<Layout><AboutUs /></Layout>} />
        <Route path="/contactus" element={<Layout><ContactUs /></Layout>} />
        <Route path="/addreview" element={<Layout><AddReview /></Layout>} />
        <Route path="/privacypolicy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/termscondition" element={<Layout><TermsConditions /></Layout>} />
        <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/order-details/:orderId" element={<Layout><OrderDetails /></Layout>} />
        <Route path="/orders" element={<Layout><Orders /></Layout>} />
        <Route path="/order-confirm" element={<Layout><OrderConfirmed /></Layout>} />
        <Route path="/cancel-order" element={<Layout><OrderCancel /></Layout>} />
        <Route path="/view-detail" element={<Layout><ViewOrderDetail /></Layout>} />
        <Route path="/track-order" element={<Layout><TrackOrder /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;

