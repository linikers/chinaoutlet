import React from "react";
import products from "../../data/products";

// Components
import { ProductItem } from "../ProductItem";

// Styles
import * as Styles from "./styles";

const Products = () => {
  return (
    <Styles.Container>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </Styles.Container>
  );
};

export default Products;
