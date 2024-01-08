import React, { useEffect } from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherCVSendContainer from '../components/OtherCVSendContainer'
import { Helmet } from 'react-helmet'

const CVSendPage = ({otherPageBanner}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Helmet>
                <title>CV Göndər</title>
                <meta name="description" content="CV-zi  prestijsvakansiya@mail.ru email unvanına gondərə və ya aşağıdakı formu doldura bilərsiniz."/>
                <meta name="keywords" content="Prestij-S, Tedris merkezi, Prestij-S Tedris merkezi, Ingilis dili kurslar, xarici dil kurslar, abituriyent hazirliqi, magistr hazirliqi, rus dili kurslari, suruculuk kurslari, kompyuter kurslari, Dil hazirliqi, Texnikumlara hazirliq, Mektebeqeder hazirliq, Ibtidai hazirliq, Tibb kurslari, Muhasibatliq kurslari, Dovlet qulluguna hazirliq, Tedris merkezi, Ali mekteblere hazirliq, hazirliq kurslar" />
                <link rel="canonical" href="https://prestij-s.com/cv-gonder" />
                <meta property="og:locale" content="az_AZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="CV GÖNDƏR" />
                <meta property="og:description" content="CV-zi  prestijsvakansiya@mail.ru email unvanına gondərə və ya aşağıdakı formu doldura bilərsiniz." />
                <meta property="og:url" content="https://prestij-s.com/cv-gonder" />
                <meta property="og:site_name" content="PRESTIJ-S" />
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