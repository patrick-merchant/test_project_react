import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>A Posts Endpoint</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;