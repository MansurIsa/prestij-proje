import React from 'react'
import Footer from '../components/Footer'
import OtherHeader from '../components/OtherHeader'
import OtherNewsContainer from '../components/OtherNewsContainer'
import { Helmet } from 'react-helmet'

const NewsPage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>Xəbərlər</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Xəbərlər" otherHeaderPagesLink="XƏBƏRLƏR" />
            <main>
                <section>
                    <OtherNewsContainer/>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default NewsPage