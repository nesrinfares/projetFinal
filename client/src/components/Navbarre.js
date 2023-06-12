import React, { useState } from "react";
import "./Navbarr.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbarre() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setshow] = useState(false);

  const user = useSelector((state) => state.user?.user);
  return (
    <div className="body">
      <nav>
      <div className="symbol">
        <img src="icon.png" alt="Logo" />
      </div>

      
        <a href="#home">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
        </a>
        <a href="#shops">
          <Link style={{ textDecoration: "none", color: "black" }} to="/shop">
            Shop
          </Link>
        </a>
        <a href="#about">
          <Link style={{ textDecoration: "none", color: "black" }} to="/Promo">
            Promo
          </Link>
        </a>
        <a href="#portefolio">
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            About
          </Link>
        </a>
        <a href="#contact">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
          >
            Contact
          </Link>{" "}
        </a>
        {isAuth && user.isAdmin === true ? (
          <a href="#contact">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Dashbord"
            >
              Dashbord
            </Link>{" "}
          </a>
        ) : null}
      </nav>

      <div className="icons">
        <h1 onClick={()=> setshow(!show)}>ggggg</h1>
      </div>

      {show ? <div  className="drop">aaaaaa</div> : null}
    </div>
  );
}

export default Navbarre;
