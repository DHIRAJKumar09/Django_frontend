import React, { useState } from 'react'
import API from '../api/axios'
import { useNavigate } from 'react-router-dom'
import '../Style/Login.css'

const HandleAPi = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await API.post('token/', {
        username,
        password
      })

      localStorage.setItem('token', res.data.access)
      localStorage.setItem('refreshToken', res.data.refresh)

      alert("Login Successful")
      navigate('/students')
    } catch (error) {
      console.log("Login failed", error)
      alert("Login Failed")
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button onClick={handleLogin} className="login-btn">
          Login
        </button>
      </div>
    </div>
  )
}

export default HandleAPi
