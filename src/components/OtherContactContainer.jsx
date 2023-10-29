import React from 'react'
import SectionHeader from './SectionHeader'
import OtherContactCards from './OtherContactCards'

const OtherContactContainer = () => {
    return (
        <div className='other_contact_container container'>
            <SectionHeader sectionHeader="Əlaqə Məlumatları"  />
            <OtherContactCards/>
            
        </div>
    )
}

export default OtherContactContainer