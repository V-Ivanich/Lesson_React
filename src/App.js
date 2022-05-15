
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NaviBar from './Components/Navibar';

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';

const Case1 = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/users' element={<Users />} />
    <Route path='/about' element={<About />} />
    </Routes>
  )
}

function App() {
   return (
     
    <BrowserRouter>
    <NaviBar />
      <Case1 />
    </BrowserRouter>
  );
}
export default App;
