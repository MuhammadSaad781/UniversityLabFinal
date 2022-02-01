import React from "react";
import { useState, useEffect, useCallback } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import img from "../assets/bg2.jpg";
import Footer from "./Footer";
export default function Test({ itemCount, setItemCount, cart, setCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  console.log(cart);
  const url = "http://fakestoreapi.com/products";
  const History = useHistory();
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  if (loading) {
    return (
      <>
        <h1>Loading Products...</h1>
      </>
    );
  }
  if (!loading) {
    return (
      <>
        <div>
          <div>
            <nav
              className="navbar navbar-expand-lg py-3 shadow-sm"
              style={{ backgroundColor: "white" }}
            >
              <div className="container">
                <Link to="/LangingPage">
                  <button className="btn btn-white fw-bold fs-4">
                    SID KICKS
                  </button>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <button
                        className="btn btn-white fw-bold fs-4"
                        aria-current="page"
                        onClick={() => History.push("/Product")}
                      >
                        Products
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    className="btn btn-light"
                    onClick={() => History.push("/Cart")}
                  >
                    <Badge color="secondary" badgeContent={itemCount}>
                      <ShoppingCartIcon />{" "}
                    </Badge>
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div>
            <img src={img} className="card-img" />
          </div>
          <div className="row mt-3">
            {products.map((item) => {
              return (
                <div className="col-md-3 mb-4">
                  <div class="card h-100 text-center p-4" key={item.id}>
                    <img
                      src={item.image}
                      class="card-img-top"
                      alt="..."
                      height="250px"
                    />
                    <div class="card-body">
                      <h5 class="card-title mb-0">
                        {item.title.substring(0, 12)}
                      </h5>
                      <p class="card-text">{item.price}$</p>
                      <button
                        class="btn btn-dark"
                        onClick={() => {
                          setItemCount(itemCount + 1);
                          const temp = [...cart];
                          temp.push(item);
                          setCart(temp);
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
