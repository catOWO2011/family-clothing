import { NavLink, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Anya.svg";

import "./navigation.styles.scss";

const Navigation = () => (
  <>
    <div className="navigation">
      <NavLink className="logo-container" to="/">
        <Logo className="logo" />
      </NavLink>
      <div className="nav-links-container">
        <NavLink className="nav-link" to="/shop">
          SHOP
        </NavLink>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
