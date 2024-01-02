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

  console.log(teachersListArr.filter(data => data.is_active === true));
  return (
    <div>
      <Helmet>
        <title>Əsas səhifə</title>
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