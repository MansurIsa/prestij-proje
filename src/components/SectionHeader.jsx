import React from 'react'
import { Link } from 'react-router-dom'

const SectionHeader = ({sectionHeader,sectionLink,sectionLinkPath}) => {
  return (
    <div className='container section_header_container'>
        <h2 className="section_header">{sectionHeader}</h2>
        <Link to={sectionLinkPath} className='section_header_link'>{sectionLink}</Link>
    </div>
  )
}

export default SectionHeader