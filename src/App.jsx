import {
  BrowserRouter as Router, // Ensure BrowserRouter is imported
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import PublicRoute from "./routes/PublicRoute";
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Notifications from './pages/Notifications';

function App() {
  return (
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
  );
}

export default App;
