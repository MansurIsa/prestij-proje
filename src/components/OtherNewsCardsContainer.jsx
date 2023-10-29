import React, { useEffect } from 'react'
import { LiaCalendarSolid } from 'react-icons/lia'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsList } from '../actions/MainAction'
import DOMPurify from 'dompurify'
import { Link } from 'react-router-dom'

const OtherNewsCardsContainer = () => {
    // 

    const dispatch = useDispatch();
    const newsListArr = useSelector(state => state.Data.newsListArr)
    console.log(newsListArr);
    useEffect(() => {
        dispatch(getNewsList())
    }, [dispatch])
    return (
        <div className='other_news_cards_container container'>
            {
                newsListArr?.map((data, i) => {
                    return (
                        <Link key={i} to={`/xeberler/${data.title.replace(/\s/g, '')}/${data.id}`}>
                            {
                                data.is_active ?
                                    <div className='news_slider_card'>

                                        <img src={data.image} alt="" />


                                        <h3 className='new_slider_card_content_header'> {data.title}</h3>
                                        <div className="new_slider_card_content">
                                            <h3 > {data.title}</h3>
                                            <p>{DOMPurify.sanitize(data.content).replace(/<[^>]+>/g, '')}</p>
                                            <div className='news_slider_card_end'>
                                                <LiaCalendarSolid className='calendar' />
                                                <span>{data.pub_date}</span>
                                            </div>
                                        </div>
                                    </div> : null
                            }

                        </Link>

                    )
                })
            }



        </div>
    )
}

export default OtherNewsCardsContainer