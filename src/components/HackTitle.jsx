import { TypeAnimation } from 'react-type-animation'

const HackTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        '🔐 securecloudX-hack', // Type this out
        1500,                   // Wait 1.5s
        '',                     // Clear
        500,                    // Wait 0.5s
        '⚔️ break. fix. defend.', // Type again
        1500,
        '', 500,
        '☁️ from code to cloud',
        1500,
        '', 500,
      ]}
      wrapper="h2"
      cursor={true}
      repeat={Infinity}
      className="text-3xl font-bold mb-2"
    />
  )
}

export default HackTitle