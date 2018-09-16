import cuid from 'cuid';

export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch(action.type) {

    case "ADD_RESTAURANT":
      let restaurantId = cuidFn()
      let restaurant = {id: restaurantId, text: action.payload }
      return {...state, restaurants: [...state.restaurants, restaurant]}

    case "DELETE_RESTAURANT":
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)}

    case "ADD_REVIEW":
      let reviewId = cuidFn()
      let review = {id: reviewId, ...action.payload}
      return {...state, reviews: [...state.reviews, review]}

    case "DELETE_REVIEW":
    return {...state, reviews: state.reviews.filter(review => review.id !== action.payload)}

    default:
      return state
  }
}
