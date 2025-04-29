import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import PublicRoute from "./routes/PublicRoute";
import AllProducts from './pages/modules/allproducts/AllProducts';
import ProductDetail from './pages/modules/productdetails/ProductDetail';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Cart from './components/Cart';
import Checkout from './pages/modules/checkout/Checkout';
import OrderSuccess from './pages/modules/ordersuccess/OrderSuccess';
import Notifications from './pages/modules/notifications/Notifications';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PublicRoute />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
