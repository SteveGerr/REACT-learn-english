import React from 'react'
// import { Chip } from '@material-ui/core'
import ChipsArray from './ChatChip/ChatChip'
import cfStyle from './ChatForm.module.scss'
import ChatInput from './ChatInput/ChatInput'


const ChatForm = (props) => {


    // let sendAnswer = () => {
    //     let value = inputAnswer.current.value
    //     if (value === '') return
    //     props.sendAnswer(value)
    //     // showWord()
    //     value = ' '
    // }
    // let showWord = () => {
    //     inputAnswer.current.value = props.state.arrWord.join(" ")
    //     console.log(inputAnswer.current.value);
    // }

    return (
        <div className={cfStyle.wrapper}>
            <div className={cfStyle.inputBlock}>
                {/* Input */}
                <ChatInput
                    value={props.state.stateValue}
                    enterTxt={props.enterTxt}
                />
                {/* Send button */}
                <div className={cfStyle.sendBtnWrapper}>
                    <button onClick={() => {console.log("Plug");}} className={cfStyle.sendBtn}>Send</button>
                </div>
            </div>
            <div className={cfStyle.select}>
                <ChipsArray
                    state={props.state}
                    storeAddWord={props.storeAddWord}
                    enterTxt={props.enterTxt}
                />
            </div>
        </div>
    )

}


export default ChatForm