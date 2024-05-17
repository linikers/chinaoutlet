
import { rootState } from "../../redux/root-reducer";
import { CartItem } from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {  Box, Modal, Paper, Typography } from "@mui/material";
import { ICartItem } from "../../redux/store";
import { Button } from "@mui/base";
import { DialogCheckout } from "../Checkout/Checkout";
import { setCloseDialog, setOpenDialog } from "../../redux/dialog/dialogReducer";

interface ICart extends ICartItem{
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
export const Cart: React.FC<ICart> = ({ isVisible, setIsVisible }: ICart) => {
  const dispatch = useDispatch()

  const isOpenDialog = useSelector((state: rootState) => state.openDialog.isOpenDialog)

  const handleCloseDialog = () => {
    console.log("fecha dialog")
    dispatch(setCloseDialog())

  }
  const handleOpenDialog = () => {
    console.log("finaliza")
    dispatch(setOpenDialog())
  }
  const products = useSelector((state: rootState) => state.cart.products as ICartItem[]);

  const total = products.reduce((acc, product) => {
    const price = product.price ?? 0
    return acc + (price * product.quantity);
  }, 0)
  return (
    <Modal
      open={isVisible}
      onClose={
        ()=> setIsVisible(false)
      }
      aria-labelledby="cart-modal-title"
      aria-describedby="cart-modal-description"
      sx={{ display: "flex", justifyContent: "flex-end"}}
    >
      <Box>
        <Paper
          sx={{
            width: {xs: "85%", sm: "75%"}, bgcolor: "background.paper", p: 4, overflowY: "auto", maxHeight: "80vh"
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
            style={{backgroundColor: "#007bff", border: "none", outline:"none"}}
            onClick={handleOpenDialog}
          >
            Finalizar compra
          </Button>
        {isOpenDialog && <DialogCheckout 
          open={true}
          handleCloseDialog={handleCloseDialog} 
          />}
        </Paper>
      </Box>

    </Modal>

  );
};
