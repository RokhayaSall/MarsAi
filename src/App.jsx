import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import FormDirector from './pages/FormDirector';
import SubmitMovie from './pages/SubmitMovie';
import Auth from './pages/Auth';
import DashboardAdmin from './pages/DashbordAdminPage/DashbordAdmin';
import AdminJury from './pages/DashbordAdminPage/AdminJury';
import AdminConfig from './pages/DashbordAdminPage/AdminConfig';
import AdminEvents from './pages/DashbordAdminPage/AdminEvents';
import AdminMovies from './pages/DashbordAdminPage/AdminMovies';
import AdminMoviesResult from './pages/DashbordAdminPage/AdminMoviesResult';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Movies />} />
          <Route path="/form-director" element={<FormDirector />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/submitMovie" element={<SubmitMovie />} />

          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/jury" element={<AdminJury />} />
          <Route path="/admin/config" element={<AdminConfig />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/films" element={<AdminMovies />} />
          <Route path="/admin/results" element={<AdminMoviesResult />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;