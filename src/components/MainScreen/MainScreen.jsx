import Chat from '../Chat/Chat'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import msStyles from './MainScreen.module.scss'

const MainScreen = () => {
    let show = false
    return (
        <div className={msStyles.MainScreen__wrapper}>
            <header className={msStyles.MainScreen__header}>
                <p className={msStyles.MainScreen__logo}>lengapp</p>
            </header>
            {/* Dinamic content */}
            <section className={msStyles.MainScreen__content} >
            {show ? <WelcomeScreen /> : null}
            <Chat />
            </section>
            <footer className={msStyles.MainScreen__footer} >
                <p>development by Ivan Shunyaev</p>
            </footer>

        </div>
    )
}

export default MainScreen