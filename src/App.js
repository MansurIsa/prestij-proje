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
import BranchsMasterAccountingPage from './pages/BranchsMasterAccountingPage';
import BranchsMiqAccountingPage from './pages/BranchsMiqAccountingPage';
import BranchsCivilAccountingPage from './pages/BranchsCivilAccountingPage';
import BranchsForeignLanguageAccountingPage from './pages/BranchsForeignLanguageAccountingPage';
import BranchsComputerCourseAccountingPage from './pages/BranchsComputerCourseAccountingPage';
import BranchsAccountingAccountingPage from './pages/BranchsAccountingAccountingPage';
import BranchsHighSchoolAccountingPage from './pages/BranchsHighSchoolAccountingPage';
import BranchPreSchoolAccountingPage from './pages/BranchPreSchoolAccountingPage';
import BranchPrimarySchoolAccountingPage from './pages/BranchPrimarySchoolAccountingPage';
import BranchsTeachersAccountingPage from './pages/BranchsTeachersAccountingPage';
import BranchsAccountingAbiturient from './pages/BranchsAccountingAbiturient';
import BranchsAccountingMaster from './pages/BranchsAccountingMaster';
import BranchsAccountingMiq from './pages/BranchsAccountingMiq';
import BranchsAccountingCivil from './pages/BranchsAccountingCivil';
import BranchsAccountingComputerCourse from './pages/BranchsAccountingComputerCourse';
import BranchsAccountingForeignLang from './pages/BranchsAccountingForeignLang';
import BranchsAccountingAccounting from './pages/BranchsAccountingAccounting';
import BranchsAccountingHighSchool from './pages/BranchsAccountingHighSchool';
import BranchsAccountingPreSchool from './pages/BranchsAccountingPreSchool';
import BranchsAccountingPrimarySchool from './pages/BranchsAccountingPrimarySchool';
import BranchsAccountingTeachers from './pages/BranchsAccountingTeachers';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteRegister from './components/PrivateRouteRegister';
import NotificationPage from './pages/NotificationPage';
import CourseOnlineRegisterPage from './pages/CourseOnlineRegisterPage';

const App = () => {
  const dispatch = useDispatch()
  const { loggedInUser, settingsListArr, otherHeaderBannerLoading } = useSelector(state => state.Data)

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/prestij-project');
  };

  useEffect(() => {
    dispatch(getSettingsList())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUser(localStorage.getItem('loggedInEmail')))
  }, [dispatch])

  console.log(loggedInUser);

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
        <Route path='/prestij-project' element={<Home />} />
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
        <Route path='/branchs-master-accounting' element={<PrivateRoute Element={BranchsMasterAccountingPage} />} />
        <Route path='/branchs-miq-accounting' element={<PrivateRoute Element={BranchsMiqAccountingPage} />} />
        <Route path='/branchs-civil-accounting' element={<PrivateRoute Element={BranchsCivilAccountingPage} />} />
        <Route path='/branchs-foreignlanguage-accounting' element={<PrivateRoute Element={BranchsForeignLanguageAccountingPage} />} />
        <Route path='/branchs-computercourse-accounting' element={<PrivateRoute Element={BranchsComputerCourseAccountingPage} />} />
        <Route path='/branchs-accounting-accounting' element={<PrivateRoute Element={BranchsAccountingAccountingPage} />} />
        <Route path='/branchs-highschool-accounting' element={<PrivateRoute Element={BranchsHighSchoolAccountingPage} />} />
        <Route path='/branchs-preschool-accounting' element={<PrivateRoute Element={BranchPreSchoolAccountingPage} />} />
        <Route path='/branchs-primaryschool-accounting' element={<PrivateRoute Element={BranchPrimarySchoolAccountingPage} />} />

        <Route path="/accounting" element={<PrivateRoute Element={Accounting2Page} />} />




        <Route path='/branchs-accounting-abiturient' element={<PrivateRoute Element={BranchsAccountingAbiturient} />} />
        <Route path='/branchs-accounting-master' element={<PrivateRoute Element={BranchsAccountingMaster} />} />
        <Route path='/branchs-accounting-miq' element={<PrivateRoute Element={BranchsAccountingMiq} />} />
        <Route path='/branchs-accounting-civil' element={<PrivateRoute Element={BranchsAccountingCivil} />} />
        <Route path='/branchs-accounting-computer-course' element={<PrivateRoute Element={BranchsAccountingComputerCourse} />} />
        <Route path='/branchs-accounting-foreignlanguage' element={<PrivateRoute Element={BranchsAccountingForeignLang} />} />
        <Route path='/branchs-accounting-accounting2' element={<PrivateRoute Element={BranchsAccountingAccounting} />} />
        <Route path='/branchs-accounting-highschool' element={<PrivateRoute Element={BranchsAccountingHighSchool} />} />
        <Route path='/branchs-accounting-preschool' element={<PrivateRoute Element={BranchsAccountingPreSchool} />} />
        <Route path='/branchs-accounting-primaryschool' element={<PrivateRoute Element={BranchsAccountingPrimarySchool} />} />
        <Route path='/branchs-accounting-teachers' element={<PrivateRoute Element={BranchsAccountingTeachers} />} />

        <Route path="*" render={redirectToHome} />
      </Routes>

      {otherHeaderBannerLoading && <HeaderLoading />}
    </div>
  )
}

export default App