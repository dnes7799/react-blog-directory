import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/'><h2>My Blog</h2> </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create">New Blog</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    );
}

export default Navbar;
