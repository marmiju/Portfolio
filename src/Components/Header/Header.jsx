import React from 'react'
import { NavLink } from 'react-router'



const Header = () => {
    return (
        <div >
            <div className="flex w-full justify-center fixed bg-transparent backdrop-blur-sm">
                <div className="header_div relative">
                    <NavLink to={'/'}>hello</NavLink>
                    <NavLink to={'/about'}>About Me</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header