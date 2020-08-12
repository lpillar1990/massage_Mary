import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import treatment from "../assets/images/backMassage.jpg";

function deeptissuemassage() {
  return (
    <Layout>
      <Helmet
        title="Mary Lynch | Deep Tissue Massage"
        meta={[
          { name: "description", content: "Massage therapy Lagos" },
          {
            name: "keywords",
            content: "Deep Tissue Massage, Algarve, Lagos",
          },
        ]}
      ></Helmet>

      <div id="main">
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col">
              <img src={treatment} alt="treatment" />
            </div>
            <div className="col-sm-8">
              <h2>Deep Tissue Massage</h2>
              <br />
              <p>
                Releases chronic muscle tension, focusing on the deepest layers
                of muscle tissue, tendons and fascia. A more targeted massage
                that reduces blood pressure, stress hormone levels and heart
                rate.
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

export default deeptissuemassage;
