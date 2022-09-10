import React from 'react';

const NewCommentForm = ({ handleSubmit, formValues, handleChange, checked }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Comments</h3>
      <div className="field">
        <label htmlFor="title">Commenter Name:</label>
        <input
          value={formValues.name}
          type="text"
          id="name"
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <br />
      </div>
      <div className="field">
        <label htmlFor="author">Comment:</label>
        <textarea
          value={formValues.comment}
          id="comment"
          rows={5}
          name="comment"
          onChange={(e) => handleChange(e)}
        />
        <br />
      </div>
      <button style={{ backgroundColor: checked ? '#34568B' : '#f1356d' }}>
        Add Comment
      </button>
    </form>
  );
};

export default NewCommentForm;
