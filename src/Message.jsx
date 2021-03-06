/* eslint-disable react/prop-types */

import React, { Component } from 'react';

class Message extends Component {
  render() {
    // Each user will have different color. Color stays the same even if the user changes his/her username.
    let userNameColor = {
      color: this.props.message.color
    };

    const regex = /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/;

    // If the data type is post notification.
    if (this.props.message.type === 'postNotification') {
      return (
        <div className="message">
          <span className="message system">
            "{this.props.message.prevUserName}" has changed their name to "
            {this.props.message.currentUser.name}"
          </span>
        </div>
      );
    }

    if (regex.test(this.props.message.content)) {
      return (
        <div className="message">
          <span className="message-username" style={userNameColor}>
            {this.props.message.username}
          </span>
          <img src={this.props.message.content} />
        </div>
      );
    }

    // Else.
    return (
      <div className="message">
        <span className="message-username" style={userNameColor}>
          {this.props.message.username}
        </span>
        <span className="message-content">{this.props.message.content}</span>
      </div>
    );
  }
}

export default Message;
