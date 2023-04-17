import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/generalComps/Header'
import SavedMeals from './pages/SavedMeals'
import ShareMeal from './pages/ShareMeal'
import Footer from './components/generalComps/Footer'

function App() {

  return (
    <>
      <Router>
        <Header />
        {/* <DashboardShell /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/savedMeals' element={<SavedMeals />} />
            <Route path='/sharemeal' element={<ShareMeal />} />
          </Routes>
          <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App