import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoGalleryList } from '../actions/MainAction'

const OtherVideoCards = () => {

    const dispatch = useDispatch()
    const { videoGalleryListArr } = useSelector(state => state.Data)


    useEffect(() => {
        dispatch(getVideoGalleryList())
    }, [dispatch])

    return (
        <div className='other_video_cards'>

            {
                videoGalleryListArr?.map((data, i) => {
                    return (
                        <div className="other_video_card">

                            <iframe src={data.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default OtherVideoCards