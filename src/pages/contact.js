import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import banner from "../assets/images/sean-o-KMn4VEeEPR8-unsplash.jpg";
import ContactBanner from "../components/ContactBanner";

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Mary Lynch | Contact Us"
          meta={[
            { name: "description", content: "Massage therapy Lagos" },
            {
              name: "keywords",
              content: "Massage, Massage Lagos, Massage Lagos Therapy",
            },
          ]}
        ></Helmet>
        <ContactBanner img={banner} title="Mary Lynch Massage Therapist" />
        <ContactForm />
      </Layout>
    );
  }
}

export default Contact;
