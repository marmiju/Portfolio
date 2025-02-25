import React from 'react'
import { NavLink } from 'react-router'



const Header = () => {
    return (
        <div className="flex  justify-center w-full">
            <div className="header_div">
                <NavLink to={'/'}>hello</NavLink>
                <NavLink to={'/about'}>About Me</NavLink>
            </div>
        </div>
    )
}

export default Header