import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import OtherHeader from '../components/OtherHeader'
import OtherNewsContainer from '../components/OtherNewsContainer'
import { Helmet } from 'react-helmet'

const NewsPage = ({otherPageBanner}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Xəbərlər</title>
                <meta name="description" content="Kursumuz haqqında ən son yenilikləri xəbərlər bölməsindən izləyin!" />
                <meta name="keywords" content="Prestij-S, Tedris merkezi, Prestij-S Tedris merkezi, Ingilis dili kurslar, xarici dil kurslar, abituriyent hazirliqi, magistr hazirliqi, rus dili kurslari, suruculuk kurslari, kompyuter kurslari, Dil hazirliqi, Texnikumlara hazirliq, Mektebeqeder hazirliq, Ibtidai hazirliq, Tibb kurslari, Muhasibatliq kurslari, Dovlet qulluguna hazirliq, Tedris merkezi, Ali mekteblere hazirliq, hazirliq kurslar" />
                <link rel="canonical" href="https://prestij-s.com/xeberler" />
                <meta property="og:locale" content="az_AZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="XƏBƏRLƏR" />
                <meta property="og:description" content="Kursumuz haqqında ən son yenilikləri xəbərlər bölməsindən izləyin!" />
                <meta property="og:url" content="https://prestij-s.com/xeberler" />
                <meta property="og:site_name" content="PRESTIJ-S" />
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