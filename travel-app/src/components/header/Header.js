import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

function Header() {
    return (
        <div className='header'>
            <h1>Travel Destination</h1>
            <Navbar />
        </div>
    )
}

export default Header