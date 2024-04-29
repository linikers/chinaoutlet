import React from "react";
import { rootState } from "../../redux/root-reducer";
import { CartItem } from "../CartItem/CartItem";
import { IProduct } from "../../data/products";
import { useSelector } from "react-redux";
import { Backdrop, Box, Modal, Paper, Typography } from "@mui/material";

interface Icart {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
export const Cart: React.FC<Icart> = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const products = useSelector((state: rootState) => state.cart.products);
  return (
    // <Styles.CartContainer isVisible={isVisible}>
    //   <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
    //   <Styles.CartContent>
    //     <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
    //     {products.map((product: IProduct) => (
    //       <CartItem product={product} />
    //     ))}
    //   </Styles.CartContent>
    // </Styles.CartContainer>
    <Modal
      open={isVisible}
      onClose={()=> setIsVisible(false)}
      aria-labelledby="cart-modal-title"
      aria-describedby="cart-modal-description"
      sx={{ display: "flex", justifyContent: "flex-end"}}
    >
      <Box>

      <Backdrop open={isVisible} onClick={handleEscapeAreaClick} />
      <Paper
        sx={{
          width: {xs: "85%", sm: "75%"}, bgcolor: "background.paper", p: 4
        }}
      >
        <Typography variant="h6" id="cart-modal-title">
          Seu Carrinho
        </Typography>
          {products.map((product: IProduct) => (
           <CartItem product={product} />
          ))}
      </Paper>
      </Box>
    </Modal>
  );
};
