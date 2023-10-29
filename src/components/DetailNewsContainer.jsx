import DOMPurify from 'dompurify'
import React from 'react'
import { LiaCalendarSolid } from 'react-icons/lia'

const DetailNewsContainer = ({ newsRetrieveObj }) => {
    return (
        <div className='container detail_news_container'>
            {
                newsRetrieveObj?.is_active ?
                    <div className="detail_news_card">
                        <div>
                            <LiaCalendarSolid className='calendar' />
                            <span>{newsRetrieveObj.pub_date}</span>
                        </div>
                        <img src={newsRetrieveObj.image} alt="" />





                        <p>{DOMPurify.sanitize(newsRetrieveObj.content).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')}</p>
                    </div> : null
            }

        </div>
    )
}

export default DetailNewsContainer