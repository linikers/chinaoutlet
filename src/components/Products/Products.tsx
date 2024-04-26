import { Container, Grid } from "@mui/material";
import products from "../../data/products";

// Components
import { ProductItem } from "../ProductItem";

// Styles


const Products = () => {
  return (
    <Container>
      <Grid>
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
