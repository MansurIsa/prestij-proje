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




