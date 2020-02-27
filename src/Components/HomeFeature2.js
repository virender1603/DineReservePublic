import React ,{Component} from 'react'
import {fetchRestaurant} from '../Redux/HomeFeature/HomeFeatureActions'
import { connect } from "react-redux";

class HomeFeature2 extends Component{
  constructor(props){
    super(props);
    this.state = {
        feature_restaurant : []
    }
  }
  componentDidMount() {
    const fetchfunction = () =>{
      this.props.fetchRestaurant();
    }
    fetchfunction()
  .then(() =>{
    this.setState({
      feature_restaurant : this.props.feature_restaurants.restaurants.All_restaurant
    })
  })

}
  render(){
    console.log("this.props.feature_restaurants",this.props.feature_restaurants.restaurants.All_restaurant)
    return(
      <></>
    )
  }
}

const mapStateToProps = state => ({
  feature_restaurants : state.All_Restaurant
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: () => dispatch(fetchRestaurant())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeFeature2);
