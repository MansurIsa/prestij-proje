import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg"
import { GoTriangleDown } from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux'
import { getSettingsList } from '../actions/MainAction'

const Nav = () => {
    const dispatch = useDispatch()
    const { settingsListArr, servicesListArr } = useSelector(state => state.Data)

    useEffect(() => {
        dispatch(getSettingsList())
    }, [dispatch])

    console.log(servicesListArr);


    useEffect(() => {
        // let angleIcon = document.querySelectorAll('.angle_icon')
        // let navInnerListUl = document.querySelectorAll('.nav_inner_list>ul')
        // console.log(navInnerListUl);
        // for (let i = 0; i < angleIcon.length; i++) {
        //     angleIcon[i].addEventListener('click', () => {
        //         navInnerListUl[i].classList.toggle('active_inner_list')
        //     })
        // }

        let barsIcon = document.querySelector('.bars_icon')
        let closeIcon = document.querySelector('.close_icon')
        let navList = document.querySelector('.nav_list')
        barsIcon.addEventListener('click', () => {
            navList.classList.add('nav_active')
        })
        closeIcon.addEventListener('click', () => {
            navList.classList.remove('nav_active')
        })

    }, [])
    return (
        <nav>
            <ul className="nav_list">
                <div className="close_parent">
                    <CgClose className='close_icon' />
                </div>
                {
                    settingsListArr[0]?.about_page_active ?
                        <li className='nav_inner_list'>
                            <Link to='/haqqimizda'>Haqqımızda</Link>
                        </li> : null
                }
                {
                    settingsListArr[0]?.success_page_active ?
                        <li className='nav_inner_list'>
                            <Link to='/ugurlarimiz'>Uğurlarımız</Link>
                        </li> : null
                }

                {
                    settingsListArr[0]?.service_page_active ?
                        <li className='nav_inner_list'>
                            <div className='angle_link'>
                                <Link to='/xidmetlerimiz'>XİDMƏTLƏRİMİZ</Link>
                                <label htmlFor="angleOne">
                                    <GoTriangleDown className='angle_icon' />
                                </label>

                            </div>
                            <input type="checkbox" id='angleOne'/>
                            <ul className='nav_inner_list_child'>
                                {
                                    servicesListArr?.map((data, i) => {
                                        return (
                                            <li>
                                                <Link to={`/xidmetlerimiz/${data.title.replace(/\s/g, '')}/${data.id}`}>{data.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                                


                            </ul>
                        </li> : null
                }
                {
                    settingsListArr[0]?.news_page_active ?
                        <li className='nav_inner_list'>
                            <Link to='/xeberler'>Xəbərlər</Link>
                        </li> : null
                }


                {
                    settingsListArr[0]?.gallery_page_active ?
                        <li className='nav_inner_list galarey_list'>
                            <div className='angle_link'>
                                <Link to='/foto'>Qalareya</Link>
                                <label htmlFor="angleTwo">
                                    <GoTriangleDown className='angle_icon' />
                                </label>
                            </div>
                            <input type="checkbox" id='angleTwo'/>

                            <ul className='nav_inner_list_child2'>
                                <li>
                                    <Link to='/foto'>FOTO</Link>
                                </li>
                                <li>
                                    <Link to='/video'>VİDEO</Link>
                                </li>
                            </ul>
                        </li> : null
                }

                {
                    settingsListArr[0]?.resume_page_active ?
                        <li className='nav_inner_list'>
                            <Link to='/cv-gonder'>Cv göndər</Link>
                        </li> : null
                }

                <li className='nav_inner_list'>
                    <Link to=''>İmtahanlar</Link>
                </li>

                {
                    settingsListArr[0]?.edition_page_active ?
                        <li className='nav_inner_list'>
                            <Link to='/nesrlerimiz'>NƏŞRLƏRİMİZ</Link>
                        </li> : null
                }
                {
                    settingsListArr[0]?.contact_page_active ?
                        <li className='nav_inner_list'>
                            <Link to='/elaqe'>Əlaqə</Link>
                        </li> : null
                }





            </ul>
            <FaBars className="bars_icon" />


        </nav>
    )
}

export default Nav