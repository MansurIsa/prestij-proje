import React, { useEffect } from 'react'
import HeaderHead from '../components/HeaderHead'
import SectionHeader from '../components/SectionHeader'
import VideoContainer from '../components/VideoContainer'
import News from '../components/News'
import ServicesHeaderImg from '../components/ServicesHeaderImg'
import Services from '../components/Services'
import About from '../components/About'
import Teachers from '../components/Teachers'
import NewLetter from '../components/NewLetter'
import HeaderMainContainer from '../components/HeaderMainContainer'
import Footer from '../components/Footer'
import MainFirstCards from '../components/MainFirstCards'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { getTeachersList } from '../actions/MainAction'

const Home = () => {

  const dispatch = useDispatch()
  const { teachersListArr } = useSelector(state => state.Data)

  useEffect(() => {
    dispatch(getTeachersList())
  }, [dispatch])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log(teachersListArr.filter(data => data.is_active === true));
  return (
    <div>
      <Helmet>
        <title>Prestij-s tədris mərkəzi</title>
        <meta name="description" content="Prestij-s tədris mərkəzi" />
        <meta name="keywords" content="Prestij-S, Tedris merkezi, Prestij-S Tedris merkezi, Ingilis dili kurslar, xarici dil kurslar, abituriyent hazirliqi, magistr hazirliqi, rus dili kurslari, suruculuk kurslari, kompyuter kurslari, Dil hazirliqi, Texnikumlara hazirliq, Mektebeqeder hazirliq, Ibtidai hazirliq, Tibb kurslari, Muhasibatliq kurslari, Dovlet qulluguna hazirliq, Tedris merkezi, Ali mekteblere hazirliq, hazirliq kurslar" />
        <link rel="canonical" href="https://prestij-s.com/" />
        <meta property="og:locale" content="az_AZ" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prestij-s tədris mərkəzi" />
        <meta property="og:description" content="Prestij-s tədris mərkəzi" />
        <meta property="og:url" content="https://prestij-s.com/" />
        <meta property="og:site_name" content="PRESTIJ-S" />



      </Helmet>
      
      <header className='home_header'>
        <HeaderHead />
        <HeaderMainContainer />
      </header>
      <main>
        <MainFirstCards />
        <section>
          <SectionHeader sectionHeader="Xəbərlər" sectionLink="Kursumuz haqqında ən son yenilikləri xəbərlər bölməsindən izləyin!" />
          <News />
        </section>
        <section className='services_section'>
          <ServicesHeaderImg />
          <SectionHeader sectionHeader="Xidmətlərimiz" sectionLink="Bizim kursumuz sizə aşağıdakı xidmətləri yüksək səviyyədə göstərir!" />
          <Services />
        </section>
        <section>
          <SectionHeader sectionHeader="Videoqalereya" sectionLink="Bütün videolara baxmaq üçün bura daxil olun »" />
          <VideoContainer />
        </section>
        <section>
          <SectionHeader sectionHeader="Haqqımızda" sectionLink="Bizim kursumuz sizə aşağıdakı xidmətləri yüksək səviyyədə göstərir!" />
          <About />
        </section>
        {teachersListArr.filter(data => data.is_active === true).length > 0 ?
          <section className='teachers_section'>
            <SectionHeader sectionHeader="Müəllimlərimiz" sectionLink="Kursumuzda dərs deyən yüksək səviyyəli müəllimlərimiz!" />
            <Teachers />
          </section> : null
        }

        {/* <section>
          <NewLetter />
        </section> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home