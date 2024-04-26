import { ShoppingCart } from '@material-ui/icons';
import { IProduct } from '../../data/products';
import { Button, Card, CardContent, CardMedia } from '@mui/material';



export const ProductItem = ({ product }: {product: IProduct}) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 260,
      }}
    >
      <CardMedia
        component="img"
        alt={product.name}
        image={product.imageUrl}
      />
      <CardContent>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <Button variant='contained' startIcon={<ShoppingCart />}>
            Adicionar ao carrinho
          </Button>
      </CardContent>
    </Card>
  );
};
