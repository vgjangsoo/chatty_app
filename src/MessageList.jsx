/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    // .map messages!
    const messageItems = this.props.messages.map(message => {
      return <Message message={message} key={message.id} />;
    });

    return <div>{messageItems}</div>;
  }
}

export default MessageList;
