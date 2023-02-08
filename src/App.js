import React from "react";
import Home from './container/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title1 from '../src/components/Title1';
import Title2 from '../src/components/Title2';
import Title3 from '../src/components/Title3'


function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/title1" element={<Title1 />} />
            <Route path="/title2" element={<Title2 />} />
            <Route path="/title3" element={<Title3 />} />
  
          </Routes>
        </BrowserRouter>
        <div>
          {/* <Home/> */}
        </div>
      </div>
      
    );
  }
  
  export default App;