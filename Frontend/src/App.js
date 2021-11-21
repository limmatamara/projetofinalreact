import { SectorContextProvider } from './Context/ApiContext';
import Routers from './Routers';

function App() {
  return (
    <div className="App">
      <SectorContextProvider>
        <Routers/>
      </SectorContextProvider>
    </div>
  );
}

export default App;
