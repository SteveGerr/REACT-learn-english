
// import { Route } from 'react-router'
import ChatBase from './ChatBase/ChatBase'
import ChatForm from './ChatForm/ChatForm'
import chatStyles from './Chat.module.scss'
// import {Route} from './react'

const Chat = (props) => {
    /**
     * It has:
     * props = {
     *  Store,
     *  state,
     *  storeAddWord
     * }
     *
     */
    // const { state } = props
    return (
        <div className={chatStyles.chat}>

            {/* ChatDialogs */}
            <div className={chatStyles.chat__dialogs}>
                <p className={chatStyles.chat__colHeading} >Dialogs</p>
                <div className={chatStyles.dialogs_wrapper}>
                    {/* <Route component={ChatBase}/> */}
                    <ChatBase />
                </div>

            <ChatForm Store={props.Store} />
            </div>
        </div>
    )
}

export default Chat