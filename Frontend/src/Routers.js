import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { SectorContextProvider } from './Context/ApiContext';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/home';
import Health from './Pages/health';
import Politics from './Pages/politics';
import Science from './Pages/science';
import World from './Pages/World'


function Routers() {
  return (
    <>
      <Router>
        <SectorContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health" element={<Health />} />
            <Route path="/politic" element={<Politics />} />
            <Route path="/science" element={<Science />} />
            <Route path="/world" element={<World />} />
          </Routes>
          <Footer />
        </SectorContextProvider>
      </Router>
    </>
  );
}

export default Routers;
