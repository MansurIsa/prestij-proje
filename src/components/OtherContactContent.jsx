import React, { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import {  BsLink45Deg } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { PiPhoneLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import { AiOutlineYoutube } from "react-icons/ai";
import { LiaInstagram } from "react-icons/lia";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoFacebook } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import { getBranchList, getSettingsList } from '../actions/MainAction'

const OtherContactContent = () => {

    const dispatch = useDispatch();
    const { branchListArr } = useSelector(state => state.Data);




    useEffect(() => {
        dispatch(getBranchList())
        dispatch(getSettingsList())
    }, [dispatch])


    return (
        <div className="other_contact_content">
            <p>If you need help before, during or after your purchase, this is the place to be. Please use below contact details for all your pre-sale questions, contact questions.</p>
            
            {
                    [...branchListArr]?.reverse()[1]?.is_active===true ?
                            <div className="footer_second_card">
                                {/* <h4>{[...branchListArr]?.reverse()[0].name}</h4> */}
                                <div className="footer_second_card_content">
                                    <BsLink45Deg className="footer_second_card_link" />
                                    <Link target='_blank' to={[...branchListArr]?.reverse()[1].website}>{[...branchListArr]?.reverse()[0].website}</Link>
                                </div>
                                <div className="footer_second_card_content">
                                    <CiMail className="footer_second_card_link" />
                                    <Link target='_blank' to={[...branchListArr]?.reverse()[1].email}>{[...branchListArr]?.reverse()[0].email}</Link>
                                </div>
                                <div className="footer_second_card_content">
                                    <PiPhoneLight className="footer_second_card_link" />
                                    {
                                        [...branchListArr]?.reverse()[1]?.contact_numbers?.map((contact, i) => {
                                            return <Link target='_blank' to={`tel: ${contact.phone_number}`}> {contact.phone_number}</Link>
                                        })
                                    }

                                </div>
                                <div className="footer_second_card_content">
                                    <AiOutlineHome className="footer_second_card_link" />
                                    <p>{[...branchListArr]?.reverse()[1].address}</p>
                                </div>
                                {/* <div className="footer_second_card_map">
                                    <iframe title='location' src={data.map_url} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div> */}
                            </div>
                            : null
                    
                }

            <ul className='header_second_list'>
                    
                    
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
    )
}

export default OtherContactContent