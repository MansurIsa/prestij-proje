import DOMPurify from 'dompurify'
import React from 'react'

const DetailServiceContainer = ({serviceRetrieveObj}) => {
    return (
        <div className='container detail_news_container'>
            {
                serviceRetrieveObj?.is_active?
                <div className="detail_news_card">
                <img src={serviceRetrieveObj.image} alt="" />
                <p>{DOMPurify.sanitize(serviceRetrieveObj.content).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')}</p>
            </div>: null
            }
           
        </div>
    )
}

export default DetailServiceContainer