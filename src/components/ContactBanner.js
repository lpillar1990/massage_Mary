import React from "react";
import { Link } from "gatsby";

const ContactBanner = ({ img, title }) => (
  <section id="blog_banner" className="blog_major">
    <img src={img} alt="contact banner" />
  </section>
);

export default ContactBanner;
