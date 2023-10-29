import DOMPurify from 'dompurify'
import React from 'react'

const DetailPubliciationContainer = ({editionRetrieveObj}) => {
  return (
    <div className='container detail_news_container'>
            {
                editionRetrieveObj?.is_active?
                <div className="detail_news_card">
                <img src={editionRetrieveObj.image} alt="" />
                <p>{DOMPurify.sanitize(editionRetrieveObj.content).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')}</p>
            </div>: null
            }
           
        </div>
  )
}

export default DetailPubliciationContainer