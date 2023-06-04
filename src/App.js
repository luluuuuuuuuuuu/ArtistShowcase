
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import TourMapPage from './Pages/TourMapPage.jsx';
import NoPage from './Pages/NoPage.jsx';
import { TourMapProvider } from './Context/TourMapContext';

function App() {
  return (
    <BrowserRouter>
      <TourMapProvider>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/luluuuuuuuuuuu/BandWeb" element={<HomePage />} />
          <Route path="/live" element={<TourMapPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </TourMapProvider>
    </BrowserRouter>
  );
}

export default App;

