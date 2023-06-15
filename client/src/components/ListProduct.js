import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduit, editproduit } from "../JS/productslice";

const ListProduct = () => {
  const [ping, setping] = useState(false);
  const users = useSelector((state) => state.user?.users);
  const dispatch = useDispatch();
  const [cat, setcat] = useState("product");

  const prods = useSelector((store) => store.product?.productList);
  console.log("hahom", prods);
  const [showedit, setshowedit] = useState(false);
  const [editprod, seteditprod] = useState({
    name: prods?.name,
    image: prods?.image,
    prix: prods?.prix,
    catégori: prods?.catégori,
    gender: prods?.gender,
    description: prods?.description,
    details: prods?.details,
  });
  return (
    <div
      className="classleft"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        marginTop: "45px",
      }}
    >
      <div
        className="boxleft"
        style={{
          marginBottom: "30px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "250px",
          margin: "20px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <button
          onClick={() => setcat("commande")}
          style={{
            height: "100%",
            backgroundColor: "black",
            color: "white",
            width: "250px",
            height: "50px",
            padding: "10px",
            display: "flex",
            margin: "20px",
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "large",
            border: "none",
          }}
        >
          Profil
        </button>
        <button
          onClick={() => setcat("product")}
          style={{
            height: "100%",
            backgroundColor: "black",
            color: "white",
            width: "250px",
            height: "50px",
            padding: "10px",
            display: "flex",
            margin: "20px",
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "large",
            border: "none",
          }}
        >
          Products
        </button>
        <button
          onClick={() => setcat("user")}
          style={{
            height: "100%",
            backgroundColor: "black",
            color: "white",
            width: "250px",
            height: "50px",
            padding: "10px",
            display: "flex",
            margin: "20px",
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "large",
            border: "none",
          }}
        >
          users
        </button>
        <button
          onClick={() => setcat("commande")}
          style={{
            height: "100%",
            backgroundColor: "black",
            color: "white",
            width: "250px",
            height: "50px",
            padding: "10px",
            display: "flex",
            margin: "20px",
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "large",
            border: "none",
          }}
        >
          commandes
        </button>
      </div>

      {cat == "product" ? (
        <div
          className="prod"
          style={{ width: "750px", marginTop: "-350px", marginLeft: "350px" }}
        >
          {/* {prods?.map((el)=>(
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <h1>{el?.name}</h1>
        <img src={el?.image} alt='image'  style={{width:'350px'}}/>
        <h6>{el?.prix}</h6>
        </div>
        
      ))} */}

          <table
          // style={{
          //   width: "750px",
          //   backgroundColor: "green",
          //   margin: "40px",
          //   marginLeft: "450px",
          //   border: "1px solid black",
          // }}
          >
            <tr
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontWeight: " bold",
                fontSize: "17px",
                padding: "50px",
                color: "black",
              }}
            >
              <th
                style={{
                  fontStyle: "italic",
                  fontFamily: "cursive",
                  fontWeight: " bold",
                  fontSize: "17px",
                  padding: "50px",
                  color: "black",
                }}
              >
                Image{" "}
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            {prods?.map((el) => (
              <tr>
                <td>
                  <img
                    src={el?.image}
                    alt="image"
                    style={{
                      width: "130px",
                      height: "100px",
                      marginTop: "20px",
                      marginLeft: "30px",
                      marginRight: "30px",
                      padding: "15px",
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder={el?.name}
                    style={{ width: "275px" }}
                    onChange={(e) =>
                      seteditprod({ ...editprod, name: e.target.value })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    placeholder={el?.prix}
                    style={{ width: "275px" }}
                    onChange={(e) =>
                      seteditprod({ ...editprod, prix: e.target.value })
                    }
                  />
                </td>
                <td>
                  <button
                    onClick={() => (
                      setping(!ping),
                      dispatch(editproduit({ id: el?._id, edited: editprod }))
                    )}
                    style={{
                      border: "none",
                      padding: "10px",
                      color: "#ff00a5",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => (
                      setping(!ping), dispatch(deleteproduit(el?._id))
                    )}
                    style={{
                      border: "none",
                      padding: "10px",
                      color: "#ff00a5",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-archive-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      ) : cat == "user" ? (
        <table
          style={{
            width: "850px",

            marginLeft: "300px",
            marginTop: "-380px",
            border: "1px solid black",
          }}
        >
          <tr
            style={{
              fontStyle: "italic",
              fontFamily: "cursive",
              fontWeight: " bold",
              fontSize: "17px",
              padding: "50px",
              color: "black",
            }}
          >
            <th
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontWeight: " bold",
                fontSize: "17px",
                padding: "50px",
                color: "black",
              }}
            >
              Image{" "}
            </th>
            <th>Name </th>
            <th>LastName</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {users?.map((el) => (
            <tr>
              <td>
                <img
                  src={el?.image}
                  alt="image"
                  style={{
                    width: "130px",
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "30px",
                    marginRight: "30px",
                    padding: "15px",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder={el?.name}
                  style={{ width: "275px" }}
                  onChange={(e) =>
                    seteditprod({ ...editprod, name: e.target.value })
                  }
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  placeholder={el?.LastName}
                  style={{ width: "275px" }}
                  onChange={(e) =>
                    seteditprod({ ...editprod, prix: e.target.value })
                  }
                />
              </td>
              <td>
                <button
                  onClick={() => (
                    setping(!ping),
                    dispatch(editproduit({ id: el?._id, edited: editprod }))
                  )}
                  style={{ border: "none", padding: "10px", color: "#ff00a5" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => (
                    setping(!ping), dispatch(deleteproduit(el?._id))
                  )}
                  style={{ border: "none", padding: "10px", color: "#ff00a5" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-archive-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </table>
      ) : cat == "commande" ? (
        <table
          style={{
            width: "850px",

            marginLeft: "300px",
            marginTop: "-380px",
            border: "1px solid black",
          }}
        >
          <tr
            style={{
              fontStyle: "italic",
              fontFamily: "cursive",
              fontWeight: " bold",
              fontSize: "17px",
              padding: "50px",
              color: "black",
            }}
          >
            <th
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontWeight: " bold",
                fontSize: "17px",
                padding: "50px",
                color: "black",
              }}
            >
              Image{" "}
            </th>
            <th> User Name</th>
            <th>Name Product</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
          {prods?.map((el) => (
            <tr>
              <td>
                <img
                  src={el?.image}
                  alt="image"
                  style={{
                    width: "130px",
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "30px",
                    marginRight: "30px",
                    padding: "15px",
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder={el?.name}
                  style={{ width: "275px" }}
                  onChange={(e) =>
                    seteditprod({ ...editprod, name: e.target.value })
                  }
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  placeholder={el?.prix}
                  style={{ width: "275px" }}
                  onChange={(e) =>
                    seteditprod({ ...editprod, prix: e.target.value })
                  }
                />
              </td>
              <td>
                <button
                  onClick={() => (
                    setping(!ping),
                    dispatch(editproduit({ id: el?._id, edited: editprod }))
                  )}
                  style={{ border: "none", padding: "10px", color: "#ff00a5" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => (
                    setping(!ping), dispatch(deleteproduit(el?._id))
                  )}
                  style={{ border: "none", padding: "10px", color: "#ff00a5" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-archive-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </table>
      ) : null}
    </div>
  );
};

export default ListProduct;
