import React from 'react'
import { NavLink } from 'react-router'



const Header = () => {
    return (
        <div >
            <div className="flex w-full justify-center">
                <div className="header_div poppins shadow-md fixed mt-2 ">
                    <NavLink to={'/'}>hello</NavLink>
                    <NavLink to={'/about'}>About Me</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header