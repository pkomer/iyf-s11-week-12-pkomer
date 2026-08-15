import { useNavigate, NavLink } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // Clear user data
        navigate('/');  // Redirect to home
    };
    
    return (
        <nav>
            {/* NavLink adds active class automatically */}
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                Home
            </NavLink>
            <NavLink to="/posts">Posts</NavLink>
            
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}

export default Navigation;