import React, { useEffect } from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherServiceContainer from '../components/OtherServiceContainer'
import { Helmet } from 'react-helmet'

const ServicePage = ({ otherPageBanner }) => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Helmet>
                <title>Xidmətlərimiz</title>
                <meta name="description" content="Bizim kursumuz sizə aşağıdakı xidmətləri yüksək səviyyədə göstərir!" />
                <meta name="keywords" content="Prestij-S, Tedris merkezi, Prestij-S Tedris merkezi, Ingilis dili kurslar, xarici dil kurslar, abituriyent hazirliqi, magistr hazirliqi, rus dili kurslari, suruculuk kurslari, kompyuter kurslari, Dil hazirliqi, Texnikumlara hazirliq, Mektebeqeder hazirliq, Ibtidai hazirliq, Tibb kurslari, Muhasibatliq kurslari, Dovlet qulluguna hazirliq, Tedris merkezi, Ali mekteblere hazirliq, hazirliq kurslar" />
                <link rel="canonical" href="https://prestij-s.com/xidmetlerimiz" />
                <meta property="og:locale" content="az_AZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="XİDMƏTLƏRİMİZ" />
                <meta property="og:description" content="Bizim kursumuz sizə aşağıdakı xidmətləri yüksək səviyyədə göstərir!" />
                <meta property="og:url" content="https://prestij-s.com/xidmetlerimiz" />
                <meta property="og:site_name" content="PRESTIJ-S" />

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