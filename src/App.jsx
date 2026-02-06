import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/layout/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import FormDirector from './pages/FormDirector';
import SubmitMovie from './pages/SubmitMovie';
// import Registration from './pages/Register';
// import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/form-director" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Movies />} />
        <Route path="/form-director" element={<FormDirector />} />
        <Route path="/submitMovie" element={<SubmitMovie />} />
        {/* <Route path="/registration" element={<Registration />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;