import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import MeetTheTeam from '../components/MeetTheTeam'
import BannerContact from '../components/BannerContact'
import Img from 'gatsby-image'
class AboutUs extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Mary Lynch | About Us"
          meta={[
            { name: 'description', content: 'Massage therapy Lagos' },
            {
              name: 'keywords',
              content:
                'Massage, Massage Lagos, Massage Lagos Therapy',
            },
          ]}
        ></Helmet>

        <Banner
          img={this.props.data.image2.childImageSharp.fluid}
          title="Mary Lynch Massage Therapist"
        />

        <div id="main">
          <div className="row home_about">
            <div className="container mobile">
              {/* <h3 className="text-center mb-5" style={{ color: 'black' }}>
                We are Podium Ice Skate
              </h3> */}
              {/* <img src={outsideTogether} alt="" /> */}
            </div>
          </div>

          <MeetTheTeam
            eddie={this.props.data.eddieAlton.childImageSharp.fluid}
            anastasia={this.props.data.anastasia.childImageSharp.fluid}
          />
          <div className="container mb-5">
            <div className="text-center mb-5">
              {/* <Img
                fluid={this.props.data.image1.childImageSharp.fluid}
                loading="lazy"
              /> */}
            </div>
          </div>
          {/* <BannerContact /> */}
        </div>
      </Layout>
    )
  }
}

export default AboutUs

export const teamImage = graphql`
  fragment teamImage on File {
    childImageSharp {
      fluid(maxWidth: 250, maxHeight: 290) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const aboutImage = graphql`
  fragment aboutImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    anastasia: file(relativePath: { eq: "jairo-alzate-1CsfTx0DuLs-unsplash.jpg" }) {
      ...teamImage
    }

    eddieAlton: file(relativePath: { eq: "eddieAlton.png" }) {
      ...teamImage
    }
    image1: file(relativePath: { eq: "bannerTogegther.jpg" }) {
      ...aboutImage
    }

    image2: file(relativePath: { eq: "photo-1559946597-072cc7af3373.jpg" }) {
      ...aboutImage
    }
  }
`
