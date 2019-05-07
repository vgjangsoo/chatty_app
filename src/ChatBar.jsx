/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React, { Component } from "react";

class ChatBar extends Component {
  render() {

    // Get currentUser value from parent and check if username is present.
    let currentUser =
      this.props.currentUser.name.length === 0
        ? "Anonymous"
        : this.props.currentUser.name;

    // Create a function to get the input values from input field.
    const onEnter = evt => {

        // If user presses enter.
      if (evt.key === "Enter") {
        const inputElement = evt.target;

        // Create an obj with the data.
        let obj = {
          username: currentUser,
          content: evt.target.value,
          id: Math.random()
            .toString()
            .substr(3, 6)
        };
        
        // addNewMessage function! from parent APP.jsx
        this.props.addNewMessage(obj);

        // Reset input element.
        inputElement.value = "";
      }
    };

    // Return chatbar
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={currentUser} />
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
