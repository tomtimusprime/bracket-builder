import './App.css';
import BracketBoard from './components/Pages/BracketBoard';
import Header from './components/UI/Header';
import Home from './components/Pages/Home';
import { Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [bracketSize, setBracketSize] = useState(0);
  return (
    <div className='App'>
      {/*<Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/board" element={<BracketBoard />} />
      </Routes>*/}
      <Header setBracketSize={setBracketSize}/>
      <BracketBoard className='container' bracketSize={bracketSize}></BracketBoard>
    </div>
  );
}

export default App;
