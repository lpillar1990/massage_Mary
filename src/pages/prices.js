import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Img from "gatsby-image";
import banner from "../assets/images/sean-o-KMn4VEeEPR8-unsplash.jpg";

class prices extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Mary Lynch | Prices"
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
            <div className="row my-4 prices">
              <div className="col-sm-8">
                <p>
                  <h4>Swedish Massage</h4>A relaxing massage to ease tension and relieve stress, focusing on the top layers of the muscle.
                </p>
              </div>
              <div className="col-sm-4 text-right">
                <p>45 mins €43 60 mins €53</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-sm-8">
                <h4>Deep Tissue Massage</h4>
                <p>A deeper more targeting massage, loosening tired muscles and reducing fatigue.</p>
              </div>
              <div className="col-sm-4 text-right">
                <p>45 mins €45 60 mins €55</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-sm-8">
                <h4>Full Body Massage</h4>
                <p>
                  An ultra rejuvenating massage using Swedish and Deep Tissue techniques, this treatmemt is tailored to suit your bodies requirements.
                </p>
              </div>
              <div className="col-sm-4 text-right">
                <p>90 mins €70</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-sm-8">
                <h4>Facial Massage - Ayurvedic</h4>
                <p>The natural facelift - improving skin tone, relaxing facial muscles to make you look and feel refreshed and younger.</p>
              </div>
              <div className="col-sm-4 text-right">
                <p>45 mins €38 60 mins €48</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-sm-8">
                <h4>Foot Massage - Ayurvedic</h4>
                <p>Relaxing the muscles around your feet and lower leg this massage re-energizes for another day of walking.</p>
              </div>
              <div className="col-sm-4 text-right">
                <p>45mins €36</p>
              </div>
            </div>
            <p className="text-center"> All massages can be tailored to your needs from a targeted massage to a combination of any of the above.</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default prices;

export const query = graphql`
  query {
    image2: file(relativePath: { eq: "sean-o-KMn4VEeEPR8-unsplash.jpg" }) {
      ...indexImage
    }
  }
`;
