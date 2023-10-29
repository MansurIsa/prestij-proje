import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherPublicationContainer from '../components/OtherPublicationContainer'
import { Helmet } from 'react-helmet'

const PublicationPage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>Nəşrlərimiz</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Nəşrlərimiz" otherHeaderPagesLink="NƏŞRLƏRİMİZ" />
            <main>
                <section>
                    <OtherPublicationContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default PublicationPage