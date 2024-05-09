
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Layout/Navbar';
import Launches from './component/Pages/Launches';
import Overview from './component/Pages/Overview';
import Communication from './component/Pages/Communication';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/launches' element={<Launches />}></Route>
        <Route path='/overview' element={<Overview />}></Route>
        <Route path='/communication' element={<Communication />}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
