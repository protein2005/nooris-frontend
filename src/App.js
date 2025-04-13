import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import CategoryMenu from './pages/CategoryMenu';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import AdminPanel from './pages/AdminPanel';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="meny" element={<Menu />} />
          <Route path="meny/:category" element={<CategoryMenu />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="bokabord" element={<Booking />} />
          <Route path="admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
