import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherLuckContainer from '../components/OtherLuckContainer'
import { Helmet } from 'react-helmet'

const LuckPage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>Uğurlarımız</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Uğurlarımız" otherHeaderPagesLink="UĞURLARIMIZ"/>
            <main>
                <section>
                    <OtherLuckContainer />
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default LuckPage