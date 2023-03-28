import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element='about us'/>
        <Route path='/services' element='services'/>
        <Route path='/contact' element='contact'/>
        <Route path='*' element={<h1>Oops, you've navigated to a page that does not exist!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
