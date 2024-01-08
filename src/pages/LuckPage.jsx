import React, { useEffect } from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherLuckContainer from '../components/OtherLuckContainer'
import { Helmet } from 'react-helmet'

const LuckPage = ({ otherPageBanner }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Uğurlarımız</title>
                <meta name="description" content="MAGİSTRATURA İMTAHANIN I MƏRHƏLƏSİNDƏ TƏLƏBƏLƏRİMİZ YÜKSƏK NƏTİCƏ GOSTƏRƏRƏK RESPUBLİKA ÜZRƏ İLK ONLUQDA YER ALMIŞLAR." />
                <meta name="keywords" content="Prestij-S, Tedris merkezi, Prestij-S Tedris merkezi, Ingilis dili kurslar, xarici dil kurslar, abituriyent hazirliqi, magistr hazirliqi, rus dili kurslari, suruculuk kurslari, kompyuter kurslari, Dil hazirliqi, Texnikumlara hazirliq, Mektebeqeder hazirliq, Ibtidai hazirliq, Tibb kurslari, Muhasibatliq kurslari, Dovlet qulluguna hazirliq, Tedris merkezi, Ali mekteblere hazirliq, hazirliq kurslar" />
                <link rel="canonical" href="https://prestij-s.com/ugurlarimiz" />
                <meta property="og:locale" content="az_AZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="UĞURLARIMIZ" />
                <meta property="og:description" content="MAGİSTRATURA İMTAHANIN I MƏRHƏLƏSİNDƏ TƏLƏBƏLƏRİMİZ YÜKSƏK NƏTİCƏ GOSTƏRƏRƏK RESPUBLİKA ÜZRƏ İLK ONLUQDA YER ALMIŞLAR." />
                <meta property="og:url" content="https://prestij-s.com/ugurlarimiz" />
                <meta property="og:site_name" content="PRESTIJ-S" />
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Uğurlarımız" otherHeaderPagesLink="UĞURLARIMIZ" />
            <main>
                <section>
                    <OtherLuckContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default LuckPage