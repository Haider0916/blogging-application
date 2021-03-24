import React from 'react'
import { useParams , useHistory , Link } from 'react-router-dom';
import uuid from 'react-uuid';
import './singleBlog.css';
import {useTheme} from '../../contexts/appContext';

function SingleBlog() {

    const history = useHistory();

    const [formValues , setFormValues] = React.useState({
        name:'',
        comment:''
    })

    const [hover,toggleHover] = React.useState(false);

    function handleChange(e){
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    
    const [ state , dispatch ] = useTheme();

    const { blogs , theme , comments } = state;

    const passed_id = useParams().id;

    const correspondingBlogComments = comments
    .filter(comment => comment.blogID === passed_id)
    .map(comment => {
        return <div onMouseLeave={() => toggleHover(false)} onMouseEnter={() => toggleHover(true)}  key={comment.id} style={{display:'flex',marginBottom:'12px',backgroundColor:'#e7e7e7',padding:'7px 14px',borderRadius:'7px'}}>
            <div style={{width:'95%'}}>
                <h5 style={{margin:'5px 0px'}}>{comment.name}</h5>
                <p style={{margin:'5px 0px'}}>{comment.body}</p>
            </div>
            {hover && <div onClick={()=>deleteComment(comment.id)} style={{width:'5%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p style={{margin:0,cursor:'pointer'}}>&#x2716;</p>
            </div>}
        </div>
    })


    const blog = blogs.find(blog => blog.id === passed_id)

    function handleSubmit(e){
        e.preventDefault();
        const {name,comment} = formValues;
        dispatch({
            type:'ADD_COMMENT',
            payload:{
                newComment:{
                    blogID:passed_id,
                    id:uuid(),
                    name:name,
                    body:comment
                }
            }
        });
        setFormValues({
            name:'',
            comment:''
        })
    }

    function handleDelete(id){
        dispatch({type:'DELETE_BLOG',payload:{id:id}});
        history.push('/');
    }

    function deleteComment(id){
        dispatch({type:'DELETE_COMMENT',payload:{id:id}});
    }

    return (
        <div className="singleBlog">
            <h3 style={{color: theme}}>{blog.title}</h3>
            <p>written by <b>{blog.author}</b></p>
            <p>{blog.body}</p>
            <button onClick={()=>{handleDelete(blog.id)}} style={{backgroundColor:theme}}>DELETE</button>
            &nbsp;&nbsp;&nbsp;
            <Link to={'/editBlog/'+blog.id} style={{backgroundColor:theme}}>EDIT</Link>
            <hr style={{backgroundColor:theme,width:'100%',margin:'30px 5px 0px 0px'}}></hr>
            <h2>Comments</h2>
            {
                correspondingBlogComments.length > 0 
                ? correspondingBlogComments 
                : <div style={{padding:10,border:'5px dashed #d3d3d3'}}>
                    No Comments for this blog
                </div>
            }
            <form onSubmit={handleSubmit}>
                <h3>Add Comments</h3>
                <div className="field">
                    <label htmlFor="title">Commenter Name:</label>
                    <input value={formValues.name} type="text" id="name" name="name" onChange={(e)=>handleChange(e)}/>
                    <br/>
                </div>
                <div className="field">
                    <label htmlFor="author">Comment:</label>
                    <textarea value={formValues.comment} id="comment" rows={5} name="comment" onChange={(e)=>handleChange(e)}/>
                    <br/>
                </div>
                <button style={{backgroundColor:theme}}>Add Comment</button>
            </form>
        </div>
    )
}

export default SingleBlog