import React from "react";
import { Link } from "gatsby";

const Banner = ({ img, title }) => (
  <section id="blog_banner" className="blog_major">
    <img src={img} alt="" />

    <div className="inner">
      <header>
        <h1>{title}</h1>

        <div className="banner_button my-4">
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
