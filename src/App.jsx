
import Header from "./components/Header";
import CommentSection from "./components/CommentSection";
import Footer from "./components/Footer";
import posts from "./data/posts";
import "./App.css";

import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import BlogPostsPage from "./components/BlogPostsPage";
import BlogPostPage from "./components/BlogPostPage";
import ContactPage from "./components/ContactPage";
import CommentForm from "./components/CommentForm";

function AppContent() {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <div className={`app ${theme}`}>
      <Header />

      <main
        id="home"
        className={location.pathname === "/contact" ? "contact-main" : ""}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="about">
                  <h2>Welcome to My Blog</h2>
                  <p>
                    Sharing my experiences learning web development.
                  </p>
                </section>

                <BlogPostsPage posts={posts} />
              </>
            }
          />

          <Route
            path="/blog"
            element={<BlogPostsPage posts={posts} />}
          />

          <Route
            path="/blog/:id"
            element={
              <>
                <BlogPostPage posts={posts} />
              </>
            }
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
