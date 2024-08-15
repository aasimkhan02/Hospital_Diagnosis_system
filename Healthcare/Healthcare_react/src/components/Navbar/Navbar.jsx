import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar container'>
            <h1>HealthWave</h1>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Appointments</li>
                <li>Doctors</li>
                <li>Contact</li>
                <button>Login</button>
            </ul>
        </div>
    )
}

export default Navbar
