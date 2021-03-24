import React from 'react'
import {Link} from 'react-router-dom'
import {useTheme} from '../../contexts/appContext'
import './notFound.css';

function NotFound() {

    const theme = useTheme();

    return (
        <div className="notFound">
            <h1>404 - PAGE NOT FOUND</h1>
            <br/>
            <Link to='/' style={{backgroundColor:theme,padding:'7px 14px'}}>BACK TO HOME</Link>
        </div>
    )
}

export default NotFound
