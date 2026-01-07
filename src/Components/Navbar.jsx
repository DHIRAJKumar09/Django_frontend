import {Link,useNavigate} from 'react-router-dom';import { isAuthenticated } from '../utils/auth';

import { logout } from '../utils/auth';

function Navbar(){
    const navigate = useNavigate();

    const handleLogout = ()=>{
        logout();
        navigate('/login');
    }
    return (
        <nav>
            <Link to='/'>Home</Link>
            {
                isAuthenticated() ? (
                    <>
                        <Link to='/students'>Students</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : 
                (
                    <Link to='/login'>Login</Link>
                )
            }
        </nav>
    )
}
export default Navbar;