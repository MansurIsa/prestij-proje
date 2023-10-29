import React from 'react'
import LatestNews from './LatestNews'
import OtherPublicationContent from './OtherPublicationContent'

const OtherPublicationContainer = () => {
    return (
        <div className='other_about_container container'>
            <OtherPublicationContent/>
            <LatestNews />
        </div>
    )
}

export default OtherPublicationContainer