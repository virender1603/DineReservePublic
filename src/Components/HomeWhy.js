import React from 'react'

function HomeWhy(){
  return(
    <div className="why">
    <div className="container">
      <div className="why-header text-center">
        <h3>Why Book with</h3>
        <h2>DineReserve?</h2>
      </div>
      <div className="why-contant">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="why-one">
              <div className="money">
                <h6>Save Money!</h6>
                <p>
                  Affordably priced! $1.00 Per Reservation (up to 8 people!
                  Then ONLY $1.00 for the Next 8 people.
                </p>
              </div>
              <div className="use">
                <h6>Easy to Use!</h6>
                <p>
                  Simple, Safe and Secure! Simple for your Customers to use.
                  Your Customer information is Safe. (DineReserve(tm) does
                  not collect any of your customer information.)
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 align-self-md-center">
            <div className="why-img">
              <img src="/img/m.png" alt="images not found" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="why-two">
              <div className="reserve">
                <h6>24/7 Reservations</h6>
                <p>
                  A Click of a Button on Your Website - has your Customers
                  Table Always Waiting!
                </p>
              </div>
              <div className="touch">
                <h6>Stay in Touch</h6>
                <p>
                  Increase your Business through emails, newsletters, blogs
                  and - *Share Specials! * Send Holiday Greetings! * Super
                  Customer Service!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeWhy
