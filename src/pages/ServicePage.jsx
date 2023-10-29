import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherServiceContainer from '../components/OtherServiceContainer'
import { Helmet } from 'react-helmet'

const ServicePage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>Xidmətlərimiz</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Xidmətlərimiz" otherHeaderPagesLink="XİDMƏTLƏRİMİZ" />
            <main>
                <section>
                    <OtherServiceContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ServicePage