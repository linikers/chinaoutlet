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
        height: 520,
        margin: "30px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
          maxHeight: 320,
          // maxWidth: 220,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <p>{product.name}</p>
        <p>R$ {product.price},00</p>
      </CardContent>
        <Button
          sx={{ fontSize: "14px", margin: "12px", bottom: 0}}
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={handleProductClick}
        >
       Adicionar ao carrinho
        </Button>
    </Card>
  );
};
