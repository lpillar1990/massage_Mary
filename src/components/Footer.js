import React from "react";
import { Link } from "gatsby";

import logo from "../assets/images/logo1_new.png";

const Footer = () => (
  <footer id="footer">
    <div className="row inner pb-5">
      <div className="container footer_container">
        <div className="col-md-3 footer_item text-left">
          <h5>Mary Lynch Massage Therapist</h5>
          <p className="mt-2">
            111 XXX XXXXXX XX <br />
            Belfast <br />
            BT16 1XT
          </p>
          <div className="contact_links mt-3">
            {/* <a href="tel:07938701165" className="pb-4">
            </a> */}
            <h6>Mary: 07938776701165</h6>
            {/* <a href="mailto:MaryLynchMassage@gmail.com" className="mt-5 pt-5">
            </a> */}
            <h6>MaryLynchMassage@gmail.com</h6>
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
          <h5>Follow us</h5>
          <ul className="container icons mt-2">
            <li>
              <a
                // href="https://www.facebook.com"
                target="__blank"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                // href="https://www.instagram.com"
                target="__blank"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" width="100px" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
