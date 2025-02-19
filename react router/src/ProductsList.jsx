import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div>
      {products.map((prod) => {
        return (
          <Link to={"/product/" + prod.id}>
            <h1>{prod.title}</h1>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsList;
