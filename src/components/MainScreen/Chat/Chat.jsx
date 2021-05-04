
// import { Route } from 'react-router'
import ChatBase from './ChatBase/ChatBase'
import ChatInput from './ChatInput/ChatInput'
import chatStyles from './Chat.module.scss'
// import {Route} from './react'

const Chat = (props) => {
    return (
        <div className={chatStyles.chat}>

            {/* ChatDialogs */}
            <div className={chatStyles.chat__dialogs}>
                <p className={chatStyles.chat__colHeading} >Dialogs</p>
                <div className={chatStyles.dialogs_wrapper}>
                    {/* <Route component={ChatBase}/> */}
                    <ChatBase />
                </div>

            <ChatInput
                state={props.state}
                addAnswer={props.addAnswer}
                addWord={props.addWord} />
            </div>
        </div>
    )
}

export default Chat