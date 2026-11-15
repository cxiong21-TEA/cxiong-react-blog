// Reusable component that displays a blog post.
// Receives the title, content, author, and date through props.
// import Link from "react-router"; https://reactrouter.com/api/components/Link

import { useState } from "react";
import { Link } from "react-router";
import CommentForm from "./CommentForm";

function BlogPost({ id, title, content, author, date }) {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes((previousLikes) => previousLikes + 1);
  }

  return (
    <article className="blog-post">
      <h2>{title}</h2>

      <p>{content}</p>

      <p>
        By {author} on {date}
      </p>

      <button onClick={handleLike}>Like ({likes})</button>
      <p>
        {id != null && (
          <Link to={`/blog/${id}`} className="view-post">
            View Post
          </Link>
        )}
      </p>
      <CommentForm key={id} postId={id} />
    </article>
  );
}

export default BlogPost;
