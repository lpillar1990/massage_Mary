import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.png'

const Footer = () => (
  <footer id="footer">
    <div className="row inner pb-5">
      <div className="container footer_container">
        <div className="col-md-3 footer_item text-left">
          <h5>Podium Ice Skating</h5>
          <a href="https://goo.gl/maps/YZqKE63QnMbEYT648" target="__blank">
            <p className="mt-2">
              111 Old Dundonald Rd <br />
              Belfast <br />
              BT16 1XT
            </p>
          </a>
          <div className="contact_links mt-3">
            <a href="tel:07938701165" className="pb-4">
              <h6>Edward: 07938701165</h6>
            </a>
            <a href="tel:07592852558" className="pb-4">
              <h6>Anastasiia: 07592852558</h6>
            </a>
            <a href="mailto:podiumiceskating1@gmail.com" className="mt-5 pt-5">
              <h6>podiumiceskating1@gmail.com</h6>
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
          </p>
          <ul className="copyright text-center mt-5">
            <li>&copy; Podium Ice Skating 2019</li>
          </ul> */}
        </div>
        <div className="col-md-3 footer_item ">
          <h5>Follow us</h5>
          <ul className="container icons mt-2">
            <li>
              <a
                href="https://www.facebook.com/Podiumiceskating/"
                target="__blank"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/podium.ice/"
                target="__blank"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
