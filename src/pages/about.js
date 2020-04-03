import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import MeetTheTeam from "../components/MeetTheTeam";
import banner from "../assets/images/valentino-funghi-unsplash.jpg";
class AboutUs extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Mary Lynch | About Me"
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
          <div className="row home_about">
            <div className="container mobile"></div>
          </div>

          <MeetTheTeam mary1={this.props.data.anastasia.childImageSharp.fluid} />
        </div>
      </Layout>
    );
  }
}

export default AboutUs;

export const teamImage = graphql`
  fragment teamImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const aboutImage = graphql`
  fragment aboutImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    anastasia: file(relativePath: { eq: "noah-buscher-unsplash.jpg" }) {
      ...teamImage
    }
  }
`;
