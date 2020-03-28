import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Img from "gatsby-image";
import ServicesList from "../components/ServicesList";
import banner from "../assets/images/sean-o-KMn4VEeEPR8-unsplash.jpg";

class services extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Mary Lynch | Services"
          meta={[
            { name: "description", content: "Massage therapy Lagos" },
            {
              name: "keywords",
              content: "Massage, Massage Lagos, Massage Lagos Therapy"
            }
          ]}
        ></Helmet>
        <Banner img={banner} title="Mary Lynch Massage Therapist" />
        <div className="imageContainer">
          <ServicesList
            swedish={this.props.data.serviceImage1.childImageSharp.fluid}
            tissue={this.props.data.serviceImage2.childImageSharp.fluid}
            facial={this.props.data.serviceImage3.childImageSharp.fluid}
            foot={this.props.data.serviceImage4.childImageSharp.fluid}
          />
        </div>
      </Layout>
    );
  }
}
export default services;

export const query = graphql`
  query {
    image2: file(relativePath: { eq: "sean-o-KMn4VEeEPR8-unsplash.jpg" }) {
      ...indexImage
    }
    serviceImage1: file(relativePath: { eq: "jared-rice-unsplash.jpg" }) {
      ...serviceImage
    }
    serviceImage2: file(relativePath: { eq: "christin-hume-unsplash.jpg" }) {
      ...serviceImage
    }
    serviceImage3: file(relativePath: { eq: "emiliano-vittoriosi-unsplash.jpg" }) {
      ...serviceImage
    }
    serviceImage4: file(relativePath: { eq: "deniz-altindas-t1XLQvDqt_4-unsplash.jpg" }) {
      ...serviceImage
    }
  }
`;
