import cdiStyle from './ChatDialogItem.module.scss'    

const ChatDialogItem = (props) => {

    return (
        <div>
            <div className={`${cdiStyle.wrapper} ${cdiStyle.wrapper_left}`}>
                <div className={cdiStyle.chat_dialog_item}>
                    {/* <p>Hi, my name is Ivan</p> */}
                    <p>{props.message}</p>
                </div>
            </div>
            <div className={`${cdiStyle.wrapper} ${cdiStyle.wrapper_right}`}>
                <div className={cdiStyle.chat_dialog_item}>
                    {/* <p>Hi, my name is Ivan</p> */}
                    <p>{props.message}</p>
                </div>
            </div>

        </div>
    )

}

export default ChatDialogItem