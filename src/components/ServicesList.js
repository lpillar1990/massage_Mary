import React, { Fragment } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const ServicesList = ({ swedish }) => {
  return (
    <Fragment>
      <div id="service" className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="service">
              <Img fluid={swedish} loading="lazy" />
              <br />
              <br />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="service">
              <h3 className="text-left mt-3">Relaxing Swedish Massage</h3>
              <p>
                Releases chronic muscle tension, focusing on the deepest layers
                of muscle tissue, tendons and fascia. A more targeted massage
                that reduces blood pressure, stress hormone levels and heart
                rate.
              </p>
              <p>45 mins €45 &nbsp; 60 mins €55</p>
            </div>
          </div>

          <div className="mx-auto my-4">
            <br />
            <br />
            <br />
            <button>
              <Link to="/contact">Book now</Link>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesList;
