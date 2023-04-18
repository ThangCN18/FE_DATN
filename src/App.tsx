import { Fragment, useEffect, useState } from "react";
import { Col, DatePicker } from "antd";
import { Routes, Route, useLocation  } from 'react-router-dom'

import AdminHomePage from "./pages/AdminHomePage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/types";
import NotificationComponent from "./components/NotificationComponent";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ProfilePage from "./pages/ProfilePage";
import AboutUsPage from "./pages/AboutUsPage";
import AdminUserPage from "./pages/AdminUserPage"
import AdminRoadmapPage from "./pages/AdminRoadmapPage"
import AdminCoursePage from "./pages/AdminCoursePage";
import AdminCourseDetailPage from "./pages/AdminCourseDetailPage";
import CoursesPage from "./pages/CoursesPage";
import DetailCoursesPage from "./pages/DetailCoursePage";
import { unsetLoading } from "./store/loadSlice";
import AdminReviewPage from "./pages/AdminReviewPage";
import DetailCourseLearnPage from "./pages/DetailCourseLearnPage";
import RoadmapsPages from "./pages/RoadmapsPages";
import DetailRoadmapsPages from "./pages/DetailRoadmapsPages";
import MyCoursePage from "./pages/MyCoursePage";



const App = () => {

  const auth = useSelector((state: RootState) => state.root.auth)
  const location = useLocation();
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [location.pathname])

  useEffect(()=>{
    dispatch(unsetLoading({}))
  }, [])
  


  return (
    // Set Up Routes for website.
    <>
    <Routes>
      {
        auth.user?<>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/learn/:id' element={<DetailCourseLearnPage/>} />
        <Route path='/my-courses' element={<MyCoursePage/>} />
        {
        auth.user.role != "user"?<>
        <Route path='/admin' element={<AdminHomePage/>} />
        <Route path='/admin/roadmap' element={<AdminRoadmapPage />} />
        <Route path='/admin/course/:id' element={<AdminCourseDetailPage/>} />
        <Route path='/admin/course' element={<AdminCoursePage/>} />
        <Route path='/admin/review' element={<AdminReviewPage/>} />
        {
        auth.user.role == "admin"?<>
        <Route path='/admin/user' element={<AdminUserPage />} />
       
        </>
        : null}
        </>
        : null}
        </>
        : null
      }
      <Route path='/about-us' element={<AboutUsPage />} />
      <Route path='/roadmaps' element={<RoadmapsPages />} />
      <Route path='/roadmap/:id' element={<DetailRoadmapsPages />} />
      <Route path='/course/:id' element={<DetailCoursesPage />} />
      <Route path='/courses' element={<CoursesPage />} />
      <Route path='/verify-email' element={<VerifyEmailPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/*' element={<ErrorPage />} />
      

  </Routes>
  <NotificationComponent/>
  </>
  );
};

export default App;
