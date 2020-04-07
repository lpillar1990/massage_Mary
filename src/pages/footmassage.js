import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import banner from "../assets/images/sean-o-KMn4VEeEPR8-unsplash.jpg";
import Img from "gatsby-image";

function footmassage() {
  return (
    <Layout>
      <Helmet
        title="Mary Lynch | Ayurvedic Foot Massage"
        meta={[
          { name: "description", content: "Massage therapy Lagos" },
          {
            name: "keywords",
            content: "Massage, Massage Lagos, Massage Lagos Therapy",
          },
        ]}
      ></Helmet>
      <Banner img={banner} title="Mary Lynch Massage Therapist" />
      <div id="main">
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <h2>Ayurvedic Foot Massage</h2>
              <br />
              <p>
                Using fragrant oils to boost circulation, this massage stimulates the muscles around your feet, lessens stiffness and even reduces
                pain in the ankles or the heels. Using pressure along specific energy points to relax the entire body.
              </p>
              <br />
              <div className="text-left">
                <p>45 mins €35</p>
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

export default footmassage;
