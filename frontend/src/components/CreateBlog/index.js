import React from 'react'
import {useHistory} from 'react-router-dom'
import {useTheme} from '../../contexts/appContext';
import uuid from 'react-uuid';
import './createBlog.css'

function CreateBlog() {
    const history = useHistory();
    const [{theme},dispatch] = useTheme();

    const [formValues , setFormValues] = React.useState({
        title:'',
        author:'',
        body:'',
    })

    function handleSubmit(e){
        e.preventDefault();
        const {title,author,body} = formValues;
        dispatch({
            type:'ADD_BLOG',
            payload:{
                newBlog:{
                    id:uuid(),
                    title:title,
                    author:author,
                    body:body
                }
            }
        });        
        setFormValues({
            title:'',
            author:'',
            body:'',
        })
        history.push('/');
    }

    function handleChange(e){
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    return (
        <form className="createBlog" onSubmit={handleSubmit}>
            <h1 style={{color:theme}}>Add New Blog</h1>
            <div className="field">
                <label htmlFor="title">Blog title:</label>
                <input value={formValues.title} type="text" id="title" name="title" onChange={(e)=>handleChange(e)}/>
                <br/>
            </div>
            <div className="field">
                <label htmlFor="author">Blog author:</label>
                <input value={formValues.author} type="text" id="author" name="author" onChange={(e)=>handleChange(e)}/>
                <br/>
            </div>
            <div className="field">
                <label htmlFor="body">Blog body:</label>
                <textarea value={formValues.body} id="body" rows={5} name="body" onChange={(e)=>handleChange(e)}/>
                <br/>
            </div>
            <button style={{backgroundColor:theme}}>Add Blog</button>
        </form>
    )
}

export default CreateBlog
