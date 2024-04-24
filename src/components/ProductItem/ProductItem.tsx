import React from "react"
import { BsCartPlus } from "react-icons/bs";

// Components
import { CustomButton } from "../CustomBtn";

// Styles
import * as Styles from "./styles";

// Utilities

export const ProductItem = ({ product }) => {
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};
