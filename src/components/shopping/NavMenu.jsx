import React from 'react'
import { Link } from 'react-router-dom'
import './navMenu.css'

const NavMenu = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <Link className='nav-link' to='/dashboard'> <li>Dashboard</li></Link>
                <Link className='nav-link' to='/history'> <li>History</li></Link>
                <Link className='nav-link' to='/add'> <li>Add Shopping List</li></Link>
            </ul>
        </nav>
    )
}

export default NavMenu;