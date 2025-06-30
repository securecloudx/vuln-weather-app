import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Login = () => {

const location = useLocation()
const queryParams = new URLSearchParams(location.search)
const redirect = queryParams.get('redirect')

  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!username.trim()) {
      setError('Username is required.')
      return
    }

    // Simulate vulnerable login (no password, no validation)
    setError('')
    localStorage.setItem('token', 'fake-jwt-token')
    localStorage.setItem('user', username.trim())
    navigate(redirect || '/dashboard')

  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <input
        className="border p-2 w-full rounded mb-2"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
          if (error) setError('')
        }}
      />
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
      <button
        onClick={handleLogin}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
      >
        Login
      </button>
    </div>
  )
}

export default Login
