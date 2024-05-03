/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AddCircleOutline,
  RemoveCircleOutlineOutlined,
} from "@material-ui/icons";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  decraseItemToCart,
  increaseItemToCart,
  removeProductToCart,
} from "../../redux/cart/actions";
import { RemoveButton } from ".";
import { CartState, ICartItem, ICartItemProps } from "../../redux/store";

export const CartItem: React.FC<ICartItemProps> = ({ product }) => {
  const cartState = useSelector((state: { cart: CartState }) => state.cart);
  const productQuantity =
    cartState?.products.find((item: ICartItem) => item.id === product.id)
      ?.quantity || 0;

  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductToCart(product));
  };

  const handleIncreaseClick = () => {
    console.log("id:", product.id);
    console.log("quantity:", productQuantity);
    if (product.quantity > 0) {
      dispatch(increaseItemToCart(product.id));
    }
  };

  const handleDecreaseClick = () => {
    console.log("id:", product.id);
    console.log("quantity:", productQuantity);
    dispatch(decraseItemToCart(product.id));
  };
  console.log(productQuantity);
  return (
    <Container
      key={product.id}
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "14px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
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
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.8))",
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            marginLeft: "20px",
            flex: 1,
            maxWidth: "70%",
            
          }}
        >
          <Typography variant="body1" fontWeight={400} marginBottom="2px" sx={{ fontWeight: "bold" }}>
            {product.name}
          </Typography>

          {/* <Typography variant="body1" fontWeight="500">
            R${product.price}
          </Typography> */}

          <Box sx={{
            display: "flex",
            alignItems: "center",
            bottom: 0,
          }}>
          <IconButton onClick={handleIncreaseClick}>
            <AddCircleOutline />
          </IconButton>
          <IconButton onClick={handleRemoveClick}>
            <RemoveButton />
          </IconButton>
          <IconButton onClick={handleDecreaseClick}>
            <RemoveCircleOutlineOutlined />
          </IconButton>
          <Typography variant="body1"
          sx={{
            fontWeight: "bold"
          }}>{productQuantity}</Typography>
          </Box>

        </Box>
      </Box>
    </Container>
  );
};
