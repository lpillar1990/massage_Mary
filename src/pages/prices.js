import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

class prices extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Mary Lynch | Menu"
          meta={[
            { name: "description", content: "Massage therapy Lagos" },
            {
              name: "keywords",
              content: "Full body massage , Algarve, Lagos",
            },
          ]}
        ></Helmet>
        <div id="main">
          <h2 className="text-center my-4">Menu</h2>
          <div className="container my-5">
            <div className="row my-4 prices">
              <div className="col-sm-8">
                <h4>Swedish Massage</h4>
                <p>
                  A relaxing massage to ease tension and relieve stress,
                  focusing on the top layers of the muscle.
                </p>
              </div>
              <div className="col-sm-4 text-right">
                <p>45 mins €45 &nbsp; 60 mins €55</p>
                <Link to="/swedish">
                  <button>View More</button>
                </Link>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-sm-8">
                <h4>Deep Tissue Massage</h4>
                <p>
                  A deeper more targeting massage, loosening tired muscles and
                  reducing fatigue.
                </p>
              </div>
              <div className="col-sm-4 text-right">
                <p>45 mins €45 &nbsp; 60 mins €55</p>
                <Link to="/deep-tissue-massage">
                  <button>View More</button>
                </Link>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-sm-8">
                <h4>Full Body Massage</h4>
                <p>
                  An ultra rejuvenating massage using Swedish and Deep Tissue
                  techniques, this treatment is tailored to suit your bodies
                  requirements.
                </p>
              </div>
              <div className="col-sm-4 text-right">
                <p>60 mins €55 &nbsp; 90 mins €70</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-sm-8">
                <h4>Ayurvedic Face Massage </h4>
                <p>
                  The natural facelift - Improving skin tone, relaxing facial
                  muscles to make you look and feel refreshed and younger.
                </p>
              </div>
              <div className="col-sm-4 text-right">
                <p>45 mins €40 &nbsp; 60 mins €48</p>
                <Link to="/facial-massage">
                  <button>View More</button>
                </Link>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-sm-8">
                <h4>Ayurvedic Foot Massage </h4>
                <p>
                  Relaxing the muscles around your feet and lower leg this
                  massage re-energizes for another day of walking.
                </p>
              </div>
              <div className="col-sm-4 text-right">
                <p>45 mins €35</p>
                <Link to="/foot-massage">
                  <button>View More</button>
                </Link>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-sm-8">
                <h4>Indian Head Massage </h4>
                <p>
                  Encourage deep relaxation with a head, neck, shoulder and face
                  massage. It helps relieve stress and promotes relaxation.
                </p>
              </div>
              <div className="col-sm-4 text-right">
                <p>40 mins €35</p>
                <Link to="/indian-head-massage">
                  <button>View More</button>
                </Link>
              </div>
            </div>

            <p className="text-center">
              All massages can be tailored to your needs from a targeted massage
              to a combination of any of the treatments.
            </p>
          </div>
          <div className="text-center my-5">
            <button>
              <Link style={{ color: "white" }} to="/contact">
                Book Now
              </Link>
            </button>
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
