import React from 'react'
import { useHistory , useParams } from 'react-router-dom'
import { useTheme } from '../../contexts/appContext';
import './editBlog.css'

function EditBlog() {
    const history = useHistory();
    const passed_id = useParams().id;
    const [{blogs,theme},dispatch] = useTheme();
    const validBlog = blogs.find(blog =>  blog.id === passed_id);
    
    const [formValues , setFormValues] = React.useState({
        title : validBlog.title,
        author : validBlog.author,
        body : validBlog.body,
    })

    function handleSubmit(e){
        e.preventDefault();
        const {title,author,body} = formValues;
        dispatch({type:'EDIT_BLOG',payload:{
            newBlog:{
                id:validBlog.id,
                title:title,
                author:author,
                body:body
            }
        }});
        ResetFormFields();
        history.push('/');
    }

    function ResetFormFields(){
        setFormValues({
            title:'',
            author:'',
            body:'',
        })
    }

    function handleChange(e){
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    return (
        <form className="createBlog" onSubmit={handleSubmit}>
            <h1 style={{color:theme}}>Edit Blog</h1>
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
            <button style={{backgroundColor:theme}}>Edit Blog</button>
        </form>
    )
}

export default EditBlog
