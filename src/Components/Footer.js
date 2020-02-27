import React from 'react'
import { Link } from "react-router-dom";

function Footer(){
  return(
    <div className="footer">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-6 col-md-12">
            <div className="footer-left">
              <div className="row no-gutters">
                <div className="col-lg-4 col-md-3">
                  <div className="footer-one">
                    <Link to="#">
                      <img src="/img/fl.png" alt="images not found" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-9">
                  <div className="footer-two" id="footer-second">
                    <h5>About DineReserve™</h5>
                    <p>
                      DineReserve™ was created to help family owned business
                      guarantee their customers a table when they want it!
                    </p>
                    <p>
                      Save time and money, serve customers, and relieve stress
                      with DineReserve.™{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-6">
                <div className="footer-two footer-three">
                  <h5>Food News At Your Finger Tips!</h5>
                  <p>
                    From cutting carrots to searing steak, our blog offers you
                    tasty tips.
                  </p>
                  <p>
                    We include up and coming chefs from around the world who
                    offer insights and advice.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="footer-two footer-three footer-four">
                  <h5>From our blog</h5>
                  <p>Food, Fun, and Friends 2015-03-08 09:37:25</p>
                  <p>
                    Keep the love going! Longmont, Co, Avery Museum Valentine
                    Special 2015-02-15 00:40:25
                  </p>
                  <p>Valentines Day 2015-02-08 00:32:51</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
