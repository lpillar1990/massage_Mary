import React from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logo1_new.png";

const MobileFooter = () => (
  <footer id="mobile_footer">
    <div className="row inner pb-5">
      <div className="container mobile_footer">
        <div className="col-md-3 footer_item">
          <ul className="container icons mt-2">
            <li>
              <a
                href="https://www.facebook.com/MassageAlgarveWest/"
                target="__blank"
                className="icon fa-facebook fa-2x"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/m.lynch.massage/?hl=en"
                target="__blank"
                className="icon fa-instagram fa-2x"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/00351911096630"
                target="__blank"
                className="icon fa-whatsapp fa-2x"
              >
                <span className="label">Whatsapp</span>
              </a>
            </li>
          </ul>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" width="140px" />
          </Link>
          <br />
          <br />
          <a href="tel:+351 911 096 630" className="pb-4">
            <h4>Contact</h4>
            <h6>Mary: +351 911 096 630 </h6>
          </a>
          <a href="mailto:marylynchmassage@outlook.com" className="mt-5 pt-5">
            {" "}
            <h6>marylynchmassage@outlook.com</h6>
          </a>
          <br />
          <br />
          <h4>Location</h4>
          <p>Burgau, Lagos, Algarve, Portugal</p>
        </div>
      </div>
    </div>
  </footer>
);

export default MobileFooter;
