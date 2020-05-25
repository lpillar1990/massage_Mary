import React, { Fragment } from "react";
import Img from "gatsby-image";

const MeetTheTeam = ({ mary1, mary2 }) => {
  return (
    <Fragment>
      <div id="team" className="about_page">
        <h2 className="my-1">About me</h2>
        <div className="row">
          <div className="container d-flex flex-wrap justify-content-between">
            <div className="col-sm-10 about">
              <div className="row">
                <div className="col-sm-6">
                  <Img fluid={mary1} loading="lazy" />
                </div>
                <div className="col-sm-6">
                  <p>
                    After beginning my massage journey studying Swedish Massage in London, I then continued my training qualifying in Deep Tissue and
                    Ayurvedic Massage.
                    <br />
                    <br />
                    My true love and passion for helping people through massage began at home in Ireland with my work for a non-profit organization,
                    providing therapies for vulnerable adults and children. The opportunity for me to help heal clients, emotionally as well as
                    physically, using natural alternative therapy and to be able to see their wellbeing improve over the weeks I treated them, was
                    extremely rewarding.
                    <br />
                    <br />
                    My fondness for travel took me to the French Alps, where I spent a winter season providing therapies for weary skiers and holiday
                    makers. But the attraction of the sun, surf and yoga culture of the Algarve won me over. I am able to use my passion to help
                    others in the most beautiful setting you can imagine and which I can now call my home...pretty perfect, eh?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MeetTheTeam;
