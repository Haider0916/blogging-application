import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './singleBlog.css';
import { useTheme } from '../../contexts/appContext';
import axios from 'axios';
import Blog from './Blog';
import CommentsDisplay from './CommentsDisplay';
import NewCommentForm from './NewCommentForm';

function SingleBlog() {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    name: 'john doe',
    comment: 'testing comment 123',
  });
  const [state] = useTheme();
  const { blogs, checked } = state;

  const passed_id = useParams().id;
  const blog = blogs.find((blog) => blog._id === passed_id);
  const comments = blog.comments;

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/comments/${passed_id}`, formValues);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete(id) {
    try {
      const r = await axios.delete(`http://localhost:8080/blogs/${id}`);
      if (r.statusText === 'OK') {
        history.push('/');
      } else {
        console.log(r);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteComment(id) {
    try {
      const r = await axios.delete(`http://localhost:8080/comments/${id}`);
      if (r.statusText === 'No Content') {
        history.push('/');
      } else {
        console.log(r);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="singleBlog">
      <Blog {...blog} handleDelete={handleDelete} checked={checked} />
      <hr
        style={{
          backgroundColor: checked ? '#34568B' : '#f1356d',
          width: '100%',
          margin: '30px 5px 0px 0px',
        }}
      />
      <CommentsDisplay comments={comments} deleteComment={deleteComment} />
      <NewCommentForm
        handleSubmit={handleSubmit}
        formValues={formValues}
        handleChange={handleChange}
        checked={checked}
      />
    </div>
  );
}

export default SingleBlog;
