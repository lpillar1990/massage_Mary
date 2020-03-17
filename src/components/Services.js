import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Services = ({ privateLesson, offIce, coreography }) => {
  return (
    <Fragment>
      <div id="services">
        <h2 className="black mb-5">Services</h2>
        <div className="row">
          <div className="container services__container">
            <div className="col-sm-4">
              <div className="service">
                <Img fluid={privateLesson} loading="lazy" />
                <h3 className="my-3">Private Lesson</h3>
                <p>
                  A private lesson with a qualified coach is a great way to get
                  one to one information specific to your skating needs. An
                  average lesson cost £10 and will take 15min. Please note the
                  price of a lesson does not include admission to the ice rink.
                  We operate with a 24hour cancellation policy.
                </p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="service">
                <Img fluid={offIce} loading="lazy" />
                <h3 className="mt-3">Off Ice Training</h3>
                <p>
                  Skating requires so many different skills. Which can often
                  become daunting. Many people are surprised how much work is
                  required off the ice. We teach our skaters how to warm up/cool
                  down safely, stretching, strength training and jump related
                  exercises all focussing on timing coordination and technique.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <Img fluid={coreography} loading="lazy" />
                <h3 className="mt-3">Coreography</h3>
                <p>
                  A classical dance background combined with many years of
                  competitive and show skating has given us a wide experience of
                  choreography. We can incorporate many different styles on to
                  the ice. We have worked with Cindy Mundow and received master
                  classes from some of the worlds leading choreographers
                  including Misha Ge and Giuseppe Arena.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <button>
          <Link to="/contact">Contact us for more information</Link>
        </button>
      </div>
    </Fragment>
  )
}

export default Services
