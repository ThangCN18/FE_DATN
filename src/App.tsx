import { Fragment } from "react";
import { Col, DatePicker } from "antd";
import { Routes, Route } from 'react-router-dom'

import HomePage from "./pages/HomePage";

const App = () => {
  return (
    // Set Up Routes for website.
    <Routes>
      <Route path='/' element={<HomePage />} />
    
  </Routes>
  );
};

export default App;
