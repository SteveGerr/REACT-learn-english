import React from 'react'
// import { Chip } from '@material-ui/core'
import ChatChips from './ChatChip/ChatChip'
import cfStyle from './ChatForm.module.scss'
import ChatInput from './ChatInput/ChatInput'


const ChatForm = (props) => {
    const { Store } = props

    let sendAnswer = () => {
        props.sendAnswer()
    }


    return (
        <div className={cfStyle.wrapper}>
            <div className={cfStyle.inputBlock}>
                {/* Input */}
                <ChatInput
                    value={Store.state.stateValue}
                    enterTxt={Store.enterTxt}
                />
                {/* Send button */}
                <div className={cfStyle.sendBtnWrapper}>
                    <button onClick={sendAnswer} className={cfStyle.sendBtn}>Send</button>
                </div>
            </div>
            <div className={cfStyle.select}>
                <ChatChips
                    dialogs={Store.state.dialogs}
                    storeAddWord={Store.storeAddWord.bind(Store)}
                />
            </div>
        </div>
    )

}


export default ChatForm