import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuccessItemList, getSuccessList } from '../actions/MainAction'
import OtherLuckCard from './OtherLuckCard'
import LatestNews from './LatestNews'

const OtherLuckContainer = () => {
    const dispatch = useDispatch()
    const { successListArr, successItemListArr } = useSelector(state => state.Data)
    useEffect(() => {
        dispatch(getSuccessList())
        dispatch(getSuccessItemList())
    }, [dispatch])


    return (
        <div className='other_about_container container'>
            {/* <div className="other_about_content">
                {
                    successListArr?.map((data, i) => {
                        return data.is_active ? <h5 key={i}>{data.title}</h5> : null
                    })
                }
            </div> */}
            <div className="other_luck_container">
                {
                    successItemListArr?.map((data, i) => {
                        return data.is_active? <OtherLuckCard key={i} data={data}/>: null
                    })
                }
            </div>
            <LatestNews />






        </div>
    )
}

export default OtherLuckContainer