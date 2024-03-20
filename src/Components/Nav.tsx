import React from 'react'
import Navlink from './Navlink';

export const Nav = () => {
    return (
        <nav>
            <Navlink href="/athletics" name="ATHLETICS" />
            <Navlink href="/essentials" name="ESSENTIALS" />
        </nav>
    )
}

export default Nav;