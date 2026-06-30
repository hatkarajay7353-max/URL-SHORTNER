import { useState } from 'react'
import NavBar from './components/nav'
import './App.css'
import Home from './pages/mainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllURLS from './pages/allUrls';
import SignUp from './pages/signupPage';
import Login from './pages/Login';
function App() {
  const [count, setCount] = useState(0)
  return(
  <>
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/allUrls' element={<AllURLS/>}/>
            <Route exact path='/signUp' element={<SignUp/>}/>
            <Route exact path='/logIn' element={<Login/>}/>
        </Routes>
    </Router>
  </>
  )
}

export default App
