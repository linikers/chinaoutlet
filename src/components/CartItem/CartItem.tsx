/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AddCircleOutline,
  RemoveCircleOutlineOutlined,
} from "@material-ui/icons";

import { IProduct } from "../../data/products";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {decraseItemToCart, increaseItemToCart, removeProductToCart } from "../../redux/cart/actions";
import { RemoveButton } from ".";

export interface ICartItem extends IProduct {
  quantity: number | 0;
}
interface ICartItemProps {
  product: ICartItem
}



export const CartItem = ( product: ICartItemProps ) => {
  console.log(product)
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
  dispatch(removeProductToCart(product));
  };

  const handleIncreaseClick = () => {
    if(product.quantity > 0) {
      dispatch(increaseItemToCart(product))
    }
  };

  const handleDecreaseClick = () => {

    dispatch(decraseItemToCart(product))
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "14px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url('${product.imageUrl}')`,
          height: "250px",
          width: "170px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "block",
          borderRadius: "10px",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            flex: 1,
            maxWidth: "70%",
            
          }}
        >
            <Typography variant="body1" fontWeight={400} marginBottom="5px">
              {product.name}
            </Typography>
            <Typography variant="body1" fontWeight="500">
              R${product.price}
            </Typography>        
          <IconButton
          onClick={handleIncreaseClick}
          >
              <AddCircleOutline />
            </IconButton>
            <Typography variant="body1">{product.quantity}</Typography>
            <IconButton
            onClick={handleRemoveClick}
            >
              <RemoveButton />
            </IconButton>
            <IconButton
            onClick={handleDecreaseClick}
            >
              <RemoveCircleOutlineOutlined />
            </IconButton>
    
        </Box>
      </Box>
    </Container>
  );
};
