import React from "react";

const Banner = ({ img, title }) => (
  <section id="blog_banner" className="blog_major">
    <img src={img} alt="banner" />
  </section>
);

export default Banner;
