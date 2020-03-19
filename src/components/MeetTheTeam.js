import React, { Fragment } from 'react'
import Img from 'gatsby-image'

const MeetTheTeam = ({ anastasia, eddie }) => {
  return (
    <Fragment>
      <div id="team" className="mb-5">
        <h2 className="mb-4">About me</h2>
        <div className="row">
          <div className="container d-flex flex-wrap justify-content-between">
            <div className="col-sm-10 about">
              <div className="row">
                <div className="col-sm-6">
                  <Img fluid={anastasia} loading="lazy" />
                </div>
                <div className="col-sm-6">
                  <p>
                  After beginning my massage journey studying Swedish Massage in London, I then continued my training qualifying in Deep Tissue and Ayurvedic Massage.

                  My true love and passion for helping people through massage began at home in Ireland with my work for a non-profit organisation, providing therapies for vulnerable adults and children.
                  The opportunity for me to help heal clients, emotionally as well as physically, using natural alternative therapy and to be able to see their wellbeing improve over the weeks I treated them, was extremely rewarding.
                <br />
                <br />
                My fondness for travel took me to the French Alps, where I spent a winter season providing therapies for weary skiers and holiday makers. But the attraction of the sun, sure and yoga culture of the Algarve won me over.
                  I am able to use my passion to help others in the most beautiful setting you can imagine and which I can now call my home...pretty perfect, eh?
                  </p>
                </div>


                {/* <div className="container my-5">
                  <div className="row">
                    <div className="col-sm-6"> */}
                      {/* <ul>
                        <li>BIS level 2 qualified coach</li>
                        <li>Advanced first aid</li>
                        <li>Protecting young people in sport </li>
                        <li>Awarded the title Master of sport Russia.</li>
                        <li>Degree in Physical education</li>
                        <li>Principal pairs Skater </li>
                        <li>Technical specialist</li>
                        <li>Choreographer </li>
                      </ul> */}
                    {/* </div>
                    <div className="col-sm-6"> */}
                      {/* <ul>
                        <li>International competitive history</li>
                        <li>Salchow Trophy, Malmö 2001 </li>
                        <li>ISU JGP Courchevel, Courchevel 2002</li>
                        <li>Belgrade Sparrow, Belgrade 2001</li>
                        <li>ISU Junior Grand Prix Final, The Hague 2003</li>
                        <li>Nebelhorn Trophy, Oberstdorf 2003</li>
                        <li>Skate Slovakia, Bratislava 2003</li>
                        <li>Croatia Cup, Zagreb 2003</li>
                        <li>ISU Junior Grand Prix Final, Malmö 2004</li>
                      </ul> */}
                    {/* </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="col-sm-6 about">
              <div className="row">
                <div className="col-sm-6"> */}
                  {/* <Img fluid={eddie} loading="lazy" /> */}
                {/* </div> */}

                {/* <h3 className="text-center pt-5">
                  Qualifications & Achievements
                </h3> */}
                {/* <br />
                <br />
                <div className="container my-5">
                  <div className="row">
                    <div className="col-sm-6">
                      {/* <ul>
                        <li>British ice Skating Qualified Coach</li>
                        <li>Represented UK Internationally in Competition </li>
                        <li>6 Years International Show Experience </li>
                        <li>BITA Registered Coach</li>
                        <li>International Coaching Experience</li>
                        <li>Technical specialist</li>
                        <li>First aid certified</li>
                        <li>protecting young people in sport</li>
                      </ul> */}
                    {/* </div> */}
                    {/* <div className="col-sm-6"> */}
                      {/* <ul>
                        <li>International Development Team 2011-2012</li>
                        <li>British Squad/ Team GB since the age of 13</li>
                        <li>2 time British Pairs Champion</li>
                        <li>3 time British Pairs Silver Medalist</li>
                        <li>
                          Represented Great Britain Internationally at Junior
                          Pairs Level
                        </li>
                        <li>
                          Represented Great Britain at Pairs in Junior Grand
                          Prix 2007-2008 & 2008-2009
                        </li>
                        <li>
                          Represented Great Britain at Pairs in Junior World
                          Championships 2009
                        </li>
                        <li>
                          Held British Olympic Association Silver Passport – 4
                          years
                        </li>
                        <li>
                          Has been funded by –Lottery, Sport NI Elite Athlete
                          Scheme & Ulster Sports Trust
                        </li>
                        <li>NISA Level 10 Field Move Test </li>
                        <li>NISA Junior Pairs Tests</li>
                        <li>NISA Bronze Pairs Test</li>
                      </ul> */}
                    {/* </div>
                  </div> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MeetTheTeam
