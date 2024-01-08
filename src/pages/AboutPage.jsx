import React, { useEffect } from 'react'
import OtherAboutContainer from '../components/OtherAboutContainer'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const AboutPage = ({ otherPageBanner }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Haqqımızda</title>
        <meta name="description" content="&nbsp;
          PRESTIJ-S tədris mərkəzi 2010-cu ildən keyfiyyətli tədrisi ilə xidmətinizdədir!
          Mərkəzdə qısa vaxt ərzində müasir dövrün tələblərinə uyğun olan tədris metodlarından istifadə ed"/>
        <meta name="keywords" content="Prestij-S, Tedris merkezi, Prestij-S Tedris merkezi, Ingilis dili kurslar, xarici dil kurslar, abituriyent hazirliqi, magistr hazirliqi, rus dili kurslari, suruculuk kurslari, kompyuter kurslari, Dil hazirliqi, Texnikumlara hazirliq, Mektebeqeder hazirliq, Ibtidai hazirliq, Tibb kurslari, Muhasibatliq kurslari, Dovlet qulluguna hazirliq, Tedris merkezi, Ali mekteblere hazirliq, hazirliq kurslar" />
        <link rel="canonical" href="https://prestij-s.com/haqqimizda" />
        <meta property="og:locale" content="az_AZ" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HAQQIMIZDA" />
        <meta property="og:description" content="&nbsp;
        PRESTIJ-S tədris mərkəzi 2010-cu ildən keyfiyyətli tədrisi ilə xidmətinizdədir!
        Mərkəzdə qısa vaxt ərzində müasir dövrün tələblərinə uyğun olan tədris metodlarından istifadə ed"/>
        <meta property="og:url" content="https://prestij-s.com/haqqimizda" />
        <meta property="og:site_name" content="PRESTIJ-S" />
      </Helmet>
      <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Haqqımızda" otherHeaderPagesLink="HAQQIMIZDA" />
      <main>
        <section>
          <OtherAboutContainer />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage