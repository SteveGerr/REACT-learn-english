import React from 'react'
// import { Chip } from '@material-ui/core'
import ChatChips from './ChatChip/ChatChip'
import cfStyle from './ChatForm.module.scss'
import ChatInput from './ChatInput/ChatInput'


const ChatForm = (props) => {
    const { Store } = props
    // console.log(Store.getState())

    let sendAnswer = () => {
        props.sendAnswer()
    }


    return (
        <div className={cfStyle.wrapper}>
            <div className={cfStyle.inputBlock}>
                {/* Input */}
                <ChatInput
                    value={Store.getState().stateValue}
                    enterTxt={Store.enterTxt}
                />
                {/* Send button */}
                <div className={cfStyle.sendBtnWrapper}>
                    <button onClick={sendAnswer} className={cfStyle.sendBtn}>Send</button>
                </div>
            </div>
            <div className={cfStyle.select}>
                <ChatChips
                    state={Store.getState().DefaultState}
                    storeAddWord={Store.dispatch.bind(Store)}
                />
            </div>
        </div>
    )

}


export default ChatForm