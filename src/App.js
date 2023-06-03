
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import TourMapPage from './Pages/TourMapPage.jsx';
import NoPage from './Pages/NoPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/luluuuuuuuuuuu/BandWeb" element={<HomePage />} />
        <Route path="/live" element={<TourMapPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
