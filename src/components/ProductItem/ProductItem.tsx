import { ShoppingCart } from "@material-ui/icons";
import { IProduct } from "../../data/products";
import { Button, Card, CardContent, CardMedia } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

export const ProductItem = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    console.log(product);
    dispatch(addProductToCart(product));
  };
  return (
    <Card
      key={product.id}
      sx={{
        width: 260,
        height: 460,
        margin: "30px",
      }}
    >
      <CardMedia
        component="img"
        alt={product.name}
        image={product.imageUrl}
        sx={{
          objectFit: "cover",
          // padding: "80%"
          // width: 200,
          // height: 120,
          // maxWidth: 220,
        }}
      />
      <CardContent sx={{ height: "100%" }}>
        <p>{product.name}</p>
        <p>R$ {product.price},00</p>
        <Button
          sx={{ fontSize: "14px"}}
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={handleProductClick}
        >
       Adicionar ao carrinho
        </Button>
      </CardContent>
    </Card>
  );
};
