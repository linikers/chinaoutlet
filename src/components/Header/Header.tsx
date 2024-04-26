import { useState } from "react";
import { Cart } from "../Cart"
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { userActionTypes } from "../../redux/user/types";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((state: RootState) => state.user )

  const dispatch = useDispatch()

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

console.log( {currentUser})

  const handleLoginClick = () => {
    dispatch({
      type: userActionTypes.login,
      payload: { name: "Jorge", pass: "1234"}
    })
  }
  return (
    <Styles.Container>
      <Styles.Logo>China Outlet</Styles.Logo>
      <Styles.Buttons>
        <div onClick={handleLoginClick}>Login</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
