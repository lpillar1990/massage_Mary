import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import treatment from "../assets/images/christin-hume-unsplash.jpg";
function facialmassage() {
  return (
    <Layout>
      <Helmet
        title="Mary Lynch | Ayurvedic Face Massage"
        meta={[
          { name: "description", content: "Massage therapy Lagos" },
          {
            name: "keywords",
            content: "Massage, Massage Lagos, Massage Lagos Therapy",
          },
        ]}
      ></Helmet>
      <div id="main">
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col">
              <img src={treatment} />
            </div>
            <div className="col-sm-8">
              <h2>Ayurvedic Face Massage</h2>
              <br />
              <p>
                Known as the natural facelift, this ancient Indian therapy uses fragrant oils, applying pressure along specific energy points to relax
                muscles, release toxins and improve circulation and skin tone, making you look and feel younger.
              </p>
              <br />
              <div className=" text-left">
                <p>45 mins €40 &nbsp; 60 mins €48</p>
                <br />
              </div>
            </div>
          </div>
          <div className="text-center my-4">
            <button>
              <Link style={{ color: "white" }} to="/contact">
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default facialmassage;
