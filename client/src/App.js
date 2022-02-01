import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Test from "./components/Test";
import { useState } from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Database from "./components/Database";
import UpdateDatabase from "./components/UpdateDatabase";
import Checkout from "./components/Checkout";
import AddressForm from "./components/AddressForm";

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/Test">
            <Test />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Database">
            <Database />
          </Route>
          <Route path="/userdata/:id">
            <UpdateDatabase />
          </Route>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/AddressForm">
            <AddressForm />
          </Route>
          <Route
            exact
            path="/Product"
            render={(props) => (
              <Product
                setItemCount={(a) => setItemCount(a)}
                itemCount={itemCount}
                cart={cart}
                setCart={(b) => setCart(b)}
              />
            )}
          />
          <Route path="/Cart">
            <Cart cart={cart} />{" "}
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
