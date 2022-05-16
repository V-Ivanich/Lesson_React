
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NaviBar from './Components/Navibar';
import Home from './Home';
import Users from './Users';
import About from './About';


function App() {
   return (
     <>
     
    <Router>
    <NaviBar />
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/users' element={<Users />} />
    <Route path='/about' element={<About />} />
    </Routes>

    </Router>
    </>
  );
}
export default App;
