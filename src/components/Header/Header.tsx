import { useMemo, useState } from "react";
import { Cart } from "../Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { userActionTypes } from "../../redux/user/types";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((state: RootState) => {
    // console.log(state.user.currentUser);
    return state.user;
  });

  const { products } = useSelector((state: RootState) => {
    console.log(state.cart.products);
    console.log(state.user.currentUser);
    return state.cart;
  });

  const productsCount = useMemo(() => {
    return products.reduce(
      (acumulator, current) => acumulator + (current.quantity ?? 0),
      0
    );
  }, [products]);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch({
      type: userActionTypes.login,
      payload: { name: "Jorge", pass: "1234" },
    });
  };

  const handleLogoutClick = () => {
    dispatch({
      type: userActionTypes.logout,
    });
  };
  console.log({ currentUser });
  return (
    <>
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,

          backgroundColor: "#ffc000",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            China Outlet
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            {currentUser ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogoutClick}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            )}
            <IconButton
              color="inherit"
              aria-label="shop cart"
              onClick={handleCartClick}
            >
              <ShoppingCartIcon />({productsCount})
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </>
  );
}
