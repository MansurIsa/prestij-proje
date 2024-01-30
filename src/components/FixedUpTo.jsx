import React from 'react'
import { FiChevronUp } from "react-icons/fi";

const FixedUpTo = () => {


    const handleFixedUpToClick = () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      };
    

    
  return (
    <div onClick={handleFixedUpToClick} className='fixed_up_to_container'>
        <FiChevronUp className='fixed_up_to'/>
    </div>
  )
}

export default FixedUpTo