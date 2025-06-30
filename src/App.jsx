import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
// This code defines the main application component for a React application using React Router.
// It imports the `Routes` and `Route` components from 'react-router-dom' to handle routing.
// The `App` component sets up two routes: the root path ("/") which renders the `Home` component,
// and the "/dashboard" path which renders the `Dashboard` component.
// This structure allows the application to navigate between the home page and the dashboard page,
// enabling a single-page application experience where components are rendered based on the current URL.
// The `App` component is then exported for use in the main entry point of the application, typically in `main.jsx` or `index.jsx`.
// This setup is common in modern React applications that require client-side routing to manage different views or pages within the app.
// It allows for a clean separation of concerns, where each route corresponds to a specific component that handles its own logic and rendering