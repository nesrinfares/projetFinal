import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardProduct({ el }) {
  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/detailler/${el._id}`}
      >
        <Card
          el={el}
          style={{ margin: "30px", backgroundColor: "white", border: "none" }}
        >
          <Card.Img
            variant="top"
            src={el?.image}
            style={{
              width: " 250px",
              height: "250px",
              borderRadius: "5px 5px 5px 5px",
            }}
          />
          <Card.Body style={{ width: "250px", height: "50px" }}>
            <Card.Text>
              <h5
                style={{
                  marginTop: "11px",
                  fontFamily: "cursive",
                  fontWeight: "bold",
                }}
              >
                {el?.name}
              </h5>
              <p>{el?.prix} TND</p>
              <div
                className="etoile"
                style={{ Color: "#ffd700", display: "block" }}
              ></div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CardProduct;
