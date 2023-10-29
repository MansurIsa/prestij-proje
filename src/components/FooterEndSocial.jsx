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
                <Link to={''}><BsFacebook /></Link>
            </li>
            <li>
                <Link to={''}><BsInstagram /></Link>
            </li>
            <li>
                <Link to={''}><FaLinkedinIn /></Link>
            </li>
            <li>
                <Link to={''}><BsYoutube /></Link>
            </li>
        </ul>
    )
}

export default FooterEndSocial