import { Button, Card, CardContent, CardMedia, Container } from "@mui/material";
import { ShoppingCart } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
import { IProduct, products } from "../../data/products";
import { useParams } from "react-router-dom";


export const ProductPage = () => {

console.log("teste pagina do produto")


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
    <div 
      style={{ position: "absolute", top: '8%', left: 0, backgroundColor: "rgba(255, 255, 255, 0.4)"}}>
      <Container 
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "flex-start", 
          minHeight: "100vh", 
          width: "100vw", 
        }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "auto",
            maxWidth: 480,
            height: 580,
            borderRadius: 22,
          }}
        >
          <CardMedia
            component="img"
            alt={product.name}
            image={product.imageUrl}
            sx={{
              objectFit: "cover",
              margin: "auto",
            }}
          />
          <CardContent sx={{ display: "flex", flexDirection: "column", height: "80%" }}>
            <p style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}>{product.name}</p>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold", textAlign: "center"}}>R$ {product.price},00</p>
            <p style={{ fontSize: "1.2rem", textAlign: "left", margin: "20px" }}> {product.description}</p>
          </CardContent>
          <Button
            sx={{ fontSize: "14px", margin: "auto", marginBottom: "20px"}}
            variant="contained"
            startIcon={<ShoppingCart />}
            onClick={handleProductClick}
          >
            Comprar
          </Button>
        </Card>
      </Container>
    </div>
  );
};

