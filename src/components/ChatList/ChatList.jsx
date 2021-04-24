import clStyle from './ChatList.module.scss'

const ChatList = () => {
    
    return (
        <ul className={clStyle.chatlist}>
            <ul className={clStyle.list}>
                <li className={clStyle.item}>Base</li>
            </ul>
        </ul>
    );
}

export default ChatList
