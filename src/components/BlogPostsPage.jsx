import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";

function BlogPostsPage({ posts }) {
  const [apiPosts, setApiPosts] = useState([]);

  // Fetch blog posts from the API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("API response:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Fetched posts:", data);
        setApiPosts(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>All Blog Posts</h1>

      {apiPosts.map((post) => (
        <BlogPost
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default BlogPostsPage;
