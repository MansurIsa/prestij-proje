import React, { useEffect } from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherPublicationContainer from '../components/OtherPublicationContainer'
import { Helmet } from 'react-helmet'

const PublicationPage = ({otherPageBanner}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Helmet>
                <title>Nəşrlərimiz</title>
                <meta name="description" content="NƏŞRLƏRİMİZ"/>
                <meta name="keywords" content="Prestij-S, Tedris merkezi, Prestij-S Tedris merkezi, Ingilis dili kurslar, xarici dil kurslar, abituriyent hazirliqi, magistr hazirliqi, rus dili kurslari, suruculuk kurslari, kompyuter kurslari, Dil hazirliqi, Texnikumlara hazirliq, Mektebeqeder hazirliq, Ibtidai hazirliq, Tibb kurslari, Muhasibatliq kurslari, Dovlet qulluguna hazirliq, Tedris merkezi, Ali mekteblere hazirliq, hazirliq kurslar" />
                <link rel="canonical" href="https://prestij-s.com/nesrlerimiz" />
                <meta property="og:locale" content="az_AZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="NƏŞRLƏRİMİZ" />
                <meta property="og:description" content="NƏŞRLƏRİMİZ" />
                <meta property="og:url" content="https://prestij-s.com/nesrlerimiz" />
                <meta property="og:site_name" content="PRESTIJ-S" />
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