import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// import Shop from "./Shop";
import { useSelector } from "react-redux";
function Dashborde() {
  const produits = useSelector((state) => state.produit?.produits);
  return (
    <div
      style={{ backgroundColor: "red", marginTop: "50px", height: "1000px" }}
    >

    </div>
  );
}

export default Dashborde;
