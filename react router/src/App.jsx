import React from "react";
import ProductsList from "./ProductsList";
import { Routes, Route } from "react-router";
import Product from "./Product";
function App() {
  return (
    <div>
      <Routes>
      
      <Route path="/" element={<ProductsList />}/>     
      <Route path="/product/:id" element={< Product/>}/>      

      </Routes>
    </div>
  );
}

export default App;
