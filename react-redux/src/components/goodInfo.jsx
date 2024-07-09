import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function GoodInfo() {
  let location = useLocation();

  return (
    <div style={{ textAlign: `center` }}>
      <h3>Name: {location.state.product_name}</h3>
      <h3>Description: {location.state.product_description}</h3>
      <h3>Price: {location.state.product_price}</h3>
    </div>
  );
}

export default GoodInfo;
