import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    // dispatch action
    // this.props.dispatch({type: "ADD_RESTAURANT", payload: this.state.text})
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: restaurant => dispatch({type: "ADD_RESTAURANT", text: restaurant})
//   }
// }

export default RestaurantInput;
// export default connect()(RestaurantInput);
