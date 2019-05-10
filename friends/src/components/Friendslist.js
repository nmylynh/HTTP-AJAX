import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';


const Friendslist = props => {

    
    return (
        <div className="friends-container">
            {props.friends.map(friend => {
                return <Friend key={friend.id} id={friend.id} friend = {friend} name={friend.name} age={friend.age} email={friend.email} deleteFriend={props.deleteFriend} updateFriend={props.updateFriend}/>})
            }
        </div>
    )
}

Friendslist.propTypes = {
    friend: PropTypes.object,
    key: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
    };  

export default Friendslist;
