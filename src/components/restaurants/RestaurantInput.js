import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        Restaurant Input
	<form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
     	    <br></br>
          <input type="submit" />
	</form>
      </div>
    );
  }
};

export default RestaurantInput;
