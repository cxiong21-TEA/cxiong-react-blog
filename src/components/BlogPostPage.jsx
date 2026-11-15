import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import BlogPost from "./BlogPost";

function BlogPostPage({ posts }) {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);

        fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
          .then((response) => response.json())
          .then((userData) => setUser(userData))
          .catch((error) => console.error("Error fetching user:", error));
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) {
    return <h2>Blog post lost!</h2>;
  }

  return (
    <div className="return-home">
      <Link to="/blog" className="return-home-link">
        Return
      </Link>

      <BlogPost
        id={post.id}
        title={post.title}
        content={post.fullcontent}
        author={post.author}
        date={post.date}
      />
    </div>
  );
}

export default BlogPostPage;
