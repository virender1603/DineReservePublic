import React ,{useState,useEffect,useMemo} from 'react'
import Header from './Header'
import Footer from './Footer'
import FooterBottom from './FooterBottom'
import SearchForm from './SearchForm'
import { useSelector,useDispatch } from 'react-redux'
import {fetchRestaurant} from '../Redux/HomeFeature/HomeFeatureActions'
import { Link } from 'react-router-dom';

function SearchResult(){
  const feature_restaurants = useSelector(state =>state.All_Restaurant)
  const [featureRestaurant,setFeatureRestaurant] = useState([])
  const dispatch = useDispatch();
  // Hooks start
  useEffect(() =>{
    dispatch(fetchRestaurant());
  },[dispatch])

  useMemo(() =>{
    setFeatureRestaurant(feature_restaurants.restaurants.All_restaurant)

  },[feature_restaurants.restaurants])
  // Hooks end
  return(
    <>
      <Header />
      <SearchForm />
      <div className="book-table-main">
      <div className="srating">
        <div className="container">
          <div className="srating-wrapper">
            <div className="row">
            {featureRestaurant
              ? featureRestaurant.filter(item => item.booking_option != 'False').map((data, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="b-page-one">
                  <div className="b-page-one-wrapper">
                    <div className="b-page-one-img">
                      <img src={data.logo_image} alt="images not found" />
                    </div>
                    <div className="b-page-one-para">
                      <h4>{data.restaurant_name}</h4>
                      <p className="restdes">{data.restaurant_description}
                      </p>
                    </div>
                    <div className="b-page-one-rating">
                      <h5>4.5</h5>
                      <p>20 reviews</p>
                    </div>
                  </div>
                  <div className="b-page-one-wrapper-address">
                  <img src="./img/map-pin.png" alt="images not found" />
                    <h6>{data.restaurant_address}</h6>
                  </div>
                  <div className="b-page-link text-center">
                  <Link  to={{ pathname:`/booktable/${data.id}`,  data: data }}>
                      Book Your Table{" "}
                      <span>
                        <i className="fas fa-angle-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              )): (<div className="rest-loader">
              <img src="/img/loader.gif"/></div>)}
              </div>
              </div>
            </div>
          </div>
      <div className="spagi">
        <div className="container">
          <div className="spagi-wrapper text-right">
            <div className="spagi-right">


            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
      <FooterBottom />
    </>
  )
}

export default SearchResult
