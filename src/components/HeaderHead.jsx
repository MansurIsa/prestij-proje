import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImMobile } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { LiaInstagram } from "react-icons/lia";
import { LiaLinkedinIn } from "react-icons/lia";
import { GoMail } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { getContactInfoList } from '../actions/MainAction';
import { IoSearch } from "react-icons/io5"
import { CgClose } from 'react-icons/cg';




const HeaderHead = () => {
    const dispatch = useDispatch();
    const contactInfoArr = useSelector(state => state.Data.contactInfoArr)

    useEffect(() => {
        dispatch(getContactInfoList())
    }, [dispatch])

    useEffect(() => {
        let searchFirstIcon = document.querySelector('.header_second_list_search_icon')
        let fixedSearchContainer = document.querySelector('.fixed_search_container')
        let fixedSearchCloseIcon = document.querySelector('.fixed_search_close_icon')
        searchFirstIcon.addEventListener('click', () => {
            fixedSearchContainer.style.display = 'flex'
        })
        fixedSearchCloseIcon.addEventListener('click', () => {
            fixedSearchContainer.style.display = 'none'
        })
    }, [])

    console.log(contactInfoArr);
    return (
        <div className='header_head_container_bg'>
            <div className="header_head_container container">

                {
                    contactInfoArr[0]?.is_active ?
                        <ul className='header_first_list'>

                            <li>
                                <GoMail className='header_first_list_icon' />
                                {
                                    contactInfoArr.length > 0 && (
                                        <Link to={`mailto:${contactInfoArr[0]?.email}`}>{contactInfoArr[0]?.email}</Link>

                                    )
                                }


                            </li>

                            {/* <li>
                                <ImMobile className='header_first_list_icon' />
                                <Link to={contactInfoArr.length && contactInfoArr[0]?.contact_number}>{contactInfoArr[0]?.contact_number}</Link>
                            </li> */}

                            <li>
                                <ImMobile className='header_first_list_icon' />
                                {contactInfoArr.length > 0 && (


                                    <Link target='_blank' rel="noopener noreferrer" to={`tel: ${contactInfoArr[0]?.contact_number}`}> {contactInfoArr[0]?.contact_number}</Link>
                                )}
                            </li>


                        </ul>
                        : null
                }


                <ul className='header_second_list'>

                    <li>
                        <Link to={''}><IoSearch className='header_first_list_icon header_second_list_search_icon' /></Link>
                    </li>
                    <li>
                        <Link to="https://www.facebook.com/people/Prestij-S-T%C9%99dris-M%C9%99rk%C9%99zi/100063695514908/"><BiLogoFacebook className='header_first_list_icon' /></Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/prestij_s_tedris_merkezi/"><LiaInstagram className='header_first_list_icon' /></Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/"><LiaLinkedinIn className='header_first_list_icon' /></Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/@prestij-stdrismrkzi6418"><AiOutlineYoutube className='header_first_list_icon' /></Link>
                    </li>
                </ul>
            </div>
            <div className="fixed_search_container">
                <div className="fixed_search_close_icon_container">
                    <CgClose className='fixed_search_close_icon' />
                </div>

                <div className="fixed_search">
                    <input placeholder='Search...' type="text" />
                    <IoSearch className='popup_search_icon' />
                </div>
            </div>
        </div>
    )
}

export default HeaderHead