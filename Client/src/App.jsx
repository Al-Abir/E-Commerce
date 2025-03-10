import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Pagenotfound from './pages/Pagenotfound'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Dashboard from './pages/user/Dashboard'
function App() {


  return (
    <>
      <Routes>
        <Route path='/'element={<HomePage></HomePage>}></Route>
        <Route path='/dashboard'element={<Dashboard></Dashboard>}></Route>
        <Route path='/register'element={<Register></Register>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/about'element={<About></About>}></Route>
        <Route path='/contact'element={<Contact></Contact>}></Route>
        <Route path='/policy'element={<Policy></Policy>}></Route>
        <Route path='*'element={<Pagenotfound></Pagenotfound>}></Route>
      </Routes>
    </>
  )
}

export default App
