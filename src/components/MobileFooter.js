import React from "react";
import { Link } from "gatsby";
import whatsapp from "../assets/images/whatsapp2.png";
import logo from "../assets/images/logo1_new.png";

const MobileFooter = () => (
  <footer id="mobile_footer">
    <div className="row inner pb-5">
      <div className="container mobile_footer">
        <div className="col-md-3 footer_item">
          <h4>Follow us</h4>
          <ul className="container icons mt-2">
            <li>
              <a href="https://www.facebook.com/MassageAlgarveWest/" target="__blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/m.lynch.massage/?hl=en" target="__blank" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/447412519150" target="__blank" className="icon fa-whatsapp">
                <span className="label">Whatsapp</span>
              </a>
            </li>
          </ul>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" width="140px" />
          </Link>
          <br />
          <br />
          <a href="tel:0044 7412 519150" className="pb-4">
            <h4>Contact</h4>
            <h6>Mary: 0044 7412 519150</h6>
          </a>
          <a href="mailto:marylynchmassage@outlook.com" className="mt-5 pt-5">
            {" "}
            <h6>marylynchmassage@outlook.com</h6>
          </a>
          <a href="https://wa.me/447412519150" target="__blank">
            <img src={whatsapp} alt="whatsapp" width="200px" />
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
