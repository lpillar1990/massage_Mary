import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import MeetTheTeam from "../components/MeetTheTeam";
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
              content: "Massage, Algarve, Lagos",
            },
          ]}
        ></Helmet>

        <div id="main">
          <div className="row home_about">
            <div className="container mobile"></div>
          </div>

          <MeetTheTeam
            mary1={this.props.data.anastasia.childImageSharp.fluid}
          />
        </div>
      </Layout>
    );
  }
}

export default AboutUs;

export const query = graphql`
  query {
    anastasia: file(relativePath: { eq: "flowers.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
