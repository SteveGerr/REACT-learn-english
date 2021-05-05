
import ciStyle from './ChatInput.module.scss'

const ChatInput = (props) => {

    let fEnterTxt = (val) => {
        props.enterTxt(val.target.value)
    }
    return (
        <div className={ciStyle.inputWrapper}>
            <label htmlFor="enterText">Enter the answer:</label>
            <input
                id='enterText'
                type="text"
                value={props.value}
                onChange={fEnterTxt}
            />
        </div>
    )
}

export default ChatInput