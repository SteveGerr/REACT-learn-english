
// import { Route } from 'react-router'
import ChatBase from './ChatBase/ChatBase'
import ChatForm from './ChatForm/ChatForm'
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

            <ChatForm
                state={props.state}
                sendAnswer={props.sendAnswer}
                addWord={props.addWord} />
            </div>
        </div>
    )
}

export default Chat