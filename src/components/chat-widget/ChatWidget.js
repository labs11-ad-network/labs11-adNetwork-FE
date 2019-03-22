import React, { Component } from 'react';
import axios from 'axios'

import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';



const logo = "https://image.flaticon.com/icons/png/512/64/64572.png"
class ChatWidget extends Component {

  // componentDidMount() {
  //   addResponseMessage('Hello , Welcome to Very Creepy AD network 👋')
  //   axios.get('http://localhost:5000/api/chat').then(res => {
  //     res.data.map((item) => {
  //       addUserMessage(item.text);
  //     })
  //   }).catch(err => console.log(err))
  // }
  
  handleNewUserMessage = (newMessage) => {
    console.log('newMessage', newMessage);
    const payload = {
      author: 'mikko',
      text: newMessage
    }
    axios.post('http://localhost:5000/api/chat', payload).then(res => {
      console.log(res.data)
    }).catch(err => console.log(err))
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
  render() {

    return (
      <React.Fragment>
        <Widget

          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="title"
          subtitle="And my cool subtitle"
        />
      </React.Fragment>
    );
  }
}


export default ChatWidget;
