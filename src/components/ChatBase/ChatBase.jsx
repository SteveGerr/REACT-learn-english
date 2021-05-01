import ChatDialogItem from '../ChatDialogItem/ChatDialogItem'



const ChatBase = () => {

    return (
        <div>
            {/* LEft dialogs */}
            <ChatDialogItem message="Hi" />
            <ChatDialogItem message="What's up?" />

            {/* Right dialogs */}
            <ChatDialogItem message="Good luck!" />
        </div>
    
    )

}

export default ChatBase