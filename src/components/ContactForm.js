import React from "react";
import iceBackground from "../assets/images/rsz_zoltan-tasi-unsplash1.jpg";
import whatsapp from "../assets/images/whatsapp2.png";

const BannerContact = () => (
  <section id="banner" className="major">
    <div className="inner">
      <div className="row">
        <div className="container contact_section">
          <img src={iceBackground} alt="iceBackground" />
          <div className="contact_section_info pt-5">
            <div className="col-sm-6 text-left contact_section_left">
              <h5>
                Location:
                <br /> Burgau, Algarve, Portugal
              </h5>
              <br />
              <div className="contact_links text-white mb-5">
                <a href="tel:0044 7412 519150">
                  <h4>Mary: 0044 7412 519150</h4>
                </a>
                <a href="mailto:marylynchmassage@outlook.com" className="mt-5 pt-5">
                  {" "}
                  <h4>marylynchmassage@outlook.com</h4>
                </a>
              </div>
              <div className="container mb-5">
                <p>*Working hours from 9am to 8pm*</p>

                <p>Can travel further for larger groups.</p>
              </div>
            </div>
            <div className="col-sm-6 text-right contact_section_right ">
              <form className="form" name="contact" method="post" data-netlify="true" data-netify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group mb-2 text-left">
                  <label htmlFor="">Bookings / Enquiries</label>
                  <input type="text" className="form-control" placeholder="Name" name="name" />
                </div>
                <div className="form-group mb-2">
                  <input type="email" className="form-control" placeholder="Email" name="email" />
                </div>
                <div className="form-group mb-2">
                  <textarea className="mt-3" placeholder="Message" name="message" />
                  <button type="submit" className="mt-3">
                    Send
                  </button>
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