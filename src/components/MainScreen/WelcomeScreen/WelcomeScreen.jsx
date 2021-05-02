
import { NavLink } from 'react-router-dom'
import wsStyle from './WelcomeScreen.module.scss'

const WelcomeScreen = () => {
    return (

        // I am glad to see you in my app
        <div className={wsStyle.WelcomeScreen}>
            <h2 className={wsStyle.WelcomeScreen.h2} >Welcome</h2>
            <p className={wsStyle.WelcomeScreen.p} >Hi, friend! I am glad to see you in my app</p>
            <p>If you're here! So you want to train your English:)</p>
            <NavLink to="/chats">Let's go</NavLink>
        </div>

    )
}

export default WelcomeScreen