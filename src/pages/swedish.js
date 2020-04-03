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
            content: "Massage, Massage Lagos, Massage Lagos Therapy"
          }
        ]}
      ></Helmet>
      <Banner img={banner} title="Mary Lynch Massage Therapist" />
      {/* <div className="col-sm-3">
        <div className="service">
          <br />
          <br />
        </div>
      </div> */}
      {/* <div className="col-sm-4">
        <div className="service">
          <h3 className="text-left mt-3">Relaxing Swedish Massage</h3>
          <p>
            Releases chronic muscle tension, focusing on the deepest layers of muscle tissue, tendons and fascia. A more targeted massage that reduces
            blood pressure, stress hormone levels and heart rate.
          </p>
          <p>45 mins €45 &nbsp; 60 mins €55</p>
        </div>
      </div> */}
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
