import React from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logo1_new.png";
import facebook from "../assets/images/facebook.png";
import insta from "../assets/images/insta.png";
import whatsapp from "../assets/images/whatsappp.png";
import messenger from "../assets/images/messenger.png";

const Footer = () => (
  <footer id="footer">
    <div className="row inner pb-5">
      <div className="container footer_container">
        <div className="col-md-3 footer_item text-left">
          <h5>Mary Lynch Massage Therapist</h5>
          <p className="mt-3">
            Location:
            <br /> Burgau, Lagos, Algarve, Portugal
          </p>
          <div className="contact_links mt-3">
            <a href="tel:+351 911 096 630 " className="pb-4">
              <h6>+351 911 096 630 </h6>
            </a>
            <br />
            <a href="mailto:marylynchmassage@outlook.com" className="mt-5 pt-5">
              {" "}
              <h6>marylynchmassage@outlook.com</h6>
            </a>
          </div>
        </div>
        <div className="col-md-6 footer_item">
          {/* <h5>Subscribe to our newsletter</h5>
          <form className="form-inline mt-2">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <button type="submit">Subscribe</button>
          </form>
          <p>
            In accordance with our GDPR obligations we seek your consent to
            receive our (funny, clever, witty) newsletters. You may withdraw
            your consent at any time in the future. You can view our privacy
            policy <Link to="/privacy-policy"> here.</Link>
          </p>*/}
          {/* <ul className="copyright text-center mt-5">
            <li>&copy; Mary Lynch Massage 2020</li>
          </ul> */}
        </div>
        <div className="col-md-3 footer_item ">
          <ul className="container icons mt-2">
            <li>
              <a
                href="https://www.facebook.com/MassageAlgarveWest/"
                target="__blank"
              >
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/m.lynch.massage/?hl=en"
                target="__blank"
              >
                <img src={insta} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/00351911096630" target="__blank">
                <img src={whatsapp} alt="" />
              </a>
            </li>
            <li>
              <a href="http://m.me/MassageAlgarveWest" target="_blank">
                <img src={messenger} alt="" />
              </a>
            </li>
          </ul>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" width="140px" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
