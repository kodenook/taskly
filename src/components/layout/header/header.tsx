import { Flex } from 'antd'
import { FaTasks } from 'react-icons/fa'

import style from './header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <Flex align="center" gap="middle">
                <FaTasks size="3rem" />
                <h1>taskly</h1>
            </Flex>
        </header>
    )
}
export default Header
