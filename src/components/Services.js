import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Services = ({ privateLesson, offIce, coreography }) => {
  return (
    <Fragment>
      <div id="services">
        {/* <h2 className="black mb-5">Services</h2> */}
        <div className="row">
          <div className="container services__container">
            <div className="col-sm-4">
              <div className="service">
                <Img fluid={privateLesson} loading="lazy" />
                {/* <h3 className="my-3">About me</h3> */}
                {/* <p>
                After beginning my massage journey studying Swedish Massage in London, I then continued my training qualifying in Deep Tissue and Ayurvedic Massage...
                </p> */}
              </div>
            </div>

            <div className="col-sm-4">
              <div className="service">
                <Img fluid={offIce} loading="lazy" />
                <h3 className="text-center mt-3">About me</h3>
                <p>
                After beginning my massage journey studying Swedish Massage in London, I then continued my training qualifying in Deep Tissue and Ayurvedic Massage.
                </p>
                <p>
                My true love and passion for helping people through massage began at home in Ireland with my work for a non-profit organisation, providing therapies for vulnerable adults and children.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <Img fluid={coreography} loading="lazy" />
                {/* <h3 className="mt-3">Coreography</h3> */}
                <p>
                  {/* A classical dance background combined with many years of
                  competitive and show skating has given us a wide experience of
                  choreography. We can incorporate many different styles on to
                  the ice. We have worked with Cindy Mundow and received master
                  classes from some of the worlds leading choreographers
                  including Misha Ge and Giuseppe Arena. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button>
          <Link to="/about-us">More information about me..</Link>
        </button>
      </div>
    </Fragment>
  )
}

export default Services
