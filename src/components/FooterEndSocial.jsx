import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FooterEndSocial = () => {
    return (
        <ul className="footer_end_social">
            <li>
                <Link to="https://www.facebook.com/people/Prestij-S-T%C9%99dris-M%C9%99rk%C9%99zi/100063695514908/"><BsFacebook className='header_first_list_icon' /></Link>
            </li>
            <li>
                <Link to="https://www.instagram.com/prestij_s_tedris_merkezi/"><BsInstagram className='header_first_list_icon' /></Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/"><FaLinkedinIn className='header_first_list_icon' /></Link>
            </li>
            <li>
                <Link to="https://www.youtube.com/@prestij-stdrismrkzi6418"><BsYoutube className='header_first_list_icon' /></Link>
            </li>
        </ul>
    )
}

export default FooterEndSocial