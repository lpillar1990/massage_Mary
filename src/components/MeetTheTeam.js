import React, { Fragment } from 'react'
import Img from 'gatsby-image'

const MeetTheTeam = ({ anastasia, eddie }) => {
  return (
    <Fragment>
      <div id="team" className="mb-5">
        <h2 className="mb-5">Meet The Team</h2>
        <div className="row">
          <div className="container d-flex flex-wrap justify-content-between">
            <div className="col-sm-6 about">
              <div className="row">
                <div className="col-sm-6">
                  <Img fluid={anastasia} loading="lazy" />
                </div>
                <div className="col-sm-6">
                  <h3>Anastasiia Kuzmina</h3>
                  <p>
                    Anastasiia is a Russian trained figure skater from the world
                    renowned olympic reserve school of figure skating Perm.
                    Anastasiia represented her country at the highest level
                    internationally before pursuing a career in professional
                    figure skating. Anastasiia worked both as a coach in Russia
                    and then went on to travel the world as a principal
                    performer with International show business.
                  </p>
                </div>

                <h3 className="text-center pt-5">
                  Qualifications & Achievements
                </h3>
                <br />
                <br />
                <div className="container my-5">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>BIS level 2 qualified coach</li>
                        <li>Advanced first aid</li>
                        <li>Protecting young people in sport </li>
                        <li>Awarded the title Master of sport Russia.</li>
                        <li>Degree in Physical education</li>
                        <li>Principal pairs Skater </li>
                        <li>Technical specialest</li>
                        <li>Choreographer </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>International competitive history</li>
                        <li>Salchow Trophy, Malmö 2001 </li>
                        <li>ISU JGP Courchevel, Courchevel 2002</li>
                        <li>Belgrade Sparrow, Belgrade 2001</li>
                        <li>ISU Junior Grand Prix Final, The Hague 2003</li>
                        <li>Nebelhorn Trophy, Oberstdorf 2003</li>
                        <li>Skate Slovakia, Bratislava 2003</li>
                        <li>Croatia Cup, Zagreb 2003</li>
                        <li>ISU Junior Grand Prix Final, Malmö 2004</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 about">
              <div className="row">
                <div className="col-sm-6">
                  <Img fluid={eddie} loading="lazy" />
                </div>
                <div className="col-sm-6">
                  <h3>Edward Alton</h3>
                  <p>
                    Edward started skating at Dundonald International IceBowl in
                    Northern Ireland While competing he was on the British
                    olympic squad representing the United Kingdom . <br />
                    <br />
                    <br />
                    After Edward finished competitive skating he turned
                    professional as Principle Pairs Team with Disney on ice. It
                    was there that he met, Russian skating star Anastasiia
                    Kuzmina.
                  </p>
                </div>
                <h3 className="text-center pt-5">
                  Qualifications & Achievements
                </h3>
                <br />
                <br />
                <div className="container my-5">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>British ice Skating Qualified Coach</li>
                        <li>Represented UK Internationally in Competition </li>
                        <li>6 Years International Show Experience </li>
                        <li>BITA Registered Coach</li>
                        <li>International Coaching Experience</li>
                        <li>Technical specialist</li>
                        <li>First aid certified</li>
                        <li>protecting young people in sport</li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>International Development Team 2011-2012</li>
                        <li>British Squad/ Team GB since the age of 13</li>
                        <li>2 time British Pairs Champion</li>
                        <li>3 time British Pairs Silver Medallist</li>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MeetTheTeam
