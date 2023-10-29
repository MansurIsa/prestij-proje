import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const FixedSocial = () => {
  return (
    <div className='fixed_social'>
      <div>
        <Link to="https://www.facebook.com/people/Prestij-S-T%C9%99dris-M%C9%99rk%C9%99zi/100063695514908/"><BsFacebook className='fixed_social_icon' /></Link></div>
      <div>
        <Link to="https://www.instagram.com/prestij_s_tedris_merkezi/"><BsInstagram className='fixed_social_icon' /></Link></div>
      <div>
        <Link to="https://www.youtube.com/@prestij-stdrismrkzi6418"><BsYoutube className='fixed_social_icon' /></Link></div>
      <div>
        <Link to="https://wa.me/+994556819661"><BsWhatsapp className='fixed_social_icon' /></Link></div>
    </div>
  )
}

export default FixedSocial