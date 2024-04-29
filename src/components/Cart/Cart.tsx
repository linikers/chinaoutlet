
import { rootState } from "../../redux/root-reducer";
import { CartItem, ICartItem } from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { Backdrop, Box, Modal, Paper, Typography } from "@mui/material";

interface ICart extends ICartItem{
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
export const Cart: React.FC<ICart> = ({ isVisible, setIsVisible }: ICart) => {
  const handleEscapeAreaClick = () => setIsVisible(false);


  
  const products = useSelector((state: rootState) => state.cart.products as ICartItem[]);
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
          {products.map((product: ICartItem, index: number) => (
           <CartItem key={index} product={ product } quantity={product.quantity} />
          ))}
      </Paper>
      </Box>
    </Modal>
  );
};
