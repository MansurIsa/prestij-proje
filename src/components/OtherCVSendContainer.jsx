import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import OtherCVSendFormContainer from './OtherCVSendFormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getContactInfoList } from '../actions/MainAction'

const OtherCVSendContainer = () => {

  const {contactInfoArr} = useSelector(state => state.Data)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getContactInfoList())
  }, [dispatch])

  return (
    <div className='other_cv_send_container container'>
        <h4>CV-zi "{
        contactInfoArr.length > 0 && (
          <Link to={`mailto:${contactInfoArr[0]?.email}`}>{contactInfoArr[0]?.email}</Link>
        )
      }" email ünvanına göndərə və ya aşağıdakı formu doldura bilərsiniz.</h4>
        <OtherCVSendFormContainer/>
    </div>
  )
}

export default OtherCVSendContainer