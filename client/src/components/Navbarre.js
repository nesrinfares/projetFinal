import React, { useState } from "react";
import "./Navbarr.css";

import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import { logout } from "../JS/userSlice/userSlice";

import { Link } from "react-router-dom";

import { Dropdown, ButtonGroup, NavDropdown, Nav } from "react-bootstrap";

function Navbarre() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <div className="body">
      <div className="symbol">
        <img src="icon.png" alt="Logo" />
      </div>

      <nav>
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
            Promos
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
        {user?.category == "admin" ? (
          <a href="#contact">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/dashborde"
            >
              Dashbord
            </Link>{" "}
          </a>
        ) : null}
      </nav>

      <div className="icons">
        <>
          {!user ? (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/login"
            >
              connexion
            </Link>
          ) : (
            <li style={{ marginTop: -20 }}>
              <Dropdown as={ButtonGroup}>
                <img
                  style={{
                    backgroundSize: "32px 32px",
                    borderRadius: "50%",
                    height: "32px",
                    width: "32px",
                  }}
                  src="https://lh3.googleusercontent.com/ogw/AOLn63EfcRV20a2d8CaFk-oX1rtKORzkqGITg22sov9NqA=s32-c-mo"
                  alt=""
                  aria-hidden="true"
                  data-noaft=""
                />

                <Dropdown.Toggle
                  split
                  variant="light"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item>
                    {" "}
                    <Link to="/profile">
                      {" "}
                      <svg
                        style={{ marginRight: 8 }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-gear-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                      </svg>
                      Mon compte
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <button
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      {" "}
                      <svg
                        style={{ marginRight: 8 }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-box-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                        />
                      </svg>{" "}
                      Déconnexion
                    </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          )}
        </>

        {user ? (
          <Link to="/panier">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>{" "}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Navbarre;
