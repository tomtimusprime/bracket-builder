import './App.css';
import BracketBoard from './components/Pages/BracketBoard';
import Home from './components/Pages/Home';
import { Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/board" element={<BracketBoard />} />
      </Routes>
    </div>
  );
}

export default App;
