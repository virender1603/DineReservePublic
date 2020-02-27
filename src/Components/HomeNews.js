import React from 'react'
import { Link } from "react-router-dom";

function HomeNews(){
  return(
    <div className="news">
          <div className="container">
            <div className="news-wrapper text-center">
              <h2>News</h2>
              <p>Read about whats happening at Dine Reserve! </p>
              <Link to={"#"}>Find out More</Link>
            </div>
          </div>
        </div>
  )
}
export default HomeNews
