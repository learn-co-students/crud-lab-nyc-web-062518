import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          <span>{restaurant.text} </span><button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};



export default Restaurant;
