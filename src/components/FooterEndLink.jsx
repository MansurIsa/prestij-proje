import React from 'react'
import { Link } from 'react-router-dom'

const FooterEndLink = () => {
  return (
    <ul className='footer_end_link'>
        <li>
            <Link to=''>FOTO »</Link>
        </li>
        <li>
            <Link to=''>HAQQIMIZDA »</Link>
        </li>
        <li>
            <Link to=''>UĞURLARIMIZ »</Link>
        </li>
        <li>
            <Link to=''>XİDMƏTLƏRİMİZ »</Link>
        </li>
        <li>
            <Link to=''>Kursa online qeydiyyat »</Link>
        </li>
        <li>
            <Link to=''>XƏBƏRLƏR »</Link>
        </li>
        <li>
            <Link to=''>QALEREYA »</Link>
        </li>
        <li>
            <Link to=''>CV GÖNDƏR »</Link>
        </li>
        <li>
            <Link to=''>VİDEO İZAHLAR »</Link>
        </li>
        <li>
            <Link to=''>ƏLAQƏ »</Link>
        </li>
        <li>
            <Link to=''>VİDEO »</Link>
        </li>
        <li>
            <Link to=''>NƏŞRLƏRİMİZ »</Link>
        </li>
    </ul>
  )
}

export default FooterEndLink