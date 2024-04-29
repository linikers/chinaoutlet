import { Box, Grid } from "@mui/material";
import { products, IProduct } from "../../data/products";
// Components
import { ProductItem } from "../ProductItem";

export const Products = () => {
  return (
    <Box flexGrow={1} height="100%">
      <Grid container spacing={2}>
        {products.map((product: IProduct) => (
          <Grid xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
