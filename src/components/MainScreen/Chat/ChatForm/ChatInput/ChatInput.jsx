
import ciStyle from './ChatInput.module.scss'

const ChatInput = (props) => {
    return (
        <div className={ciStyle.inputWrapper}>
            <label htmlFor="enterText">Enter the answer:</label>
            <input
                id='enterText'
                type="text"/>
        </div>
    )
}

export default ChatInput