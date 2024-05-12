import React from 'react'

const OtherLuckCard = ({data}) => {
  const formattedItem = data.item && data.item.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  return (
    <div className='other_luck_card'>
        <img src={data.image} alt="" />
        <h3>{data.name}</h3>
        <p>{formattedItem}</p>
    </div>
  )
}

export default OtherLuckCard