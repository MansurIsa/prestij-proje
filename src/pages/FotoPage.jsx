import React, { useEffect } from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherFotoContainer from '../components/OtherFotoContainer'
import { Helmet } from 'react-helmet'

const FotoPage = ({otherPageBanner}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Helmet>
                <title>Şəkillər</title>
                <meta name="description" content="Şəkillər" />
                <meta name="keywords" content="Prestij-S, Tedris merkezi, Prestij-S Tedris merkezi, Ingilis dili kurslar, xarici dil kurslar, abituriyent hazirliqi, magistr hazirliqi, rus dili kurslari, suruculuk kurslari, kompyuter kurslari, Dil hazirliqi, Texnikumlara hazirliq, Mektebeqeder hazirliq, Ibtidai hazirliq, Tibb kurslari, Muhasibatliq kurslari, Dovlet qulluguna hazirliq, Tedris merkezi, Ali mekteblere hazirliq, hazirliq kurslar" />
                <link rel="canonical" href="https://prestij-s.com/foto" />
                <meta property="og:locale" content="az_AZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Şəkillər" />
                <meta property="og:description" content="Şəkillər" />
                <meta property="og:url" content="https://prestij-s.com/foto" />
                <meta property="og:site_name" content="PRESTIJ-S" />
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