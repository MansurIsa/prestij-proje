import React, { useEffect } from 'react'

import HeaderSecond from './HeaderSecond'
import OtherHeaderContent from './OtherHeaderContent'

const OtherHeaderMainContainer = ({otherHeaderMainContent,otherPageBanner}) => {

  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.header_second_container_bg');
      const otherBannerContent = document.querySelector('.other_banner_content');

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('bg');
          otherBannerContent.style.justifyContent='end'
          
        } else {
          navbar.classList.remove('bg');
          otherBannerContent.style.justifyContent='space-between'
          
        }
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='other_header_main_container' style={{background: `url(${otherPageBanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '100%' }}>
        <div className="other_bg_shadow">
            <div className="other_banner_content container">
                <HeaderSecond/>
                <OtherHeaderContent otherHeaderMainContent={otherHeaderMainContent}/>
            </div>
            
        </div>
        
    </div>
  )
}

export default OtherHeaderMainContainer