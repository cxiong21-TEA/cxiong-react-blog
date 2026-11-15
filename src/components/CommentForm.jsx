/* Referencing useState Video 8.2_useState from Module 10 */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function CommentForm({ postId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Please enter your name and comment.");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postId,
        name: name,
        body: comment,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post comment");
        }
        return response.json();
      })
      .then((data) => {
        setComments((previousComments) => [...previousComments, data]);
        setName("");
        setComment("");
      })
      .catch((error) => console.error("Error posting comment:", error));
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [postId]);

  return (
    <div className="comment-form">
      <h1>Comments</h1>
      <h2 className="text-2xl font-bold mb-3 text-gray-800">Add a Comment</h2>
      <textarea
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addComment}>Submit</button>
      {comments.length === 0 ? (
        <>
          <p>No comments yet.</p>
          <p>Be the first to comment.</p>
        </>
      ) : (
        <ul>
          {comments.map((c, index) => (
            <li key={index}>
              {c.name}: {c.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CommentForm;
