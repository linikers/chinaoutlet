import { Container, Grid } from "@mui/material";
import  { products, IProduct } from "../../data/products";
// Components
import { ProductItem } from "../ProductItem";



export const Products = () => {
  return (
    <Container
      sx={{
        display: 'flex',
      }}
    >
      <Grid 
        spacing={2}
      >
        {products.map((product: IProduct) => (
          <ProductItem product={product} />
        ))}
      </Grid>
    </Container>
  );
};