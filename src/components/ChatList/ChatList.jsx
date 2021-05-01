import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
// import Chat from '../Chat/Chat';
// import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import clStyle from './ChatList.module.scss'

const ChatList = () => {
    
    return (
        <Router>

            <p className={clStyle.chat__colHeading} >Choose the chat:</p>
            <ul className={clStyle.chatlist}>
                <ul className={clStyle.list}>
                    <li className={clStyle.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chats">Basic</Link>
                    </li>
                </ul>
            </ul>

        </Router>

    );
}

export default ChatList
