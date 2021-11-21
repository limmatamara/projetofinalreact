import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { SectorContextProvider } from './Context/ApiContext';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Health from "./Pages/Health";
import Home from './Pages/Home';
import Politic from "./Pages/Politic";
import ScienceAndTechnology from "./Pages/ScienceAndTechnology";
import World from "./Pages/World";


function Routers() {
  return (
    <>
      <Router>
        <SectorContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health" element={<Health />} />
            <Route path="/politic" element={<Politic />} />
            <Route path="/scienceandtechnology" element={<ScienceAndTechnology />} />
            <Route path="/world" element={<World />} />
          </Routes>
          <Footer />
        </SectorContextProvider>
      </Router>
    </>
  );
}

export default Routers;
