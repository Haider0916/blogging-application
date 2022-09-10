import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ title, author, body, _id, handleDelete, checked }) => {
  return (
    <>
      <h3 style={{ color: checked ? '#34568B' : '#f1356d' }}>{title}</h3>
      <p>
        written by <b>{author}</b>
      </p>
      <p> {body} </p>
      <button
        onClick={() => {
          handleDelete(_id);
        }}
        style={{ backgroundColor: checked ? '#34568B' : '#f1356d' }}
      >
        DELETE
      </button>
      &nbsp;&nbsp;&nbsp;
      <Link
        to={'/editBlog/' + _id}
        style={{ backgroundColor: checked ? '#34568B' : '#f1356d' }}
      >
        EDIT
      </Link>
    </>
  );
};

export default Blog;
