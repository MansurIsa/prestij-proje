import React, { useEffect } from 'react'
import LatestNewsCard from './LatestNewsCard'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '../actions/MainAction';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const LatestNewsCards = () => {

  const dispatch = useDispatch();
  const newsListArr = useSelector(state => state.Data.newsListArr)
  console.log(newsListArr);
  useEffect(() => {
    dispatch(getNewsList())
  }, [dispatch])
  return (
    <div className='latest_news_cards'>

      {
        
        newsListArr?.map((data, i) => {
          if(i<5){
            return (
              <Link key={i} to={`/xeberler/${data.title.replace(/\s/g, '')}/${data.id}`}>
                {
                  data.is_active ?
                    <div className='latest_news_card'>
  
                      <img src={data.image} alt="" />
  
  
                      <h3 > {data.title}</h3>
                      
                    </div> : null
                }
  
              </Link>
  
            )
          }
         
        })
      }
      
    </div>
  )
}

export default LatestNewsCards