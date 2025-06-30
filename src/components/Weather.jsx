import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Weather = () => {
  const navigate = useNavigate()
  const storedUser = localStorage.getItem('user')
  const username = storedUser?.trim() || 'Guest'

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      setWeather(response.data)
    } catch {
      alert('City not found or API error.')
    }
  }

  const formatTime = (timezoneOffset) => {
    const localTime = new Date(Date.now() + timezoneOffset * 1000)
    return localTime.toUTCString().slice(17, 22)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
        {/* 🔙 Back to Home */}
        <div className="mb-4 flex justify-between items-center">
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            ← Back to Home
          </Link>
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:underline cursor-pointer"
          >
            Logout
          </button>
        </div>

        <h2 className="text-sm font-semibold mb-4">welcome back, {username} 👋</h2>

        <h2 className="text-2xl font-bold text-center mb-6">Check the Weather</h2>

        <input
          className="border w-full p-3 rounded mb-4"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mb-4 transition cursor-pointer"
        >
          Get Weather
        </button>

        {weather && (
          <div className="text-center bg-blue-50 p-4 rounded-xl">
            <h3 className="text-xl font-semibold mb-1">
              {weather.name}, {weather.sys.country}
            </h3>
            <p className="text-gray-600 capitalize mb-2">
              {weather.weather[0].description}
            </p>
            <p className="text-4xl font-bold text-blue-700 mb-4">
              {weather.main.temp}°C
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-left text-gray-700">
              <p>🌡️ Feels Like: {weather.main.feels_like}°C</p>
              <p>💧 Humidity: {weather.main.humidity}%</p>
              <p>🌬️ Wind Speed: {weather.wind.speed} m/s</p>
              <p>🕐 Local Time: {formatTime(weather.timezone)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather
