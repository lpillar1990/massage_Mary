import React, { Fragment } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const AboutMe = ({ massage, relax, therapy }) => {
  return (
    <Fragment>
      <div id="AboutMe">
        {/* <h2 className="black mb-5">Services</h2> */}
        <div className="row">
          <div className="container services__container">
            <div className="col-sm-4">
              <div className="AboutMe">
                <Img fluid={massage} loading="lazy" />
              </div>
            </div>

            <div className="col-sm-4">
              <div className="AboutMe">
                <Img fluid={relax} loading="lazy" className="mobile" />

                <h3 className="text-center black mt-3">Little bit about me</h3>
                <br />
                <p>
                  I have moved from my home in Ireland to the beautiful and
                  sunny Algarve, where I am able to live out my passion, working
                  as an alternative therapist, helping to heal and revitalize,
                  while spending my spare time practicing yoga, swimming in the
                  sea & being at one with nature.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="AboutMe">
                <Img fluid={therapy} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button>
          <Link to="/about">More about my journey</Link>
        </button>
      </div>
      <div className="text-center">
        <br />
        <p>
          *Please note only professional treatments for health and well-being
          are provided by this service.
        </p>
      </div>
    </Fragment>
  );
};

export default AboutMe;
