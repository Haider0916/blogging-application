import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'
import {useTheme} from '../../contexts/appContext';

function Navbar() {

    const [{checked}] = useTheme();

    return (
        <nav>
            <div className="nav__logo">
                <h2 style={{color: checked ? "#34568B" : "#f1356d"}}>BLOG LOGO</h2>
            </div>
            
            <div className="nav__spacing">

            </div>

            <div className="nav__links">
                <ul>
                    <li><NavLink to="/" exact activeStyle={{backgroundColor:checked ? "#34568B" : "#f1356d",color:'white',padding:'14px',borderRadius:10}}>Home</NavLink></li>
                    <li><NavLink to="/CreateBlog" exact activeStyle={{backgroundColor: checked ? "#34568B" : "#f1356d",color:'white',padding:'14px',borderRadius:10}}>New Blog</NavLink></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
