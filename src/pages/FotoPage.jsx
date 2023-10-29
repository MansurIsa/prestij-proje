import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherFotoContainer from '../components/OtherFotoContainer'
import { Helmet } from 'react-helmet'

const FotoPage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>Şəkillər</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Foto" otherHeaderPagesLink="FOTO" />
            <main>
                <section>
                    <OtherFotoContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default FotoPage