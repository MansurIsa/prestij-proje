import React from 'react'
import { BsLink45Deg } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi"
import { AiOutlineHome } from "react-icons/ai"
import { Link } from 'react-router-dom';

const FooterSecondCard = ({ data }) => {

    console.log(data);
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
                {
                    data?.contact_numbers?.map((contact, i) => {
                        return <Link target='_blank' to={`tel: ${contact.phone_number}`}> {contact.phone_number}</Link>
                    })
                }

            </div>
            <div className="footer_second_card_content">
                <AiOutlineHome className="footer_second_card_link" />
                <p>{data.address}</p>
            </div>
            <div className="footer_second_card_content">
                <div className="footer_second_card_map">
                    <iframe title='location' src={data.map_url} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default FooterSecondCard