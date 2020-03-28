import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const AboutMe = ({ massage, relax, therapy }) => {
  return (
    <Fragment>
      <div id="AboutMe">
        {/* <h2 className="black mb-5">Services</h2> */}
        <div className="row">
          <div className="container services__container">
            <div className="col-sm-4">
              <div className="AboutMe">
                <Img fluid={massage} loading="lazy" />

              </div>
            </div>

            <div className="col-sm-4">
              <div className="AboutMe">
                <Img fluid={relax} loading="lazy" />

                <h3 className="text-center black mt-3">Little bit about me</h3>
                <br />
                <p>
                After beginning my massage journey studying Swedish Massage in London, I then continued my training qualifying in Deep Tissue and Ayurvedic Massage.
                My true love and passion for helping people through massage began at home in Ireland with my work for a non-profit organisation, providing therapies for vulnerable adults and children.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="AboutMe">
                <Img fluid={therapy} loading="lazy" />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button>
          <Link to="/about">More about my journey</Link>
        </button>
      </div>
    </Fragment>
  )
}

export default AboutMe
