import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import BannerContact from '../components/BannerContact'

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Mary Lynch | Contact"
          meta={[
            { name: 'description', content: 'Massage therapy Lagos' },
            {
              name: 'keywords',
              content:
                'Massage, Massage Lagos, Massage Lagos Therapy',
            },
          ]}
        ></Helmet>

        <BannerContact />
      </Layout>
    )
  }
}

export default Contact
