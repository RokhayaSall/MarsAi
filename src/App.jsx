import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import FormDirector from './pages/FormDirector';
// import Registration from './pages/Register';
// import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Movies />} />
          <Route path="/form-director" element={<FormDirector />} />
          {/* <Route path='/registration' element={<Registration/>} />
      <Route path='/login' element={<Login/>} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
