import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Newsletter from './pages/Newsletter';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element = {<Home/>} />
          <Route path='/about' exact element = {<About/>} />
          <Route path='/newslatter' exact element = {<Newsletter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
