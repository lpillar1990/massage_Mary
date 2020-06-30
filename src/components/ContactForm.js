import React from "react";
import iceBackground from "../assets/images/rsz_zoltan-tasi-unsplash1.jpg";
import whatsapp from "../assets/images/whatsapp2.png";

const BannerContact = () => (
  <section id="banner" className="major">
    <div className="inner">
      <div className="row">
        <div className="container contact_section">
          <img
            className="contact_form_background"
            src={iceBackground}
            alt="iceBackground"
          />
          <div className="contact_section_info pt-5">
            <div className="col-sm-6 text-left contact_section_left">
              <h5>
                Location:
                <br /> Burgau, Lagos, Algarve, Portugal
              </h5>
              <br />
              <div className="contact_links text-white mb-5">
                <a href="tel:+351 911 096 630 ">
                  <h4>+351 911 096 630 </h4>
                </a>
                <a
                  href="mailto:marylynchmassage@outlook.com"
                  className="mt-5 pt-5"
                >
                  {" "}
                  <h6 style={{ color: "white" }}>
                    marylynchmassage@outlook.com
                  </h6>
                </a>
              </div>
              <div className="container mb-5">
                <p>*Working hours from 9am to 8pm*</p>

                <p>Can travel further for larger groups.</p>
              </div>
            </div>
            <div className="col-sm-6 text-right contact_section_right ">
              <form
                className="form"
                name="contact"
                method="post"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group mb-2 text-left">
                  <label htmlFor="bookings">Bookings / Enquiries</label>
                  <input
                    id="bookings"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="form-group mb-2">
                  <textarea
                    className="mt-3"
                    placeholder="Message"
                    name="message"
                  />
                  <button type="submit" className="mt-3">
                    Send
                  </button>
                  <br />
                  <div className="mx-auto text-center">
                    <a href="https://wa.me/00351911096630" target="__blank">
                      <img src={whatsapp} alt="whatsapp" width="200px" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BannerContact;
