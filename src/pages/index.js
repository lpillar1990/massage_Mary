import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import banner from "../assets/images/sean-o-KMn4VEeEPR8-unsplash.jpg";

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Mary Lynch Massage Therapist"
          meta={[
            { name: "description", content: "Massage therapy Lagos" },
            {
              name: "keywords",
              content: "Massage, Massage Lagos, Massage Lagos Therapy"
            }
          ]}
        ></Helmet>

        <Banner img={banner} title="Mary Lynch Massage Therapist" />

        <div id="main">
          <div className="container my-5">
            <div className="row home_about">
              <p className="mt-3">
                Providing a professional massage service to you in your home or holiday accommodation or at a studio in Lagos or Burgau.
                <br />
              </p>
              <p className="mt-3">
                Whether your body needs attention after a day of walking, surfing or yoga or you want to relax and rejuvenate your face and body after
                a day in the sun, I will have a treatment that suits your needs.
              </p>
              <p className="mt-3">
                The mobile service covers Lagos, Burgau and the surrounding areas. Can travel further for larger groups and a small fee will be added
                for travel depending on distance.
              </p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <AboutMe
            massage={this.props.data.serviceImage1.childImageSharp.fluid}
            relax={this.props.data.serviceImage2.childImageSharp.fluid}
            therapy={this.props.data.serviceImage3.childImageSharp.fluid}
          />
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;

export const serviceImage = graphql`
  fragment serviceImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const indexImage = graphql`
  fragment indexImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
export const query = graphql`
  query {
    image1: file(relativePath: { eq: "sean-o-KMn4VEeEPR8-unsplash.jpg" }) {
      ...indexImage
    }
    serviceImage1: file(relativePath: { eq: "julia-solonina-unsplash.jpg" }) {
      ...serviceImage
    }
    serviceImage2: file(relativePath: { eq: "christin-hume-unsplash.jpg" }) {
      ...serviceImage
    }
    serviceImage3: file(relativePath: { eq: "saffu-unsplash.jpg" }) {
      ...serviceImage
    }
  }
`;
