import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/Layout'
import StudySchedule from './pages/Home'
import './App.css'

/**
 * Root App component that sets up routing and layout structure
 */
function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<StudySchedule />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App 