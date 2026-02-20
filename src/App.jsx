import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoute from './routes/AdminRoutes';
import Header from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import FormDirector from './pages/FormDirector';
import Auth from './pages/Auth';
import DashbordAdmin from './pages/DashbordAdminPage/DashbordAdmin';
import AdminJury from './pages/DashbordAdminPage/AdminJury';
import AdminConfig from './pages/DashbordAdminPage/AdminConfig';
import AdminEvents from './pages/DashbordAdminPage/AdminEvents';
import AdminMovies from './pages/DashbordAdminPage/AdminMovies';
import AdminMoviesResult from './pages/DashbordAdminPage/AdminMoviesResult';
import SubmitMovie from './pages/SubmitMovie';
import DashboardJury from './pages/DashboardJury';
import JuryRoutes from './routes/JuryRoutes';
import { AuthProvider } from './context/AuthProvider';
import MoviePage from './pages/MovieDetail';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Movies />} />
            <Route path="/form-director" element={<FormDirector />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/submit-movie" element={<SubmitMovie />} />
            <Route path="/movie-detail/:id" element={<MoviePage />} />

            {/* ROUTES JURY PROTÉGÉES */}
            <Route path="/dashboard/jury" element={<JuryRoutes><DashboardJury /></JuryRoutes>}/>
            
            {/* ROUTES ADMIN PROTÉGÉES */}
            <Route path="/admin" element={<AdminRoute><DashbordAdmin /></AdminRoute>} />
            <Route path="/admin/jury" element={<AdminRoute><AdminJury /></AdminRoute>} />
            <Route path="/admin/config" element={<AdminRoute><AdminConfig /></AdminRoute>} />
            <Route path="/admin/events" element={<AdminRoute><AdminEvents /></AdminRoute>} />
            <Route path="/admin/films" element={<AdminRoute><AdminMovies /></AdminRoute>} />
            <Route path="/admin/results" element={<AdminRoute><AdminMoviesResult /></AdminRoute>} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;