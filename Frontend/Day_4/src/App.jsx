import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Join from './pages/Join'
import Destination from './pages/Destination'
import Wedding from './pages/Wedding'
import Corporate from './pages/Corporate'
import Birthday from './pages/Birthday'
import School from './pages/School'
import Privacy from './pages/Privacy'
import { useState } from 'react'
import Header from './admin/Header'
import Adminhome from './admin/Adminhome'
import Sidebar from './admin/Sidebar'
import Admin from './admin/Admin'
import Firstpage from './components/Firstpage'
import Profile from './pages/Profile'
import AddUser from './users/AddUser'
import EditUser from './users/EditUser'
import ViewUser from './users/ViewUser'
import Report from './admin/Report'


function App() {
  
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Firstpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/des" element={<Destination/>}/>
        <Route path="/wed" element={<Wedding/>}/>
        <Route path="/corporate" element={<Corporate/>}/>
        <Route path="/birthday" element={<Birthday/>}/>
        <Route path="/school" element={<School/>}/>
        <Route path="/head" element={<Header/>}/>
        <Route path="/home" element={<Adminhome/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/first" element={<Firstpage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route  path="/adduser" element={<AddUser />} />
        <Route  path="/edituser/:id" element={<EditUser />} />
        <Route  path="/viewuser/:id" element={<ViewUser />} />
        <Route  path="/repo" element={<Report />} />
        </Routes>
      </Router>
  )
}

export default App
