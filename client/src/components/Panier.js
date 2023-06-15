import React from "react";

import "./Panier.css";
import { useSelector } from "react-redux";

function Panier() {
  const commandes = useSelector((state) => state.commande?.commandeList);
  const user = useSelector((state) => state.user.user);
  console.log(commandes);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="totale-row ">
            <div className="shop-cart-table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>

                {commandes
                  ?.filter((el) => el?.name_user === user?.name)
                  .map((el) => (
                    <tbody>
                      <tr>
                        <td className="cart-product-item">
                          <img src="img/shop-cart/cp-1.jpg" alt="" />
                          <div className="cart__product__item__title">
                            <h6>{el?.name_produit}</h6>
                          </div>
                        </td>
                        <td className="cart__price">{el?.prix}</td>
                        <td className="cart__quantity">
                          <div className="pro-qty">
                            <span className="dec qtybtn">-</span>
                            <input type="text" value="1" />
                            <span className="inc qtybtn">+</span>
                          </div>
                        </td>
                        <td className="cart__total">{el?.prix} </td>
                        <td className="cart__close">
                          <span class="icon_close"></span>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="cart__btn">
              <a href="#">Continue Shopping</a>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6"
            style={{ marginLeft: "505px" }}
          >
            <div
              className="cart__btn update__btn"
              style={{ marginLeft: "200px" }}
            >
              <a href="#">
                <span className="icon_loading"></span> Update cart
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="discount__content" style={{ marginLeft: "-395px" }}>
              <h6>Discount codes</h6>
              <form action="#">
                <input type="text" placeholder="Enter your code" />
                <button type="submit" className="site-btn">
                  Apply
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div
              className="cart__total__procced"
              style={{ marginLeft: "119px", width: "360px" }}
            >
              <h6>Cart total</h6>
              <ul>
                <li>
                  Subtotal <span>$ 750.0</span>
                </li>
                <li>
                  Total <span>$ 750.0</span>
                </li>
              </ul>
              <a href="#" className="primary-btn">
                Proceed to checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panier;
