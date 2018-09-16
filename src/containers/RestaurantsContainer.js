import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (restaurantName) => dispatch({type: "ADD_RESTAURANT", payload: restaurantName}),
    deleteRestaurant: (restaurantId) => dispatch({type: "DELETE_RESTAURANT", payload: restaurantId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
