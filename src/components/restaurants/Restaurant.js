import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = (id) => {
    this.props.deleteRestaurant(id)
  }

  render() {
    const { restaurant } = this.props;
    console.log('restaurant props', this.props)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(this.props.restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteRestaurant: (restaurantId) => dispatch({type: "DELETE_RESTAURANT", payload: restaurantId})
//   }
// }

export default Restaurant;
