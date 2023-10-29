import React from 'react'
import LatestNews from './LatestNews'
import OtherServiceContent from './OtherServiceContent'

const OtherServiceContainer = () => {
    return (
        <div className='other_about_container container'>
            <OtherServiceContent/>
            <LatestNews />
        </div>
    )
}

export default OtherServiceContainer