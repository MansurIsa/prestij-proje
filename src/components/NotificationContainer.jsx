import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotificationList } from '../actions/MainAction'
import NotificationCard from '../components/NotificationCard'

const NotificationContainer = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getNotificationList())
    },[dispatch])

    const {notificationListArr,unreadCount}=useSelector(state=>state.Data);


    const [notificationInpValue,setNotificationInpValue]=useState('')
    const [notificationListFilterArr,setNotificationListFilterArr]=useState([])

    console.log(notificationListArr);
    // setUnreadCount


    const notificationInpValueFunc=(e)=>{
        setNotificationInpValue(e.target.value)
       let filterData= notificationListArr.filter(data=>data.pub_date.substring(0,10)===e.target.value)
       setNotificationListFilterArr(filterData)
    }

    console.log(notificationInpValue);
    return (
        <div className='notification_container'>
            <div className="other_cv_send_form_input_card">
                <input value={notificationInpValue} onChange={notificationInpValueFunc} type="date" />
            </div>

            {
                notificationInpValue === '' ?
                    notificationListArr?.map((data, i) => {
                        return <NotificationCard key={i} data={data} />
                    }) :
                    notificationListFilterArr?.map((data, i) => {
                        return <NotificationCard key={i} data={data} />
                    })
            }
        </div>
    )
}

export default NotificationContainer