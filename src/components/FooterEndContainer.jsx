import React from 'react'
import FooterLogo from './FooterLogo'
import FooterEndLink from './FooterEndLink'
import FooterEndSocial from './FooterEndSocial'

const FooterEndContainer = () => {
  return (
    <div className='footer_end_container container'>
      
      <FooterLogo />
      <FooterEndLink />
      <FooterEndSocial />
    </div>
  )
}

export default FooterEndContainer