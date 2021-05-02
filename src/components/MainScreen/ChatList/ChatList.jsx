import React from 'react'
import {
    NavLink
  } from "react-router-dom";
// import Chat from '../Chat/Chat';
// import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import clStyle from './ChatList.module.scss'

const ChatList = () => {
    
    return (
        <div className={clStyle.chatlist}>
            <p className={clStyle.colHeading} >Choose the chat:</p>
            <ul>
                <ul className={clStyle.list}>
                    <li>
                        <NavLink className={clStyle.item} to="/welcome" activeClassName={clStyle.activeLink}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={clStyle.item} to="/chats" activeClassName={clStyle.activeLink}>Chats</NavLink>
                    </li>
                </ul>
            </ul>
        </div>

    );
}

export default ChatList
