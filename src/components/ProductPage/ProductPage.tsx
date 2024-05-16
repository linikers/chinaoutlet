import { Button, Card, CardContent, CardMedia } from "@mui/material";
import { ShoppingCart } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
import { IProduct, products } from "../../data/products";
import { useParams } from "react-router-dom";


export const ProductPage = () => {

const { productId } = useParams<{ productId: string}>()
const product = products.find((p: IProduct) => p.id === productId)
const dispatch = useDispatch()

const handleProductClick = () => {
  if(product) {
    dispatch(addProductToCart(product))
  }
}

if(!product) {
  return<div>Producto não encontrado!!</div>
}
  return (
    <div>
      <Card
        sx={{
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
            height: 400,
            maxWidth: 600,
            margin: "auto",
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>{product.name}</p>
          <p style={{ fontSize: "1.2rem", textAlign: "center"}}>R$ {product.price},00</p>
        </CardContent>
        <Button
          sx={{ fontSize: "14px", margin: "auto", marginBottom: "20px"}}
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={handleProductClick}
        >
          Adicionar ao Carrinho
        </Button>
      </Card>
    </div>
  );
};

