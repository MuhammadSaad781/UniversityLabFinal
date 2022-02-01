import React from "react";
import { Link } from "react-router-dom";
function Cart({ cart }) {
  const handleDelete = () => {
    window.location.reload();
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold fs-4" href="#">
              SID KICKS
            </a>
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
                  <h3 className="fw-bold fs-3">Your Cart</h3>
                </li>
              </ul>
            </div>
            <Link to="/AddressForm">
              <button className="btn btn-dark">Place Order</button>
            </Link>
          </div>
        </nav>
      </div>
      <div className="row mt-3">
        {cart.map((cartitem) => {
          return (
            <div className="col-md-3 mb-4">
              <div
                class="card h-100 text-center p-4"
                style={{ width: "18rem" }}
              >
                <img src={cartitem.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{cartitem.title.substring(0, 12)}</h5>
                  <p class="card-text">{cartitem.price}$</p>
                </div>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    handleDelete();
                  }}
                >
                  Delete Item
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
