/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import { Cart } from "../Cart";
import { useDispatch, useSelector } from "react-redux";
import { userActionTypes } from "../../redux/user/types";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ICartItem } from "../../redux/store";
import { rootState } from "../../redux/root-reducer";
import { Link as MuiLink } from "react-router-dom";
import { Person, PersonOutline } from "@material-ui/icons";

export function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((state: rootState) => {
    // console.log(state.user.currentUser);
    return state.user;
  });

  const { products } = useSelector((state: rootState) => {

    return state.cart;
  });

  const productsCount = useMemo(() => {
    return products.reduce(
      (accumulator: number, current: any | ICartItem) =>
        accumulator + (current.quantity ?? 0),
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

  return (
    <Container
      sx={{
        flexGrow: 1,
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        display: "flex",
        justifyContent: "space-between",
        
      }}
    >
      <AppBar sx={{ justifyContent: "space-between" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap>
            <MuiLink 
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
            China Outlet
            </MuiLink>
          </Typography>
          <Box>
            {currentUser ? (
              <IconButton
                color="default"
                sx={{marginTop: "8px"}}
                onClick={handleLogoutClick}
              >
                <PersonOutline />
              </IconButton>
            ) : (
              <IconButton
                color="default"
                sx={{marginTop: "8px"}}
                onClick={handleLoginClick}
              >
                <Person />
              </IconButton>
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
      <Cart
        isVisible={cartIsVisible}
        setIsVisible={setCartIsVisible}
        quantity={productsCount}
        id={""}
      />
    </Container>
  );
}
