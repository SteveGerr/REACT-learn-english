
// import { Route } from 'react-router'
import ChatBase from '../ChatBase/ChatBase'
import ChatInput from '../ChatInput/ChatInput'
import ChatList from '../ChatList/ChatList'
import chatStyles from './Chat.module.scss'
// import {Route} from './react'

const Chat = () => {

    return (
        <div className={chatStyles.chat}>
            {/* ChatList */}
            <div className={chatStyles.chat__list}>
                <p className={chatStyles.chat__colHeading} >Choose the chat:</p>
                <ChatList />
            </div>
            {/* ChatDialogs */}
            <div className={chatStyles.chat__dialogs}>
                <p className={chatStyles.chat__colHeading} >Dialogs</p>
                <div className={chatStyles.dialogs_wrapper}>
                    {/* <Route component={ChatBase}/> */}
                    <ChatBase />
                </div>
                
            <ChatInput />
            </div>
        </div>
    )
}

export default Chat