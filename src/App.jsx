import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

// WebSocket connection.
const socket = new WebSocket('ws://localhost:3001');

// uuid random.
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      type: '',
      currentUser: { name: '' },
      username: '',
      messages: [],
      id: uuidv4()
    };
    // bind!
    this.addNewMessage = this.addNewMessage.bind(this);
    this.changeCurrentUser = this.changeCurrentUser.bind(this);
  }

  // A function to add new messages to the message list.
  addToPage(content) {
    const oldMessages = this.state.messages;
    const newMessages = [...oldMessages, content];
    this.setState({ messages: newMessages });
  }

  // A function to add new messages from chatbar input field.
  addNewMessage(content) {
    // Socket send by using JSON stringify.
    socket.send(JSON.stringify(content));
  }

  changeCurrentUser(newUserName) {
    this.setState({ currentUser: newUserName.currentUser });
  }

  componentDidMount() {
    console.log('componentDidMount <App />');

    socket.onopen = () => {
      console.log('Connected to server');
    };

    socket.onmessage = event => {
      const serverData = JSON.parse(event.data);

      this.addToPage(serverData);
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            Chatty
          </a>
        </nav>
        <main className="messages">
          <MessageList messages={this.state.messages} />
        </main>
        <ChatBar
          currentUser={this.state.currentUser}
          addNewMessage={this.addNewMessage}
          changeCurrentUser={this.changeCurrentUser}
        />
      </div>
    );
  }
}
export default App;
