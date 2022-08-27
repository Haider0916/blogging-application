import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useTheme} from '../../contexts/appContext';
import ToggleSwitch from '../toggleSwitch';
import axios from "axios";
import './home.css'

function Home() {
    
    const [state,dispatch] = useTheme();

    useEffect(() => {
        const fetcher = async () => {
            dispatch({type: 'BLOG_LOADING'})
            const result = await axios.get('http://localhost:8080/blogs')
            dispatch({type: 'INITIAL_FETCH', payload: {
                blogs:result.data
            }})
        }
        fetcher()
    }, []);



    const {isLoading, blogs, checked} = state;

    const mappedBlogs = blogs.map((blog)=>{
        return(
            <div className="card" key={blog._id}>
                <Link to={`/blog/${blog._id}`}>
                    <h3 style={{color: checked ? "#34568B" : "#f1356d"}}>{blog.title}</h3>
                    <p>written by <b>{blog.author}</b></p>
                    <p>{blog.body}</p>
                </Link>
            </div>
        )
    })

    return (
        <div className="home">
            {
                isLoading 
                    ? <div>...Loading</div>
                    : <>
                    <ToggleSwitch />
                    {                          
                        mappedBlogs.length > 0 
                            ? mappedBlogs 
                            : <div className='noPosts'>
                                <h3>There are no blogs to show</h3>
                            </div>
                    }
                    </>
            }
        </div>
    )
}

export default Home
