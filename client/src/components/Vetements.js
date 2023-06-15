import React from "react";
import "./cart.css";

import { useDispatch, useSelector } from "react-redux";
import CardProduct from "./CardProduct";

// import ReactStars from "react-rating-stars-component";
function Vetements() {
  const produits = useSelector((state) => state.produit?.produitList);
  console.log(produits);
  return (
    <div className="menu">
      <div className="categorie">
        <h3>catégorie</h3>
        <>
          <h5>VETEMENTS</h5>
          <div className="vetement">
            <label for="xxs" style={{ display: "block" }}>
              PULL
              <input type="checkbox" id="xxs" style={{ marginLeft: "5px" }} />
              <span class="checkmark"></span>
            </label>
            <label for="xxs">
              SHOES
              <input type="checkbox" id="xxs" />
              <span class="checkmark"></span>
            </label>
            <label for="xxs">
              ACCESSOIRES
              <input type="checkbox" id="xxs" />
              <span class="checkmark"></span>
            </label>
            <label for="xxs">
              LUNETTES
              <input type="checkbox" id="xxs" />
              <span class="checkmark"></span>
            </label>
          </div>
          <h5>CUISINE ET DECORATION</h5>

          <label for="xxs">
            cuisine
            <input type="checkbox" id="xxs" />
            <span class="checkmark"></span>
          </label>
          <label for="xxs">
            decoration
            <input type="checkbox" id="xxs" />
            <span class="checkmark"></span>
          </label>
          <h5>ELECTRONIQUE</h5>
          <label for="xxs" style={{ marginTop: "10px" }}>
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
              <label for="xxs" style={{ padding: "10px" }}>
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
          ?.filter((el) => el?.catégori === "vetements")
          .map((el) => (
            <CardProduct el={el} />
          ))}
      </div>
    </div>
  );
}

export default Vetements;
