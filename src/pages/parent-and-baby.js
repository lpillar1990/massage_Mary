import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import babyFeet from "../assets/images/baby_feet.jpg";
import babyArms from "../assets/images/baby_arms_cross.jpg";
import babyFace from "../assets/images/baby_face.jpg";
import babyFeetHearts from "../assets/images/baby_feet_hearts.jpg";
function footmassage() {
  return (
    <Layout>
      <Helmet
        title="Mary Lynch | Ayurvedic Foot Massage"
        meta={[
          { name: "description", content: "Massage therapy Lagos" },
          {
            name: "keywords",
            content: "Foot massage, Algarve, Lagos",
          },
        ]}
      ></Helmet>
      <div id="main">
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <img src={babyFeet} alt="treatment" />
            </div>
            <div className="col-sm-12 text-center">
              <h3 className="py-5">
                <u>A Holistic approach for health &amp; wellbeing for parent &amp; baby.</u>
              </h3>
              <br />
              <p>
                Baby Massage &amp; Baby Yoga have wonderful benefits for both parent and baby.
              </p>
              <br />
              <p>
                Healthy habits learned early in life become healthy habits later in life.
              </p>
              <br />
            </div>
            <div className="col-sm-12">
              <img src={babyArms} alt="treatment" />
            </div>
            <div className="col-sm-12">
              <p className="pb-2 pt-4">
              Research has shown massaged babies were more alert and active, they gained more weight and had improved temperament.  Massage and yoga can improve growth and development and can give useful tools for parents to use for common ailments such as bad sleeping habits, constipation, trapped wind, colic and many more. 
              </p><p className="py-2">Baby Massage & Yoga can trigger the release of oxytocin, our ‘love hormone’ in both baby and parent.  
              </p><p className="py-2">Studies have shown benefits for postnatal depression, improving relationship and bonding for mother and baby.
              </p><p className="py-2">There are increased feelings of competence, role acceptance and attachment for fathers.  

              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-sm-12">
              <h3 className="py-5">Baby Massage</h3>
              <p className="py-2">
                Think of baby massage as a warm gentle communication between parent and baby using Swedish Massage, Reflexology and gentle stretches.  It helps baby develop feelings of being loved, respected and secure. 
              </p>
              <p className="py-2">
              Studies have shown infants that were massaged cried less, slept better and had lower levels of stress hormones.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-sm-4 mt-1">
              <div style={{border: "solid gray 1px", borderRadius: "10px", padding: "5px 20px"}}>
                <p className="pb-2">
                  Group: 5 session course: <br/> €65 (max 8 adults per class)
                </p>
                <p className="pb-2">
                  Bond deeply with your baby in a supportive group environment
                </p>
                <div className="text-center mt-4">
                  <button>
                    <Link style={{ color: "white" }} to="/contact">
                      Book Now
                    </Link>
                  </button>
                </div>
              </div>
              <div style={{border: "solid gray 1px", borderRadius: "10px", marginTop: "10px", padding: "5px 20px"}}>
                <p className="py-2">
                  1 to 1: 	Single session: €30
                  <br/>4 session course: €100
                </p>
                <p className="">
                  Tailored sessions to meet the needs of the individual parent & baby
                </p>
                <div className="text-center mt-4">
                  <button>
                    <Link style={{ color: "white" }} to="/contact">
                      Book Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-8 my-auto">
              <img src={babyFace} alt="treatment" />
            </div>
          </div>
          <div className="text-center">
            <p className="py-2">
              <b>
                Massage age range guidelines
              </b>
            </p>
            <p className="">
              From birth to 7 months or pre-crawling
            </p>
            <p className="">
              Group classes: 	6 weeks to 7 months or pre-crawling
            </p>
            <p className="">
              1 to 1: 	from birth to pre-crawling 
            </p>
          </div>
          <div className="row py-5">
            <div className="col-sm-12">
              <h3 className="py-5">Baby Yoga</h3>
              <p className="py-2">
              Babies are natural yogis.  Baby yoga uses gentle stretches and yoga inspired movements for parents to do with their baby. It incorporates over-clothes massage, breathing techniques, songs, rhymes and sensory play. A session delivers holistic support to babies overall development and wellbeing. 
              </p>
            </div>
            <div className="col-sm-8">
              <img src={babyFeetHearts} alt="treatment" />
            </div>
            <div className="col-sm-4 my-auto">
              <div style={{border: "solid gray 1px", borderRadius: "10px", marginTop: "10px", padding: "5px 20px"}}>
                <p className="py-2">
                Group: 5 session course: <br/> €60 (max 8 adults per class)
                </p>
                <div className="text-center mt-4">
                  <button>
                    <Link style={{ color: "white" }} to="/contact">
                      Book Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="py-2">
              <b>
                Yoga age range guidelines
              </b>
            </p>
            <p className="">
              From 6/8 weeks to 1 year or pre-walking 
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default footmassage;
