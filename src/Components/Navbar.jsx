import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/auth';
import '../Style/Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link className="nav-logo" to="/">MyApp</Link>
            </div>

            <div className="nav-right">
                {isAuthenticated() ? (
                    <>
                        <Link className="nav-link" to="/students">Students</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/courses">Courses</Link>
                        <Link className='nav-link' to="/create_student">Student_form</Link>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link className="nav-link login-btn" to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
