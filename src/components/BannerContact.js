import React from 'react'
import iceBackground from '../assets/images/rsz_zoltan-tasi-unsplash1.jpg'

const BannerContact = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="my-5 pt-5"></header>
      <div className="row mt-5">
        <div className="container contact_section">
          <img src={iceBackground} alt="iceBackground" />
          <div className="contact_section_info">
            <div className="col-sm-6 text-left contact_section_left">
              <h2>Belfast</h2>
              {/* <a href="https://goo.gl/maps/YZqKE63QnMbEYT648" target="__blank"> */}
                <p>
                  111 Old Dundonald Rd <br />
                  Belfast <br />
                  BT16 1XT
                </p>
              {/* </a> */}
              <div className="contact_links mb-5">
                <h4>
                  Edward: <a href="tel:07938701165">07938701165</a>
                </h4>
                <h4>
                  Anastasiia: <a href="tel:07592852558">07592852558</a>
                </h4>
                <h5>
                  <a
                    href="mailto:podiumiceskating1@gmail.com"
                    className="my-5 green"
                  >
                    podiumiceskating1@gmail.com
                  </a>
                </h5>
              </div>
            </div>
            <div className="col-sm-6 text-right contact_section_right ">
              <form
                className="form"
                name="contact"
                method="post"
                data-netlify="true"
                data-netify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group mb-2 text-left">
                  <label htmlFor="">Name</label>
                  <input
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default BannerContact
