import { FaTasks } from 'react-icons/fa'

import style from './header.module.css'

/**
 * Header component that displays the application logo and title.
 * Renders at the top of the application layout.
 */
const Header = () => {
    return (
        <header className={style.header}>
            <FaTasks />
            <h1>taskly</h1>
        </header>
    )
}

export default Header
