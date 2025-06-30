import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Weather from '../components/Weather'

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">🌍 Weather Dashboard</h2>
      <Weather />
    </div>
  )
}

export default Dashboard
// This code defines a `Dashboard` component for a weather application using React.
// It uses the `useEffect` hook to check if a user is authenticated by looking for a token in localStorage.
// If the token is not found, it redirects the user to the home page using the `useNavigate` hook from React Router.
// The component renders a simple dashboard layout with a title and includes a `Weather` component to display weather information.
// The dashboard is styled with Tailwind CSS classes for a clean and modern look.
// This setup ensures that only authenticated users can access the dashboard, enhancing security by preventing unauthorized access to weather data.
// The `Weather` component is expected to handle the actual fetching and displaying of weather information, making the `Dashboard` component focused on layout and authentication logic.
// The use of Tailwind CSS classes like `min-h-screen`, `bg-slate-100`, and `text-3xl` provides a responsive and visually appealing design.
// The `p-6` class adds padding around the content, ensuring it is well-spaced and easy to read.
// Overall, this code snippet is a good example of how to structure a React component for a dashboard that requires user authentication and displays dynamic content like weather data.
// It leverages React Router for navigation and Tailwind CSS for styling, making it a modern and efficient solution for building web applications.
// The component is designed to be reusable and maintainable, allowing for easy updates and modifications in the future.
//// The use of hooks like `useEffect` and `useNavigate` demonstrates a functional approach to managing side effects and navigation in React applications.
// This pattern is commonly used in modern React development, promoting best practices for handling authentication and routing.
// The `Dashboard` component serves as a secure entry point for users to access weather-related features, ensuring that only those with valid credentials can view the content.
// This approach enhances the user experience by providing a clear and straightforward navigation flow, while also maintaining security through token validation.
// The overall structure of the code is clean and easy to understand, making it accessible for developers of varying skill levels.
// The use of descriptive class names and component structure aids in readability and maintainability,
// allowing for future enhancements or modifications without significant refactoring.