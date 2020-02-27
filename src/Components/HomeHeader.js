import React from 'react';
import { Link } from "react-router-dom";

function HomeHeader(){
  return(
    <div className="main-header home">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9">
              <div className="top-header-left">
                <ul>
                  <li>
                    <span>
                      <i className="fas fa-mobile-alt" />
                    </span>
                    (+1) 720 448 8203 (USA)
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-mobile-alt" />
                    </span>
                    (+64) 22 069 7269 (NZ)
                  </li>
                  <li>
                    <span>
                      <i className="far fa-envelope" />
                    </span>
                    info@DineReserve.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="top-header-right">
                <ul>
                  <li>Follow Us :</li>
                  <li>
                    <a href={'https://twitter.com/dinereserve'}>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={'https://www.facebook.com/DineReserve'}>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href={'https://www.linkedin.com/company/dinereserve-com?trk=eml-biz-b-page-company_admin_added&midToken=AQHq_JgvUr44CQ&fromEmail=fromEmail&ut=02coKKG9Nf5mI1'}>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to={'/'}>
                  <img src="/img/logo.png" alt="logo" />
                </Link>
                <button
                  className="hamburger hamburger--squeeze navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto"></ul>
                  <div className="main-menu-part">
                    <ul>
                      <li>
                        <Link to={'/'}>Home</Link>
                      </li>
                      <li>
                        <Link to={'/restaurant'}>Restaurants</Link>
                      </li>
                      <li>
                        <Link to={'/about'}>About</Link>
                      </li>
                      <li>
                        <Link to={'/contactus'}>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="demand">
        <div className="container">
          <div className="demand-wrapper text-center">
            <h3>
              Restaurants on <span>Demand! </span>
            </h3>
            <p>Secure Your Table From Anywhere!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
