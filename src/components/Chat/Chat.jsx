import ChatList from '../ChatList/ChatList'
import chatStyles from './Chat.module.scss'

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
            </div>
        </div>
    )
}

export default Chat