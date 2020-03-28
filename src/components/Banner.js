import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const Banner = ({ img, title }) => (
  <section id="blog_banner" className="blog_major">
    <img src={img} alt="" />
    {/* <Img fluid={img} loading="lazy" style={{ position: "static" }} /> */}
    <div className="inner">
      <header>
        <h1>{title}</h1>
        <br />
        <br />
        <div className="text-center my-4">
          <button>
            <Link style={{ color: "white" }} to="/contact">
              Contact Now
            </Link>
          </button>
        </div>
      </header>
    </div>
  </section>
);

export default Banner;
