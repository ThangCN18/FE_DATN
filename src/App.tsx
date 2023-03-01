import { Fragment } from "react";
import { Col, DatePicker } from "antd";
import { Routes, Route } from 'react-router-dom'

import Admin from "./pages/HomePageAdmin";
import HomePage from "./pages/Homepage";

const App = () => {
  return (
    // Set Up Routes for website.
    <Routes>
      <Route path='/admin' element={<Admin />} />
      <Route path='/' element={<HomePage />} />
    
  </Routes>
  );
};

export default App;
