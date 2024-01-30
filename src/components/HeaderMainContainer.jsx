import React, { useEffect, useState } from 'react'
import HeaderSecond from './HeaderSecond'
import HeaderSlider from './HeaderSlider'
import FixedSocial from './FixedSocial'
import HeaderSecondCards from './HeaderSecondCards'
import FixedUpTo from './FixedUpTo'

const HeaderMainContainer = () => {

  const [showFixedUpTo, setShowFixedUpTo] = useState(false);
  const [isFixedUpToVisible, setIsFixedUpToVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.header_second_container_bg');
      const headerMainContainer = document.querySelector('.header_main_container');

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('bg');
          headerMainContainer.style.justifyContent = 'flex-end'
        } else {
          navbar.classList.remove('bg');
          headerMainContainer.style.justifyContent = 'space-between'
        }
      }

      if (window.scrollY > 500) {
        setShowFixedUpTo(true);

        if (!isFixedUpToVisible) {
          setIsFixedUpToVisible(true);
        }
      } else {
        setShowFixedUpTo(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixedUpToVisible]);

  return (
    <div className='header_main_container'>

      <HeaderSecond />
      <HeaderSecondCards />
      <HeaderSlider />
      <FixedSocial />
      {showFixedUpTo && isFixedUpToVisible && <FixedUpTo />}


    </div>
  )
}

export default HeaderMainContainer