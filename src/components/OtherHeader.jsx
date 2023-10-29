import React from 'react'
import HeaderHead from './HeaderHead'
import OtherHeaderMainContainer from './OtherHeaderMainContainer'
import OtherHeaderPagesLink from './OtherHeaderPagesLink'
import FixedSocial from './FixedSocial'

const OtherHeader = ({otherHeaderMainContent,otherHeaderPagesLink,otherPageBanner}) => {
  return (
    <header>
        <HeaderHead/>
        <OtherHeaderMainContainer otherPageBanner={otherPageBanner} otherHeaderMainContent={otherHeaderMainContent}/>
        <OtherHeaderPagesLink otherHeaderPagesLink={otherHeaderPagesLink}/>
        <FixedSocial/>
      </header>
  )
}

export default OtherHeader