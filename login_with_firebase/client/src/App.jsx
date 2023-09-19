import "./assets/styles/main.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/user/homePage/Home";
import ListProduct from "./pages/user/listProduct/ListProduct";
import Cart from "./pages/user/cart/Cart";
import About from "./pages/user/about/About";
import Contact from "./pages/user/contact/Contact";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
