/* eslint-disable react/prop-types */
import React, { Component } from 'react';

// uuid random.
const uuidv4 = require('uuid/v4');

class ChatBar extends Component {
  render() {
    // Get currentUser value from parent and check if username is present if not username becomes Anonymous.
    let currentUser =
      this.props.currentUser.name.length === 0
        ? 'Anonymous'
        : this.props.currentUser.name;

    // Create a function to get the input values from input field.
    const onEnter = evt => {
      // If user presses enter.
      if (evt.key === 'Enter') {
        const inputElement = evt.target;

        // Create an obj with the data.
        let obj = {
          username: currentUser,
          content: inputElement.value,
          id: uuidv4()
        };

        // addNewMessage function! from parent APP.jsx
        this.props.addNewMessage(obj);

        // Reset input-field.
        inputElement.value = '';
      }
    };

    // Function to change the current user name.
    const usernameOnEnter = evt => {
      // When the user presses enter key.
      if (evt.key === 'Enter') {
        // Create an obj with the new user name.
        let userName = {
          name: evt.target.value
        };

        // Change current user name by using changeCurrentUser function from parent: APP.jsx
        this.props.changeCurrentUser(userName);

        //Reset username input-field.
        evt.target.value = '';
      }
    };

    // Return chatbar
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder={currentUser}
          onKeyPress={usernameOnEnter}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={onEnter}
        />
      </footer>
    );
  }
}

export default ChatBar;
