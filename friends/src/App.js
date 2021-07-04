import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Friendslist from './components/Friendslist';
import FriendsForm from './components/FriendsForm';


export class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  addFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err))
  }

  deleteFriend = id => {
    console.log(id);

    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err))
  }


  updateFriend = (id, friend) => {
    console.log("updating...")
    axios.put(`http://localhost:5000/friends/${id}`, friend)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err))
  }


  render() {

    return (
      <div>
        <FriendsForm addFriend={this.addFriend} />
      <Friendslist friends={this.state.friends} deleteFriend={this.deleteFriend} updateFriend={this.updateFriend}/>
      </div>
    )
  }
}

export default App;
