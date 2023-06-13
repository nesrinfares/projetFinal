import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Logi from "./components/Logi";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";

import { getproduct } from "./JS/productslice";
import { getcommande } from "./JS/commandeslice";
import Navbarre from "./components/Navbarre";
import Home from "./components/Home";
import Promo from "./components/Promo";
import Vetements from "./components/Vetements";
import Cuisine from "./components/Cuisine";
import Electronique from "./components/Electronique";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Detailler from "./components/Detailler";
import "bootstrap/dist/css/bootstrap.min.css";
import Panier from "./components/Panier";
import Contact from "./components/Contact";
import Dashborde from "./components/Dashborde";
import Footer from "./components/Footer";
import ListProduct from "./components/ListProduct";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }

    dispatch(getproduct());
    dispatch(getcommande());
  
  });

  return (
    <div className="App">
      <Navbarre />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Logi />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
        <Route path="/panier" element={<Panier />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashborde" element={<Dashborde />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/Vetements" element={<Vetements />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/electronique" element={<Electronique />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/dashborde/prodlist' element={<ListProduct />} />
        <Route
          path="/detailler/:id"
          // element={<Detailler produits={produits} />}
        />
      </Routes>

      {/* <Footer/>   */}
    </div>
  );
}

export default App;
