import { BrowserRouter, Route } from 'react-router-dom'
import ChatList from '../ChatList/ChatList'
import Chat from '../Chat/Chat'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import msStyles from './MainScreen.module.scss'

const MainScreen = () => {
    // let show = false
    return (
        <BrowserRouter>
            <div className={msStyles.MainScreen__wrapper}>
            
                <header className={msStyles.MainScreen__header}>
                    <p className={msStyles.MainScreen__logo}>lengapp</p>
                </header>
                {/* Dinamic content */}
                <section className={msStyles.MainScreen__content} >
                    <div className={msStyles.MainScreen__sidebar}>
                        {/* <ChatList /> */}
                        <ChatList />
                    </div>
                    <div className={msStyles.MainScreen__showContent}>
                        <Route path="/welcome" component={WelcomeScreen} />
                        <Route path="/chats" component={Chat}/>
                    </div>
                    
                </section>
                <footer className={msStyles.MainScreen__footer} >
                    <p>development by Ivan Shunyaev</p>
                </footer>

            </div>
        </BrowserRouter>
    )
}

export default MainScreen