import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotificationList } from '../actions/MainAction'
import NotificationCard from '../components/NotificationCard'

const NotificationPage = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getNotificationList())
    },[dispatch])

    const {notificationListArr}=useSelector(state=>state.Data);

    console.log(notificationListArr);

  return (
    <div className=' notification_container'>
        {
            notificationListArr?.map((data,i)=>{
                return <NotificationCard key={i} data={data}/>
            })
        }
    </div>
  )
}

export default NotificationPage