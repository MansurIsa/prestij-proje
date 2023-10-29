import React from 'react'
import { Link } from 'react-router-dom'
import OtherCVSendFormContainer from './OtherCVSendFormContainer'

const OtherCVSendContainer = () => {
  return (
    <div className='other_cv_send_container container'>
        <h4>CV-zi "<Link to='mailto: Prestijsvakansiya@mail.ru'>Prestijsvakansiya@mail.ru</Link>" email ünvanına göndərə və ya aşağıdakı formu doldura bilərsiniz.</h4>
        <OtherCVSendFormContainer/>
    </div>
  )
}

export default OtherCVSendContainer