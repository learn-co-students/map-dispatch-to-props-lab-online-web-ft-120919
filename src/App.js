import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
import { connect } from 'react-redux'
import { addRestaurant } from './actions/restaurants.js'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants restaurants={this.props.restaurants}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants 
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addRestaurant: () => {
//       dispatch(addRestaurant())
//     }
//   }
// }

export default connect(mapStateToProps)(App);
