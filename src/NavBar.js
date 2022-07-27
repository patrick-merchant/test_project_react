import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="text-primary"><i className="bi bi-diagram-2-fill"></i>A Posts Endpoint</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;