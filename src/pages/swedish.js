import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import banner from "../assets/images/sean-o-KMn4VEeEPR8-unsplash.jpg";
import { Link } from "gatsby";
import Img from "gatsby-image";

function swedish() {
  return (
    <Layout>
      <Helmet
        title="Mary Lynch | Swedish Massage"
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
              <h2>Relaxing Swedish Massage</h2>
              <br />
              <p>
                Relax the entire body, this treatment promotes harmony and balance in the whole body using soft, kneading strokes, focusing on the top
                layer of the muscle. A detoxifying massage that improves circulation and flexibility while easing stress and tension.
              </p>
              <br />
              <div className="text-left">
                <p>45 mins €45 &nbsp; 60 mins €55</p>
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

export default swedish;

export const query = graphql`
  query {
    swedishImage1: file(relativePath: { eq: "jared-rice-unsplash.jpg" }) {
      ...serviceImage
    }
  }
`;
