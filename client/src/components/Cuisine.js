import React from "react";
import "./cart.css";
import Card from "react-bootstrap/Card";

import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";

// import ReactStars from "react-rating-stars-component";
function Cuisine() {
  const produits = useSelector((state) => state.produit?.produitList);
  console.log(produits);
  return (
    <div className="menu">
      <div className="categorie">
        <h3>catégorie</h3>
        <>
          <h4>VETEMENTS</h4>
          <div className="vetement">
            <label for="xxs" style={{ display: "block", padding: "5px" }}>
              PULL
              <input type="checkbox" id="xxs" style={{ marginLeft: "5px" }} />
              <span class="checkmark"></span>
            </label>
            <label for="xxs" style={{ padding: "5px" }}>
              SHOES
              <input type="checkbox" id="xxs" style={{ padding: "5px" }} />
              <span class="checkmark"></span>
            </label>
            <label for="xxs" style={{ padding: "5px" }}>
              ACCESSOIRES
              <input type="checkbox" id="xxs" />
              <span class="checkmark"></span>
            </label>
            <label for="xxs" style={{ padding: "5px" }}>
              LUNETTES
              <input type="checkbox" id="xxs" />
              <span class="checkmark"></span>
            </label>
          </div>
          <h4>CUISINE ET DECORATION</h4>

          <label for="xxs" style={{ padding: "5px" }}>
            cuisine
            <input type="checkbox" id="xxs" />
            <span class="checkmark"></span>
          </label>
          <label for="xxs" style={{ padding: "5px" }}>
            decoration
            <input type="checkbox" id="xxs" />
            <span class="checkmark"></span>
          </label>
          <h4>ELECTRONIQUE</h4>
          <label for="xxs" style={{ marginTop: "5px" }}>
            electronique
            <input type="checkbox" id="xxs" />
            <span class="checkmark"></span>
          </label>
          <label for="xxs" style={{ marginTop: "1px" }}>
            iphone
            <input type="checkbox" id="xxs" />
            <span class="checkmark"></span>
          </label>

          <div className="filtersize">
            <h4>GENDER</h4>
            <div className="size">
              <label for="xxs" style={{ padding: "5px" }}>
                HOMME
                <input type="checkbox" id="xxs" />
                <span class="checkmark"></span>
              </label>

              <label for="xxs">
                FEMME
                <input type="checkbox" id="xxs" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </>
      </div>

      <div className="photo">
        {produits
          ?.filter((el) => el?.catégori === "cuisine et decoration")
          .map((el) => (
            <CardProduct el={el} />
          ))}
      </div>
    </div>
  );
}

export default Cuisine;
