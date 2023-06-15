import React, { useEffect, useState } from "react";
import "./detailler.css";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addcommande } from "../JS/commandeslice";
import { getproduit } from "../JS/productslice";

function Detailler({ produits }) {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const produit = produits?.filter((el) => el._id === params.id)[0];
  const [newcommande, setnewcommande] = useState({
    name_user: user?.name,
    image: produit?.image,
    name_produit: produit?.name,
    date_commande: new Date(),
    prix: produit?.prix,
    status: "non payé",
  });
  console.log(produit);
  return (
    <div className="detailler">
      <div className="classe1">
        <img
          src={produit?.image}
          alt="imgGrand"
          style={{ width: "400px", height: "410px" }}
        />
        <div className="img-min">
          <img
            src={produit?.images[0]}
            alt="imgmin"
            style={{ width: "130", height: "150px", margin: "10px" }}
          />
          <img
            src={produit?.images[1]}
            alt="imgmin"
            style={{ width: "130", height: "150px", margin: "10px" }}
          />
          <img
            src={produit?.images[2]}
            alt="imgmin"
            style={{ width: "130", height: "150px", margin: "10px" }}
          />
        </div>
      </div>

      <div className="classe2">
        <h3>{produit?.name} </h3>
        <p style={{ color: "red" }}>PRIX :{produit?.prix} TND</p>
        <p>COULEUR :{produit?.couleur} </p>
        <p style={{ marginLeft: "170px" }}>
          DESCRIPTION :{produit?.description}{" "}
        </p>
        <div className="button">
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              margin: "15px",
              border: "none",
              borderRadius: "20px",
              width: "115px",
            }}
            onClick={() => dispatch(addcommande(newcommande))}
          >
            {" "}
            BOOK{" "}
          </Button>
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              margin: "15px",
              border: "none",
              borderRadius: "20px",
              width: "115px",
            }}
          >
            {" "}
            CLOSE{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Detailler;
