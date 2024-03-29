import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherExamResultsContainer from '../components/OtherExamResultsContainer'

const ExamResults = ({otherPageBanner}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);


  return (
    <div>
    <Helmet>
        <title>Imtahan nəticələri</title>
    </Helmet>
    <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="İmtahan Nəticələri" otherHeaderPagesLink="İMTAHAN NƏTİCƏLƏRİ" />
    <main>
        <section>
            <OtherExamResultsContainer/>
        </section>
    </main>
    <Footer />
</div>
  )
}

export default ExamResults