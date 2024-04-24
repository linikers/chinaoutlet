
import React from "react";
import * as Styles from "./styles";

interface Icart {
    isVisible:boolean;
    setIsVisible: (isVisible: boolean) => void
}
export const Cart: React.FC<Icart> = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

