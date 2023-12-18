import { Container } from "react-bootstrap";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/Checkout";
import RegisterPage from "./pages/RegisterPage";
import SiteTitle from "./components/SiteTitle";
import { HashRouter, Route, Routes } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import { useReducer } from "react";

function App() {
  return (
    <Container>
      <HashRouter>
        <SiteTitle />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
        {/* <LoginPage />
        <RegisterPage />
        <ProductsPage />
        <CartPage />
        <CheckOutPage />
        <SuccessPage /> */}
      </HashRouter>
    </Container>
  );
}

export default App;
