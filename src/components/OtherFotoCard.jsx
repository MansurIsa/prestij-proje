import React from 'react'

const OtherFotoCard = ({ data }) => {
    return (
        <>
            {
                data.is_active ?
                    <div class="news_slider_card">


                        <img src={data?.image} alt=''/>
                        <div className="new_slider_card_content other_foto_card_content">
                            <h3> {data?.title}</h3>

                        </div>
                    </div > : null
            }

        </>
    )
}

export default OtherFotoCard




// <div className='news_slider_card'>

// <img src={data.image} alt="" />


// <h3 className='new_slider_card_content_header'> {data.title}</h3>
// <div className="new_slider_card_content">
//     <h3 > {data.title}</h3>
//     <p>{DOMPurify.sanitize(data.content).replace(/<[^>]+>/g, '')}</p>
//     <div className='news_slider_card_end'>
//         <LiaCalendarSolid className='calendar' />
//         <span>{data.pub_date}</span>
//     </div>
// </div>
// </div>