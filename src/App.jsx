import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import messageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: messageList
    };
      
  }

  render() {
    const messageItems = this.state.messages.map(message => {
      return < Message message={message} />
    });

    return ( <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <main className="messages">
        {messageItems}
      </main>
        < ChatBar />
    </div>
    );
  }
}
export default App;
