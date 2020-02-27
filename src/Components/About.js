import React from 'react'
import Header from "./Header"
import FooterBottom from './FooterBottom'
import { Link } from "react-router-dom"
import Footer from './Footer'

function About(){
  return(
    <>
    <div class ="about">
          <Header />
          <div className="row">
            <div className="container">
              <div class="row main-about">
                <div className="col-md-8 about-story">
                  <h3>Our Story</h3>
                  <span className="story-reserve">
                    <i className="fa fa-user" />
                    <a href="/">Dine Reserve</a>
                  </span>
                  <span className="story-about">
                    <i className="fa fa-pencil"  />
                    <a href="/about">About Us</a>
                  </span>
                  <span className="story-comment">
                    <i className="fa fa-comment" />
                    <a href="#">0</a>
                  </span>
                  <p>DineReserve™ was developed by a couple of hungry businessmen who almost “missed out on their lunch hour” because they couldn't find a table at their favorite restaurant!</p>

                  <p>How DineReserve™ started...</p>
                  <p>Best friends, Tom and Paul, came from different parts of the world; Tom was an American and Paul was from India. One of the big things they had in common was the love of good food at great prices, and they loved trying out restaurants on their lunch hour.</p>
                  <div className=" row quote-one">
                    <blockquote>
                        <p><em>"Because of DineReserve™ our ratings went up, more people are coming."</em></p>
                        <h3>Palden Manager of Jaipur Restaurant</h3>
                    </blockquote>
                  </div>
                  <p>They often visited restaurants including Indian, American, Thai, Vietnamese, Italian, Greek and many more. Tom and Paul developed great friendships with a number of small to medium sized family owned restaurants.</p>
                  <p>They observed restaurant servers running from pillar to post answering the telephone saying come in an hour, maybe we will have a table.</p>
                  <p>The friends saw frustrated, potential new customers tapping their watches, and walking out the door. They witnessed pacing restaurant owners grumbling at their chefs to, “Hurry up!”.</p>
                  <p>They saw servers scrambling to appease waiting "regular" customers saying, "Just a little while longer."</p>
                  <p>“Why don't you have a reservation system?”</p>
                  <p>“Because we can't afford to, ” explained the frustrated restaurant owners.</p>
                  <div className="about-solution">
                    <h3>The Solution!</h3>
                    <p>Tom and Paul concluded that being professional software fellows, maybe they could do something to help make restaurant owner's life easier.</p>
                  </div>
                  <div className="about-develope">
                    <h3>So They Developed a,</h3>
                    <h6>Fast - Affordable - Effective Reservation System</h6>
                    <p>DineReserve™ is quick and easy for your customer to use, affordable for you (the restaurant owner), and makes life easier since no appointment book is needed.</p>
                  </div>
                  <div className="about-growing">
                    <h3>DineReserve™ – We're Growing!</h3>

                    <p>Through word of mouth, our restaurant client list has grown in the USA. Now DineReserve™ is now in New Zealand and interest is increasing at breakneck speed. We invite you to join our growing family of restaurant owners who are makimg life easier for their customers, while they save time and money.</p>
                  </div>
                  <div className=" quote-two">
                    <blockquote>
                        <p><em>"We want your restaurant ­to thrive not just survive!"</em></p>
                        <h3>Jaspal Director of DineReserve™</h3>
                    </blockquote>
                  </div>
                  <div className="story-line"><hr></hr></div>
                </div>
                <div className="col-md-4 about-mission">
                    <h3>Our Mission</h3>
                    <div className="mission-line">
                        <hr></hr>
                    </div>
                    <p>We seek to assist family owned restaurants expand their business, reduce stress and improve communication with their customers.</p>
                    <div className=" quote-three">
                      <blockquote>
                          <p><em>"We strive to help restaurant owners have a balanced work life"</em></p>
                      </blockquote>
                    </div>
                    <p>We do this by offering an affordable yet effective reservation software system to keep your tables filled with diners, improving your bottom line.</p>
                    <h3>Benefits</h3>
                    <hr></hr>
                    <ol>
                      <li>
                        Reduce owner and employee stress by throwing away the appointment book.
                      </li>
                      <br />
                      <li>
                        Staff can focus solely on the customer.
                      </li>
                      <br />
                      <li>
                      Customers can be assured that they will have a seat at the restaurant when they want it.
                      </li>
                      <br />
                    </ol>

                </div>
              </div>
            </div>
          </div>
          <Footer />
          <FooterBottom />

      </div>
    </>
  )
}

export default About
