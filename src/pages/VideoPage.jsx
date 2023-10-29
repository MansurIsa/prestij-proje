import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherVideoContainer from '../components/OtherVideoContainer'
import { Helmet } from 'react-helmet'

const VideoPage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>Videolar</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Video" otherHeaderPagesLink="VİDEO" />
            <main>
                <section>
                    <OtherVideoContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default VideoPage