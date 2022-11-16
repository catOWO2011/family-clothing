import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/Anya.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  LogoContainer,
  NavigationContainer,
  NavigationLink,
  NavLinks,
} from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { selectCartIsOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectCartIsOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavigationLink to="shop">SHOP</NavigationLink>
          {currentUser ? (
            <NavigationLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavigationLink>
          ) : (
            <NavigationLink to="/auth">SIGN IN</NavigationLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
