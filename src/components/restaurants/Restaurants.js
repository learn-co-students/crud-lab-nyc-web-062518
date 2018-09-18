import React, { Component } from 'react';
import { connect } from 'react-redux'
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
  

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(Restaurants);