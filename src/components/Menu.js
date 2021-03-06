import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about-us">
            About us
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/contact">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
    <div className="container" id="menu_social">
      <div className="row d-flex justify-content-around">
        <a
          href="https://www.facebook.com/"
          target="__blank"
          className="icon fa-facebook"
        >
          <span className="label">Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/"
          target="__blank"
          className="icon fa-instagram"
        >
          <span className="label">Instagram</span>
        </a>
      </div>
    </div>
    <div
      className="close"
      onClick={props.onToggleMenu}
      onKeyDown={props.onToggleMenu}
    >
      Close
    </div>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
