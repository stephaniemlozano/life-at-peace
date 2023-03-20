import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element='home'/>
        <Route path='/aboutus' element='about us'/>
        <Route path='/services' element='services'/>
        <Route path='/contact' element='contact'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
