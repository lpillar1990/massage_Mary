import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const ServicesList = ({ swedish, tissue, facial, foot }) => {
  return (
    <Fragment>
      <div id="service" className="container">
        <h2 className="black my-5 text-center">Services</h2>
        <div className="row">
            <div className="col-sm-3">
              <div className="service">
                <Img fluid={swedish} loading="lazy" />
                <h3 className="my-3">Relaxing Swedish Massage</h3>
                <p>
                Relax the entire body, this  treatment promotes harmony and balance in the whole body using soft, kneading strokes, focusing on the top layer of the muscle.  A detoxifying massage that improves circulation and flexibility while easing stress and tension.
                </p>

              </div>
            </div>

            <div className="col-sm-3">
              <div className="service">
                <Img fluid={tissue} loading="lazy" />
                <h3 className="text-left mt-3">Deep Tissue Massage</h3>
                <p>
                Releases chronic muscle tension, focusing on the deepest layers of muscle tissue, tendons and fascia. A more targeted massage that reduces blood pressure, stress hormone levels and heart rate.
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="service">
                <Img fluid={facial} loading="lazy" />
                <h3 className="mt-3">Facial Massage Ayurvedic</h3>
                <p>
                Ayurvedic 100% Natural Facial Massage.
                <br />
                Known as the natural facelift, this ancient Indian therapy uses fragrant oils, applying pressure along specific energy points to relax muscles, release toxins and improve circulation and skin tone, making you look and feel younger.
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="service">
                <Img fluid={foot} loading="lazy" />
                <h3 className="mt-3">Foot Massage Ayurvedic</h3>
                <p>
                Using fragrant oils to boost circulation, this massage stimulates the muscles around your feet, lessens stiffness and even reduces pain in the ankles or the heels. Using pressure along specific energy points to relax the entire body.
                </p>
              </div>
            </div>
            <div className="mx-auto my-4">
              <button>
                <Link to="/prices">Prices</Link>
              </button>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default ServicesList
