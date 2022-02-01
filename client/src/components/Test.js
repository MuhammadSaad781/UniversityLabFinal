import React from "react";
import { useState, useEffect, useCallback } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Test({ itemCount, setItemCount }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const url = "http://fakestoreapi.com/products";

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
    return <h1>Loading...</h1>;
  }
  if (!loading) {
    return (
      <>
        <div>
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon />{" "}
          </Badge>
        </div>
        <div className="row mt-5 mb-5">
          {products.map((item) => {
            return (
              <div class="card" style={{ width: "18rem" }}>
                <img src={item.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.description.substring(0, 50)}</p>
                  <button
                    class="btn btn-primary"
                    onClick={() => setItemCount(itemCount + 1)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
