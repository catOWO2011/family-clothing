import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Anya.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <NavLink className="logo-container" to="/">
          <Logo className="logo" />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
