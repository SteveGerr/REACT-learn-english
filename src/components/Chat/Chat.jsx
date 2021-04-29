import ChatDialogItem from '../ChatDialogItem/ChatDialogItem'
import ChatInput from '../ChatInput/ChatInput'
import chatStyles from './Chat.module.scss'

const Chat = () => {

    return (
        <div className={chatStyles.chat}>

            {/* ChatDialogs */}
            <div className={chatStyles.chat__dialogs}>
                <p className={chatStyles.chat__colHeading} >Dialogs</p>
                <div className={chatStyles.dialogs_wrapper}>
                    {/* LEft dialogs */}
                    <div className={chatStyles.dialogs_left}>
                        <ChatDialogItem />
                    </div>
                    <div className={chatStyles.dialogs_left}>
                        <ChatDialogItem />
                    </div>

                    {/* Right dialogs */}
                    <div className={chatStyles.dialogs_right}>
                        <ChatDialogItem />
                    </div>
                </div>
                
            <ChatInput />
            </div>
        </div>
    )
}

export default Chat