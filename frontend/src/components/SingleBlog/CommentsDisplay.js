import React from 'react';

const CommentsDisplay = ({ comments, deleteComment }) => {
  return (
    <>
      <h2>Comments</h2>
      {comments ? (
        comments.map((comment) => {
          return (
            <div
              key={comment._id}
              style={{
                display: 'flex',
                marginBottom: '12px',
                backgroundColor: '#e7e7e7',
                padding: '7px 14px',
                borderRadius: '7px',
              }}
            >
              <div style={{ width: '95%' }}>
                <h5 style={{ margin: '5px 0px' }}>{comment.name}</h5>
                <p style={{ margin: '5px 0px' }}>{comment.body}</p>
              </div>
              <div
                onClick={() => deleteComment(comment._id)}
                style={{
                  width: '5%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p style={{ margin: 0, cursor: 'pointer' }}>&#x2716;</p>
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ padding: 10, border: '5px dashed #d3d3d3' }}>
          No Comments for this blog
        </div>
      )}
    </>
  );
};

export default CommentsDisplay;
