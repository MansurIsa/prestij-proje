import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSettingsList } from '../actions/MainAction'

const FooterEndLink = () => {

    const dispatch = useDispatch()
    const { settingsListArr, servicesListArr } = useSelector(state => state.Data)

    useEffect(() => {
        dispatch(getSettingsList())
    }, [dispatch])

    return (
        <ul className='footer_end_link'>
            <li className='nav_inner_list'>
                <Link to='/'>Əsas səhifə »</Link>
            </li>

            {
                settingsListArr[0]?.about_page_active ?
                    <li className='nav_inner_list'>
                        <Link to='/haqqimizda'>Haqqımızda »</Link>
                    </li> : null
            }
            {
                settingsListArr[0]?.success_page_active ?
                    <li className='nav_inner_list'>
                        <Link to='/ugurlarimiz'>Uğurlarımız »</Link>
                    </li> : null
            }

            {
                settingsListArr[0]?.service_page_active ?
                    <li className='nav_inner_list'>
                        <div className='angle_link'>
                            <Link to='/xidmetlerimiz'>Xidmətlərimiz »</Link>


                        </div>

                    </li> : null
            }
            {
                settingsListArr[0]?.news_page_active ?
                    <li className='nav_inner_list'>
                        <Link to='/xeberler'>Xəbərlər »</Link>
                    </li> : null
            }


            {
                settingsListArr[0]?.gallery_page_active ?
                    <li className='nav_inner_list galarey_list'>
                        <div className='angle_link'>
                            <Link to='/foto'>Qalareya »</Link>

                        </div>

                    </li> : null
            }

            {
                settingsListArr[0]?.resume_page_active ?
                    <li className='nav_inner_list'>
                        <Link to='/cv-gonder'>Cv göndər »</Link>
                    </li> : null
            }

            <li className='nav_inner_list'>
                <Link to=''>İmtahanlar »</Link>
            </li>

            {
                settingsListArr[0]?.edition_page_active ?
                    <li className='nav_inner_list'>
                        <Link to='/nesrlerimiz'>Nəşrlərimiz »</Link>
                    </li> : null
            }
            {
                settingsListArr[0]?.contact_page_active ?
                    <li className='nav_inner_list'>
                        <Link to='/elaqe'>Əlaqə »</Link>
                    </li> : null
            }

        </ul>
    )
}

export default FooterEndLink