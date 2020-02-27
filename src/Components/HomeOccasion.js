import React from 'react'
import { Link } from "react-router-dom";

function HomeOccasion(){
  return(
    <div className="for">
      <div className="container">
        <div className="for-heading text-center">
          <h2>For Every Occasion</h2>

        </div>
        <div className="for-gellary">
          <div className="for-gellary-one">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <div className="for-gellary-one-left">
                  <img src="/img/1.png" alt="images not found" />
                  <div className="for-one-cnt" id="for-three">
                    <div className="for-one-heading">
                      <h5>Family</h5>
                      <p>
                        Family Time is always important when it comes to food
                      </p>
                    </div>
                    <div className="for-one-link">
                      <Link to={"/restaurant"}>Book a Table</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <div className="for-gellary-one-right">
                  <img src="/img/2.png" alt="images not found" />
                  <div className="for-one-cnt">
                    <div className="for-one-heading for-two-heading">
                      <h5>Romantic</h5>
                      <p>
                        Reserve important dates for Romantic <br /> Moments
                      </p>
                    </div>
                    <div className="for-one-link">
                      <Link to={"/restaurant"}>Book a Table</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="for-gellary-two">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="for-gellary-two-left">
                  <img src="/img/3.png" alt="images not found" />
                </div>
                <div className="for-one-cnt">
                  <div className="for-one-heading">
                    <h5>Friends</h5>
                    <p>Have Fun and Dine in with friends</p>
                  </div>
                  <div className="for-one-link">
                    <Link to={"/restaurant"}>Book a Table</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="for-gellary-two-left">
                  <img src="/img/4.png" alt="images not found" />
                </div>
                <div className="for-one-cnt">
                  <div className="for-one-heading">
                    <h5>Diversity</h5>
                    <p>
                      {" "}
                      You will find diversity of restaurants for all races{" "}
                    </p>
                  </div>
                  <div className="for-one-link">
                    <Link to={"/restaurant"}>Book a Table</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeOccasion
