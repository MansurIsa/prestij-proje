import React from 'react'
import { Helmet } from 'react-helmet'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherExamResultsContainer from '../components/OtherExamResultsContainer'

const ExamResults = ({otherPageBanner}) => {
  return (
    <div>
    <Helmet>
        <title>Xidmətlərimiz</title>
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