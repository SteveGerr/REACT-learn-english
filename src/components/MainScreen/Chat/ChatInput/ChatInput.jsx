// import { Chip } from '@material-ui/core'
import ChipsArray from './ChatChip/ChatChip'
import ciStyle from './ChatInput.module.scss'

const ChatInput = (props) => {
    return (
        <div className={ciStyle.wrapper}>
            <label htmlFor="enterText"></label>
            <input id='enterText' type="text"/>
            <div className={ciStyle.select}>
                <ChipsArray state={props.state} />
            </div>
        </div>
    )

}

export default ChatInput