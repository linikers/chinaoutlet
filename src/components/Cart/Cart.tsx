import React from "react";
import * as Styles from "./styles";
import { rootState } from "../../redux/root-reducer";
import { CartItem } from "../CartItem/CartItem";
import { IProduct } from "../../data/products";
import { useSelector } from "react-redux";

interface Icart {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
export const Cart: React.FC<Icart> = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const products = useSelector((state: rootState) => state.cart.products);
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((product: IProduct) => (
          <CartItem product={product} />
        ))}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};
