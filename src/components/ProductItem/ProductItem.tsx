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
        flexDirection: "column",
        justifyContent: "space-between",
        width: 360,
        height: 580,
      }}
    >
      <CardMedia
        component="img"
        alt={product.name}
        image={product.imageUrl}
        sx={{
          objectFit: "cover",

          height: 200,
          maxWidth: 220,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <p style={{ fontSize: "1.2rem"}}>{product.name}</p>
        <p style={{fontWeight: "bold"}}>R$ {product.price},00</p>
      </CardContent>
        <Button
          sx={{ fontSize: "14px", margin: "12px", bottom: 0}}
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={handleProductClick}
        >
       Comprar
        </Button>
    </Card>
  );
};
