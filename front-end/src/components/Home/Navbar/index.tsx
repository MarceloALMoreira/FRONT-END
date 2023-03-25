import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navBar">

            <h2>
                <Link to={'/'}>“List posts”</Link>
            </h2>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/users`}>Users</Link>
                </li>
                <li>
                    <Link to={`/newpost`} className="new_post">New Post</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar