
import { rootState } from "../../redux/root-reducer";
import { CartItem } from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, Box, Modal, Paper, Typography } from "@mui/material";
import { ICartItem } from "../../redux/store";
import { Button } from "@mui/base";
import { useState } from "react";
import { DialogCheckout } from "../Checkout/Checkout";
import { ActionCloseModal, ActionOpenModal} from "../../redux/dialog/actions";

interface ICart extends ICartItem{
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
export const Cart: React.FC<ICart> = ({ isVisible, setIsVisible }: ICart) => {
  const [openDialog] = useState(false)
  const dispatch = useDispatch()
  const handleEscapeAreaClick = () => setIsVisible(false);

  const handleCloseDialog = () => {
    dispatch(ActionCloseModal())
  }
  const handleOpenDialog = () => {
    dispatch(ActionOpenModal())
  }
  const products = useSelector((state: rootState) => state.cart.products as ICartItem[]);
  
  const total = products.reduce((acc, product) => {
    const price = product.price ?? 0
    return acc + (price * product.quantity);
  }, 0)
  return (
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
          {
          products.filter((product) => product.quantity > 0)
          .map((product: ICartItem, index: number) => (
           <CartItem key={index} product={ product } quantity={product.quantity} />
          ))}
        <Typography variant="h6">Total: R${total.toFixed(2)}</Typography>
      <Button
      onClick={handleOpenDialog}
      >
        Finalizar compra
      </Button>
      {openDialog &&  <DialogCheckout 
        openDialog={openDialog} 
        handleCloseDialog={handleCloseDialog} 
        />} 
      </Paper>
      </Box>

    </Modal>

  );
};
