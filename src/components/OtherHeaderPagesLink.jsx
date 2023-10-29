import React from 'react'
import {  RxSlash } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const OtherHeaderPagesLink = ({otherHeaderPagesLink}) => {
  return (
    <div className='container'>
        <div className="other_header_pages_link">
            <Link to='/'>ANA SƏHİFƏ</Link>
            <RxSlash/>
            <p>{otherHeaderPagesLink}</p>
        </div>
    </div>
  )
}

export default OtherHeaderPagesLink