import React, { Component } from 'react'

export class FriendsForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    
  handleChanges = (event) => {
    console.log(this.props);
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState(
      {
        name: '',
        age: '',
        email: ''
    }
    )
  }


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} type="text" name="name" placeholder="name" onChange={this.handleChanges} />
          <input value={this.state.age} type="text" name="age" placeholder="age" onChange={this.handleChanges} />
          <input value={this.state.email} type="text" name="email" placeholder="email" onChange={this.handleChanges} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default FriendsForm;
