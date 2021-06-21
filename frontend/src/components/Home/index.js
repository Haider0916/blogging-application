import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import {useTheme} from '../../contexts/appContext';
import ToggleSwitch from '../toggleSwitch';

function Home() {
    const [{checked,blogs}] = useTheme();
    const mappedBlogs = blogs.map((blog)=>{
        return(
            <div className="card" key={blog.id}>
                <Link to={`/blog/${blog.id}`}>
                    <h3 style={{color: checked ? "#34568B" : "#f1356d"}}>{blog.title}</h3>
                    <p>written by <b>{blog.author}</b></p>
                    <p>
                        {
                            blog.body.length <= 250 
                            ? blog.body 
                            : blog.body.slice(0, 250)+'...'
                        }
                    </p>
                </Link>
            </div>
        )
    })

    return (
        <div className="home">
            <ToggleSwitch />
            {mappedBlogs.length > 0 ? mappedBlogs : <div style={{display:'flex',height:100,alignItems:'center',justifyContent:'center'}}><h3>There are no blogs to show</h3></div>}
        </div>
    )
}

export default Home
