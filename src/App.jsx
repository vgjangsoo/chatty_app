import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

// WebSocket connection.
const socket = new WebSocket('ws://localhost:3001');

// const messageData = {
//   currentUser: { name: 'Bob' }, // optional. if currentUser is not defined, it means the user is Anonymous
//   messages: [
//     {
//       id: Math.random()
//         .toString()
//         .substr(3, 6),
//       username: 'Bob',
//       content: 'Has anyone seen my marbles?'
//     },
//     {
//       id: Math.random()
//         .toString()
//         .substr(3, 6),
//       username: 'Anonymous',
//       content:
//         'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
//     }
//   ]
// };

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      currentUser: { name: 'Bob' },
      messages: []
    };
    this.addNewMessage = this.addNewMessage.bind(this);
  }

  // A function to add new messages from chatbar input field.
  addNewMessage(content) {
    const oldMessages = this.state.messages;
    const newMessages = [...oldMessages, content];
    this.setState({ messages: newMessages });
    socket.send(JSON.stringify(content));
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    socket.onopen = () => {
      console.log('Client connected');
    };
    setTimeout(() => {
      console.log('Simulating incoming message');

      // Add a new message to the list of messages in the data store
      const newMessage = {
        id: Math.random()
          .toString()
          .substr(3, 6),
        username: 'Michelle',
        content: 'Hello there!'
      };

      const messages = this.state.messages.concat(newMessage);

      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.

      this.setState({ messages: messages });
    }, 3000);
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
        />
      </div>
    );
  }
}
export default App;
