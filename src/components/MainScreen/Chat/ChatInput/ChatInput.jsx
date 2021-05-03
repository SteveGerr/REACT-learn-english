import React from 'react'
// import { Chip } from '@material-ui/core'
import ChipsArray from './ChatChip/ChatChip'
import ciStyle from './ChatInput.module.scss'

const ChatInput = (props) => {

    // Find input
    let inputAnswer = React.createRef();
     

    let addAnswer = () => {
        let value = inputAnswer.current.value
        if (value === '') return
        props.addAnswer(value)
        value = ' '
    }

    return (
        <div className={ciStyle.wrapper}>
            <div className={ciStyle.inputBlock}>
                {/* Input */}
                <div className={ciStyle.inputWrapper}>
                    <label htmlFor="enterText">Enter the answer:</label>
                    <input ref={inputAnswer} id='enterText' type="text"/>
                </div>
                {/* Send button */}
                <div className={ciStyle.sendBtnWrapper}>
                    <button onClick={addAnswer} className={ciStyle.sendBtn}>Send</button>
                </div>
            </div>
            <div className={ciStyle.select}>
                <ChipsArray state={props.state} />
            </div>
        </div>
    )

}

export default ChatInput