import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name"
            value={this.state.name} />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" 
            value={this.state.location} />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     name: state.name,
//     location: state.location
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (restaurant) => {
      dispatch(addRestaurant(restaurant))
    }
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput)
