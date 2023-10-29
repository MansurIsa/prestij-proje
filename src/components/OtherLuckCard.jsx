import React from 'react'

const OtherLuckCard = ({data}) => {
    console.log(data);
  return (
    <div className='other_luck_card'>
        <img src={data.image} alt="" />
        <h3>{data.name}</h3>
        <p>{data.item}</p>
    </div>
  )
}

export default OtherLuckCard