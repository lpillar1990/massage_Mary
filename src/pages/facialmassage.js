import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import banner from "../assets/images/sean-o-KMn4VEeEPR8-unsplash.jpg";
import { Link } from "gatsby";
import Img from "gatsby-image";

function facialmassage() {
  return (
    <Layout>
      <Helmet
        title="Mary Lynch | Ayurvedic Facial Massage"
        meta={[
          { name: "description", content: "Massage therapy Lagos" },
          {
            name: "keywords",
            content: "Massage, Massage Lagos, Massage Lagos Therapy"
          }
        ]}
      ></Helmet>
      <Banner img={banner} title="Mary Lynch Massage Therapist" />
    </Layout>
  );
}

export default facialmassage;
