import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherCVSendContainer from '../components/OtherCVSendContainer'
import { Helmet } from 'react-helmet'

const CVSendPage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>CV Göndər</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="CV Göndər" otherHeaderPagesLink="CV GÖNDƏR" />
            <main>
                <section>
                    <OtherCVSendContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default CVSendPage