import React, { useState } from "react";
import "./App.css";
function Car() {
  const [car, setCar] = useState({
    brand: "Tata",
    model: "bmw",
    year: "2029",
    color: "red",
  });
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
    // setCar({color:"blue"})
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a <span>{car.color}</span> {car.model} from {car.year}.
      </p>
      <button class="btn" type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
}
export default Car;
