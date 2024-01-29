import React, { useEffect } from 'react'
import {  Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home'
import AboutPage from './pages/AboutPage';
import LuckPage from './pages/LuckPage';
import ServicePage from './pages/ServicePage';
import NewsPage from './pages/NewsPage';
import FotoPage from './pages/FotoPage';
import VideoPage from './pages/VideoPage';
import PublicationPage from './pages/PublicationPage';
import ContactPage from './pages/ContactPage';
import CVSendPage from './pages/CVSendPage';
import DetailNewsPage from './pages/DetailNewsPage';
import DetailServicePage from './pages/DetailServicePage';
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsList, getUser } from './actions/MainAction';
import { Helmet } from 'react-helmet';
import HeaderLoading from './components/loading/HeaderLoading';
import DetailTeacherPage from './pages/DetailTeacherPage';
import DetailPublicationPage from './pages/DetailPublicationPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Accounting2Page from './pages/Accounting2Page';
import BranchsCategory2 from './pages/BranchsCategory2';
import BranchsStudentsAcountingPage from './pages/BranchsStudentsAcountingPage';
import BranchsAbiturientsAccountingPage from './pages/BranchsAbiturientsAccountingPage';

import BranchsTeachersAccountingPage from './pages/BranchsTeachersAccountingPage';
import BranchsAccountingAbiturient from './pages/BranchsAccountingAbiturient';

import BranchsAccountingTeachers from './pages/BranchsAccountingTeachers';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteRegister from './components/PrivateRouteRegister';
import NotificationPage from './pages/NotificationPage';
import CourseOnlineRegisterPage from './pages/CourseOnlineRegisterPage';
import ExamResults from './pages/ExamResults';

const App = () => {
  const dispatch = useDispatch()
  const { loggedInUser, settingsListArr, otherHeaderBannerLoading } = useSelector(state => state.Data)

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(getSettingsList())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUser(localStorage.getItem('loggedInEmail')))
  }, [dispatch])

 
  

  return (
    <div>
      <Helmet>
        {
          settingsListArr[0]?.favicon_active ?
            <link rel='icon' href={settingsListArr[0]?.favicon} /> :
            null
        }
        <title></title>


      </Helmet>


      <Routes>
        <Route path='/' element={<Home />} />
        {
          settingsListArr[0]?.about_page_active ?
            <Route path='/haqqimizda' element={<AboutPage otherPageBanner={settingsListArr[0]?.about_page_banner} />} />
            : <Route path='*' element={<Home />} />

        }
        {
          settingsListArr[0]?.success_page_active ?
            <Route path='/ugurlarimiz' element={<LuckPage otherPageBanner={settingsListArr[0]?.success_page_banner} />} />
            : <Route path='*' element={<Home />} />
        }
        {
          settingsListArr[0]?.service_page_active ?
            <Route path='/xidmetlerimiz' element={<ServicePage otherPageBanner={settingsListArr[0]?.service_page_banner} />} />
            : <Route path='*' element={<Home />} />
        }


        <Route path='/xidmetlerimiz/:title/:id' element={<DetailServicePage otherPageBanner={settingsListArr[0]?.service_page_banner} />} />
        {
          settingsListArr[0]?.news_page_active ?
            <Route path='/xeberler' element={<NewsPage otherPageBanner={settingsListArr[0]?.news_page_banner} />} />
            : <Route path='*' element={<Home />} />
        }

        <Route path='/xeberler/:title/:id' element={<DetailNewsPage otherPageBanner={settingsListArr[0]?.news_page_banner} />} />
        <Route path='/müəllim/:name/:id' element={<DetailTeacherPage otherPageBanner={settingsListArr[0]?.news_page_banner} />} />
        {
          settingsListArr[0]?.gallery_page_active ?
            <Route path='/foto' element={<FotoPage otherPageBanner={settingsListArr[0]?.gallery_page_banner} />} />
            : <Route path='*' element={<Home />} />
        }

        <Route path='/video' element={<VideoPage otherPageBanner={settingsListArr[0]?.gallery_page_banner} />} />
        <Route path='/nesrlerimiz/:title/:id' element={<DetailPublicationPage otherPageBanner={settingsListArr[0]?.edition_page_banner} />} />
        {
          settingsListArr[0]?.edition_page_active ?
            <Route path='/nesrlerimiz' element={<PublicationPage otherPageBanner={settingsListArr[0]?.edition_page_banner} />} />
            : <Route path='*' element={<Home />} />
        }
        {
          settingsListArr[0]?.contact_page_active ?
            <Route path='/elaqe' element={<ContactPage otherPageBanner={settingsListArr[0]?.contact_page_banner} />} />
            : <Route path='*' element={<Home />} />
        }

        {
          settingsListArr[0]?.resume_page_active ?
            <Route path='/cv-gonder' element={<CVSendPage otherPageBanner={settingsListArr[0]?.resume_page_banner} />} />
            : <Route path='*' element={<Home />} />
        }

        <Route path='/course-online-register' element={<CourseOnlineRegisterPage otherPageBanner={settingsListArr[0]?.resume_page_banner} />} />


        {
          settingsListArr[0]?.service_page_active ?
            <Route path='/imtahan-neticeleri' element={<ExamResults otherPageBanner={settingsListArr[0]?.service_page_banner} />} />
            : <Route path='*' element={<Home />} />
        }

        <Route path='/register' element={<PrivateRouteRegister Element={RegisterPage} />} />
        <Route path='/notification' element={<PrivateRouteRegister Element={NotificationPage} />} />
        <Route path='/login' element={<LoginPage />} />
       
        <Route path='/branchs-category/:id' element={<PrivateRoute Element={BranchsCategory2} />} />
        {/* ..... */}
        <Route path='/category/:id' element={<PrivateRoute Element={BranchsAbiturientsAccountingPage} />} />
        {/* ..... */}
        <Route path='/branchs-teachers-accounting' element={<PrivateRoute Element={BranchsTeachersAccountingPage} />} />
        <Route path='/branchs-students-accounting' element={<PrivateRoute Element={BranchsStudentsAcountingPage} />} />
        <Route path='/branchs-abiturient-accounting' element={<PrivateRoute Element={BranchsAbiturientsAccountingPage} />} />
       
        <Route path="/accounting" element={<PrivateRoute Element={Accounting2Page} />} />




        <Route path='/branchs-accounting-abiturient' element={<PrivateRoute Element={BranchsAccountingAbiturient} />} />
       
        <Route path='/branchs-accounting-teachers' element={<PrivateRoute Element={BranchsAccountingTeachers} />} />

        <Route path="*" render={redirectToHome} />
      </Routes>

      {otherHeaderBannerLoading && <HeaderLoading />}
    </div>
  )
}

export default App