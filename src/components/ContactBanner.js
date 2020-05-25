import React from "react";
import { Link } from "gatsby";

const ContactBanner = ({ img, title }) => (
  <section id="blog_banner" className="blog_major">
    <img src={img} alt="" />

    <div className="inner">
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  </section>
);

export default ContactBanner;
