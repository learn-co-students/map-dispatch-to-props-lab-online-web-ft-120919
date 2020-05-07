import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

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
    const restaurant = {
      name: this.state.name,
      location: this.state.location
    }
    console.log(restaurant)
    this.props.addRestaurant(restaurant)
  }

  render() {
    
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};


//connect this component by wrapping RestaurantInput below

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurant => dispatch(addRestaurant(restaurant))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput)
