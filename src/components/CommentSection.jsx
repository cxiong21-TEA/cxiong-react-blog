// Manages the comment input and displays submitted comments.
// Uses React state to update the comment list.

import { useState } from "react";

function CommentSection() {
    const [comments, setComments] = useState([
        "Good Post!",
        "Great content!",
        "I learned a lot from this post!",
    ]);

    const [newComment, setNewComment] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    }

    return (
        <section className="comment-section">
            <h3>Comments</h3>

            <form onSubmit={handleSubmit}>
                <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                />
                <button type="submit">Submit Comment</button>
            </form>
            
            <h3>Recent Comments</h3>
            {comments.map((comment, index) => (
                <p className="comment" key={index}>
                    {comment}
                </p>
            ))}
        </section>
    );
}

export default CommentSection;