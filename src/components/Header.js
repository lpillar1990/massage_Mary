import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../assets/images/logo.jpg";

const Header = props => (
  <header id="header" className="alt" style={{ marginTop: "20px" }}>
    {/* <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link> */}
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href=" javascript:;" style={{ textDecoration: 0 }}>
        <i style={{ color: "white", fontSize: "40px" }} className="icon  fa-bars"></i>
      </a>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Header;
