import React from 'react'
import { BsLink45Deg } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi"
import { AiOutlineHome } from "react-icons/ai"
import { Link } from 'react-router-dom';

const FooterSecondCard = ({data}) => {
    return (
        <div className="footer_second_card">
            <h4>{data.name}</h4>
            <div className="footer_second_card_content">
                <BsLink45Deg className="footer_second_card_link" />
                <Link target='_blank' to={data.website}>{data.website}</Link>
            </div>
            <div className="footer_second_card_content">
                <CiMail className="footer_second_card_link" />
                <Link target='_blank' to={data.email}>{data.email}</Link>
            </div>
            <div className="footer_second_card_content">
                <PiPhoneLight className="footer_second_card_link" />
                <Link target='_blank' to=''> (012) 4089661 (050) 681-96-61</Link>
            </div>
            <div className="footer_second_card_content">
                <AiOutlineHome className="footer_second_card_link" />
                <Link target='_blank' to=''>{data.address}</Link>
            </div>
            <div className="footer_second_card_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8100.819169276442!2d49.82305707568814!3d40.38121389190752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dbd4095cbf1%3A0xa3ad337b0af2671f!2zMTM5IFNhbGF0xLFuIMaPc2fJmXJvdmEsIEJha8SxIDEwMDk!5e0!3m2!1sen!2saz!4v1688913940446!5m2!1sen!2saz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default FooterSecondCard