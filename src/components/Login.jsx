import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')

  const handleLogin = () => {
    // Insecure: saving fake JWT to localStorage
    localStorage.setItem('token', 'fake-jwt-token')
    alert(`Logged in as ${username}`)
  }

  return (
    <div className="p-4">
      <input
        className="border p-2"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} className="ml-2 px-4 py-2 bg-green-500 text-white">
        Login
      </button>
    </div>
  )
}

export default Login
