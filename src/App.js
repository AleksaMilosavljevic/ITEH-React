import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './pages/Pocetna';
import Prijava from './pages/Prijava';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="prijava" element={<Prijava />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
