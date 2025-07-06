import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size'

const HACKATHON_END = new Date('2025-07-03T12:00:00Z') // Adjust to your hackathon end time

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const [width, height] = useWindowSize()
  const isTimeUp = timeLeft.total <= 0

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  function getTimeLeft() {
    const now = new Date()
    const diff = HACKATHON_END - now
    const total = Math.max(0, diff)
    const hours = Math.floor(total / (1000 * 60 * 60))
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((total % (1000 * 60)) / 1000)
    return { hours, minutes, seconds, total }
  }

  return (
    <div className="relative w-full">
      {isTimeUp && <Confetti width={width} height={height} />}

      <div className="text-sm bg-white text-blue-700 px-4 py-2 rounded-lg font-mono font-semibold mb-4">
        {isTimeUp ? (
          <span className="text-red-600 font-bold">⛔ Coming soon</span>
        ) : (
          <>⏳ Time Left: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</>
        )}
      </div>
    </div>
  )
}

export default CountdownTimer
