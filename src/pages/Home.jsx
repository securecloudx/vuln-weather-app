import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/securecloudx-logo.jpg'
import CountdownTimer from '../components/CountdownTimer'
import HackTitle from '../components/HackTitle'

const Home = () => {

const [password, setPassword] = useState('')


  const [username, setUsername] = useState('')
  const navigate = useNavigate()

//   localStorage.setItem('token', 'bypassed-token')
// localStorage.setItem('user', 'attacker')
// window.location.href = '/dashboard'


  {/* ⚠️ Client-side only validation: easily bypassed via DevTools or JS console */}

 const handleLogin = () => {
  if (!username.trim()) {
    alert('Username is required.')
    return
  }

  if (!password.trim()) {
    alert('Password is required.')
    return
  }

  // 👇 Simulate insecure login with hardcoded bypass
  if (username === 'admin' && password === 'letmein') {
    // Fake backdoor
    localStorage.setItem('token', 'admin-token')
  } else {
    // No real authentication
    localStorage.setItem('token', 'fake-jwt-token')
  }

  localStorage.setItem('user', username.trim())
  navigate('/dashboard')
}



 return (
  <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-300 px-4 py-6">
    
    {/* 🔐 Hackathon/Login Box */}
    <div className="flex items-center justify-center flex-grow">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
        {/* 🧩 Hackathon Info Panel */}
        <div className="bg-blue-600 text-white p-8 md:w-1/2 flex flex-col justify-center items-start text-left">
          <div className="w-full flex justify-center mb-4">
            <img
              src={logo}
              alt="securecloudX logo"
              className="w-14 h-14 rounded-full object-cover shadow-md"
            />
          </div>
          <HackTitle />
          <p className="text-lg mb-3">
            48 Hrs. Real Code. Real Security. Real Cloud. Your mission: <strong>exploit, secure, and survive</strong> the gauntlet.
          </p>
          <ul className="list-disc list-inside mb-4 text-sm space-y-1">
            <li>🟢 Tracks from Noob to Ninja</li>
            <li>💥 Break vulnerable apps • 🛠️ Patch & Defend</li>
            <li>☁️ Ship to Cloud • 🔐 Apply Real Security Controls</li>
          </ul>
          <CountdownTimer />
        </div>

        {/* 👤 Login Panel */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">🌤️ Vuln Weather App</h1>
          <input
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
         <input
  type="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="border p-3 w-full rounded mb-4"
/>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>

    {/* 💬 Founder Quote at Bottom */}
    <div className="mt-10 px-4 max-w-2xl mx-auto text-sm text-gray-800 italic text-center">
      <blockquote className="border-l-4 border-blue-400 pl-4">
        “I built <a href="https://securecloudx.pages.dev" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">SecureCloudX</a> because I couldn’t find a platform that taught cloud security in a practical way. 
         If you can break it, you can defend it. And if you can defend it, you can own your future. No credentials required — just grit and curiosity.”
        <footer className="mt-2 text-right font-semibold text-blue-700">— Ronney Otieno, Founder</footer>
      </blockquote>
    </div>
  </div>
)

}

export default Home
