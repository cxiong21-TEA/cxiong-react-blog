// import Link from "react-router"; https://reactrouter.com/api/components/Link

import { useTheme } from "./ThemeContext";
import { Link } from "react-router";

function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <header>
            <h1>My Blog</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </header>
    );
}

export default Header;