import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import banner from "../assets/images/home_banner.jpg";

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
              content: "Massage, Massage Lagos, Massage Lagos Therapy",
            },
          ]}
        ></Helmet>

        <Banner img={banner} title="Mary Lynch Massage Therapist" />

        <div id="main">
          <section className="mx-auto text-center py-5">
            <div className="container my-1">
              <div className="row home_about_white">
                <p className="mt-2">
                  Providing a professional massage service to you in your home
                  or holiday accommodation or at a studio in Lagos or Praia da
                  Luz.
                  <br />
                  <br />
                  The mobile service covers Lagos, Burgau, Sagres and
                  surrounding area.
                </p>
              </div>
            </div>
          </section>
          <section className="home_background py-5">
            <div className="container my-1">
              <div className="row home_about">
                <p className="">
                  Whether your body needs attention after a day of walking,
                  surfing or yoga or you want to relax and rejuvenate your face
                  and body after a day in the sun, I will have a treatment that
                  suits your needs.
                </p>
              </div>
            </div>
          </section>
          <section className="mx-auto text-center py-5">
            Treatments offered:&nbsp;
            <a href="/deeptissuemassage">
              <u>Deep Tissue Massage</u>
            </a>
            ,&nbsp;
            <a href="/swedish">
              <u>Swedish Massage</u>
            </a>
            ,&nbsp;{" "}
            <a href="/facialmassage">
              <u>Ayurvedic Face</u>
            </a>{" "}
            and{" "}
            <a href="/footmassage">
              <u>Ayurvedic Foot Massage</u>
            </a>
            .
          </section>
          <div className="contact_button">
            {" "}
            <button>
              <Link to="/contact">Contact Now</Link>
            </button>
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
    image1: file(relativePath: { eq: "home_banner.jpg" }) {
      ...indexImage
    }
    serviceImage1: file(relativePath: { eq: "yogaPose.jpg" }) {
      ...serviceImage
    }
    serviceImage2: file(relativePath: { eq: "sunsetSurf.jpg" }) {
      ...serviceImage
    }
    serviceImage3: file(relativePath: { eq: "saffu-unsplash.jpg" }) {
      ...serviceImage
    }
  }
`;
