import { ShoppingCart } from '@material-ui/icons';

// Components
import { CustomButton } from "../CustomBtn";

// Styles
import * as Styles from "./styles";
import { IProduct } from '../../data/products';



export const ProductItem = ({ product }: {product: IProduct}) => {
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<ShoppingCart />}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};
