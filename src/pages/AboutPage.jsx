import React from 'react'
import OtherAboutContainer from '../components/OtherAboutContainer'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const AboutPage = ({ otherPageBanner }) => {
  return (
    <div>
      <Helmet>
        <title>Haqqımızda</title>
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