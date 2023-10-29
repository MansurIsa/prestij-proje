import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogoImg from '../images/logo_footer.png'


const FooterLogo = () => {
  return (
    <Link to=''>
        <img className='footer_logo' src={FooterLogoImg} alt="" />
    </Link>
  )
}

export default FooterLogo