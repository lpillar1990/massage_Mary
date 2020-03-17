import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import BannerContact from '../components/BannerContact'

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Podium Ice Skate | Contact"
          meta={[
            { name: 'description', content: 'Ice Skating Coaching Belfast' },
            {
              name: 'keywords',
              content:
                'Ice Skating Belfast, Ice Skating Northern Ireland, Ice Skating Coaching Belfast',
            },
          ]}
        ></Helmet>

        <BannerContact />
      </Layout>
    )
  }
}

export default Contact
