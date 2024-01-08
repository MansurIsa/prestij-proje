import React, { useEffect } from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherContactContainer from '../components/OtherContactContainer'
import OtherContactMaps from '../components/OtherContactMaps'
import { Helmet } from 'react-helmet'

const ContactPage = ({ otherPageBanner }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Helmet>
                <title>Əlaqə</title>
                <meta name="description" content="If you need help before, during or after your purchase, this is the place to be. Please use below contact details for all your pre-sale questions, contact questions."/>
                <meta name="keywords" content="Prestij-S, Tedris merkezi, Prestij-S Tedris merkezi, Ingilis dili kurslar, xarici dil kurslar, abituriyent hazirliqi, magistr hazirliqi, rus dili kurslari, suruculuk kurslari, kompyuter kurslari, Dil hazirliqi, Texnikumlara hazirliq, Mektebeqeder hazirliq, Ibtidai hazirliq, Tibb kurslari, Muhasibatliq kurslari, Dovlet qulluguna hazirliq, Tedris merkezi, Ali mekteblere hazirliq, hazirliq kurslar" />
                <link rel="canonical" href="https://prestij-s.com/elaqe" />
                <meta property="og:locale" content="az_AZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ƏLAQƏ" />
                <meta property="og:description" content="If you need help before, during or after your purchase, this is the place to be. Please use below contact details for all your pre-sale questions, contact questions." />
                <meta property="og:url" content="https://prestij-s.com/elaqe" />
                <meta property="og:site_name" content="PRESTIJ-S" />
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Əlaqə" otherHeaderPagesLink="ƏLAQƏ" />
            <main>
                <section className='contact_section'>
                    <OtherContactContainer />


                </section>
                <OtherContactMaps />
            </main>
            <Footer />
        </div>
    )
}

export default ContactPage