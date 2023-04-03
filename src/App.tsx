import { Fragment } from "react";
import { Col, DatePicker } from "antd";
import { Routes, Route } from 'react-router-dom'

import AdminHomePage from "./pages/AdminHomePage";
import HomePage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import { useSelector } from "react-redux";
import { RootState } from "./store/types";
import NotificationComponent from "./components/NotificationComponent";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ProfilePage from "./pages/ProfilePage";


const App = () => {

  const auth = useSelector((state: RootState) => state.root.auth)


  return (
    // Set Up Routes for website.
    <>
    <Routes>
      {
        auth.user?<>
        <Route path='/profile' element={<ProfilePage />} />
        {
        auth.user.role != "user"?<>
        <Route path='/admin' element={<AdminHomePage />} />


       
        </>
        : null}
        </>
        : null
      }
      
      <Route path='/verify-email' element={<VerifyEmailPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/*' element={<ErrorPage />} />
      

  </Routes>
  <NotificationComponent/>
  </>
  );
};

export default App;
