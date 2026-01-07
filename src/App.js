
import './App.css';
import HandleAPi from './Components/HandleAPi';
import Student from './Components/Student';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
           <Navbar/>
           <Routes>
            <Route path='/login' element={
              isAuthenticated() ? <Navigate to="/students" replace/> : <HandleAPi/>
            } />
            <Route path='/students' element={
              <ProtectedRoutes>
                <Student/>
              </ProtectedRoutes>
            } />
            <Route path='/' element={<h1>Welcome to Home Page</h1>} />  
           </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
