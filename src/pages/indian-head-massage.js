import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import treatment from "../assets/images/indian.jpg";
function indianheadmassage() {
  return (
    <Layout>
      <Helmet
        title="Mary Lynch | Indian Head Massage"
        meta={[
          { name: "description", content: "Massage therapy Lagos" },
          {
            name: "keywords",
            content: "Indian head massage, Algarve, Lagos",
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
              <h2>Indian Head Massage</h2>
              <br />
              <p>
                Encourage deep relaxation with a head, neck, shoulder and face
                massage. It helps relieve stress and promotes relaxation, which
                maintains balance in the body & mind. It renews energy levels
                and aids in the relief of migraines and tension.
              </p>
              <br />
              <div className="text-left">
                <p>45 mins €35</p>
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

export default indianheadmassage;
