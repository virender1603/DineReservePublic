import React ,{useState,useEffect,useMemo}from 'react'
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {fetchRestaurant} from '../Redux/HomeFeature/HomeFeatureActions'
import { useSelector,useDispatch } from 'react-redux'

function HomeFeature(){
  const feature_restaurants = useSelector(state =>state.All_Restaurant)
  console.log("this.props.feature_restaurants",feature_restaurants)
  const [featureRestaurant,setFeatureRestaurant] = useState([])

  console.log("featureRestaurant",featureRestaurant)

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchRestaurant());
  },[dispatch])
  useMemo(() =>{
    setFeatureRestaurant(feature_restaurants.restaurants.All_restaurant)

  },[feature_restaurants.restaurants])
  return(
    <div className="feature">
        <div className="container">
          <div className="feature-heading">
            <h2>Featured Restaurants</h2>
          </div>
          <div className="feature-slider">
          {
            featureRestaurant

            ? (
          <OwlCarousel
    className="products-slider owl-theme"
    loop
    margin={1}
    autoplay={true}
    autoplayTimeout={2000}
    autoplayHoverPause={true}
>{featureRestaurant.filter(item => item.booking_option !== 'False').map((data, i) => {
  console.log("data",data);
return(
  <div className="fslide-one" key={i}>
    <div className="book-link">
      <Link to={{ pathname:`/booktable/${data.id}`, data: data }}>Book a Table</Link>
    </div>
    <img src={data.logo_image} alt="images not found" />
    <h2 className="rest-home-name">{data.restaurant_name}</h2>
  </div>
)})}

</OwlCarousel>) : null}

            <div className="owl-nav">
              <div className="owl-prev">
                <span>
                  <i className="fas fa-angle-left" />
                </span>
              </div>
              <div className="owl-next">
                <span>
                  <i className="fas fa-angle-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomeFeature
