import React from 'react'
import LatestNewCardImg from "../images/39_thumb.jpeg"

const LatestNewsCard = () => {
  return (
    <div className='latest_news_card'>
        <img src={LatestNewCardImg} alt="" />
        <h3>Abituriyent qəbul imtahanı keçirilmişdir!</h3>
    </div>
  )
}

export default LatestNewsCard