import React from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router";
export default function NavBar({ itemCount }) {
  const History = useHistory();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link to="/">
            <a className="navbar-brand fw-bold fs-4">SID KICKS</a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="btn"
                  aria-current="page"
                  onClick={() => History.push("/Product")}
                >
                  All Products
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  aria-current="page"
                  onClick={() => History.push("/Mens")}
                >
                  Mens
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="btn"
                  aria-current="page"
                  onClick={() => History.push("/Womens")}
                >
                  Womens
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  aria-current="page"
                  onClick={() => History.push("/About")}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  aria-current="page"
                  onClick={() => History.push("/Contact")}
                >
                  Contact
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  aria-current="page"
                  onClick={() => History.push("/Database")}
                >
                  Database
                </button>
              </li>
            </ul>

            <div className="buttons">
              <Link to="/Login">
                <h3 className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1" />
                  Login
                </h3>
              </Link>
              <Link to="/Registration">
                <h3 className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1" />
                  Sign Up
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
