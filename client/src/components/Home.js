import React from "react";
import pic from "../assets/bg5.jpg";
import pic2 from "../assets/bg3.jpg";
import pic3 from "../assets/bg1.jpg";
import pic4 from "../assets/bg2.jpg";
import Product from "../components/Product";
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "react-router";
import { useState } from "react";
export default function Home({ updateItem, itemCount }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const History = useHistory();
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={pic2} alt="First slide" />
          <Carousel.Caption>
            <h3>Nike</h3>
            <p>Fit For Your Foot</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={pic3} alt="Second slide" />

          <Carousel.Caption>
            <h3>Converse All Star</h3>
            <p>High Quality Jumpers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={pic4} alt="Third slide" />

          <Carousel.Caption>
            <h3>Converse All Star</h3>
            <p>Best Quality Sneakers</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div classNameName="hero">
        <div className="card bg-dark text-white border-0">
          <img src={pic} className="card-img" alt="..." />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0 text-black">
                Winter Collection
              </h5>
              <p className="card-text lead fs-2 text-black">
                Check out our brand new KICKS
              </p>
              <button
                className="btn btn-dark btn-lg"
                aria-current="page"
                onClick={() => History.push("/Product")}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
