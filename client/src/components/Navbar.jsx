import React from 'react'
import '../css/Navbar.css'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="logo">
                <img src='https://whiteroseflowers.ae/wp-content/uploads/2020/10/logo.svg' alt='logo'/>
            </div>
            <div className="nav-links">
                <ul>
                    <li><CiUser /></li>
                    <li><CiHeart /></li>
                    <li><CiShoppingBasket /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar