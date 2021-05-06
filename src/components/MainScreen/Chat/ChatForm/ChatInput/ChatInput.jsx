
import ciStyle from './ChatInput.module.scss'

const ChatInput = (store) => {

    let fEnterTxt = (val) => {
        // store.enterTxt(val.target.value)
    }
    return (
        <div className={ciStyle.inputWrapper}>
            <label htmlFor="enterText">Enter the answer:</label>
            <input
                id='enterText'
                type="text"
                value={store.value}
                onChange={fEnterTxt}
            />
        </div>
    )
}

export default ChatInput