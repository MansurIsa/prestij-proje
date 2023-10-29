import React, { useEffect } from 'react'
import HeaderSecond from './HeaderSecond'
import HeaderSlider from './HeaderSlider'
import FixedSocial from './FixedSocial'
import HeaderSecondCards from './HeaderSecondCards'

const HeaderMainContainer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.header_second_container_bg');
      const headerMainContainer = document.querySelector('.header_main_container');

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('bg');
          headerMainContainer.style.justifyContent='flex-end'
        } else {
          navbar.classList.remove('bg');
          headerMainContainer.style.justifyContent='space-between'
        }
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='header_main_container'>
      
         <HeaderSecond />
         <HeaderSecondCards />
        <HeaderSlider />
        <FixedSocial/>
        
    </div>
  )
}

export default HeaderMainContainer