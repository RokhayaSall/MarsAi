import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
// import FormDirector from './pages/FormDirector'; 
import Auth from './pages/Auth';
// import Login from './pages/Login';


import './App.css'

function App() {



  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/gallery' element={<Movies/>} />
      <Route path='/auth' element={<Auth/>} />
      {/* <Route path='/form-director' element={<FormDirector/>} />
      <Route path='/registration' element={<Registration/>} />
      <Route path='/login' element={<Login/>} /> */}
    </Routes>
  </ BrowserRouter>

  )
}

export default App
