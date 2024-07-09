import { NavLink } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <>
      <header>
        <NavLink className="headerNavLink" activeclassname=".active" to={`/`}>
          Main
        </NavLink>
        <NavLink
          className="headerNavLink"
          activeclassname=".active"
          to={`/my-bag`}
        >
          MyBag
        </NavLink>
      </header>
    </>
  );
}

export default Header;
