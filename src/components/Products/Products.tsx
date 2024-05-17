import { Box, Grid} from "@mui/material";
import { products, IProduct } from "../../data/products";
import { Link } from "react-router-dom";
import { ProductItem } from "../ProductItem";
// Components

export const Products = () => {
  
  return (
    <Box flexGrow={1} height="100%">
      <Grid container spacing={2}>
        {products.map((product: IProduct, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link to={`/produtos/${product.id}`}>
            <ProductItem product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
