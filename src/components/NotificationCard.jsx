import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setRefreshed } from '../redux/MainReducer';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../MAIN_API';
import axios from 'axios';

const NotificationCard = ({ data }) => {

    const { refreshed } = useSelector(state => state.Data)

   

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const markNotificationAsRead = (id) => {

        const data = {
            status: 'O'
        }
        axios({
            method: "PUT",
            url: `${baseUrl}notification/notification-update-delete/${id}/`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Dəyişdirildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(function () {
                    navigate(`/notification`)
                    if (!refreshed) {
                        dispatch(setRefreshed())
                        window.location.reload();
                    }



                })
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate(`/notification`)
                if (!refreshed) {
                    dispatch(setRefreshed())
                    window.location.reload();
                }
            })
        })

    }
    return (
        <div className="notification_card">
            <p>{data.content}</p>
            <p>Tarix: <span>{data.pub_date.substring(0, 10)}</span></p>
            <p>Vaxt: <span>{data.pub_date.substring(11, 16)}</span></p>
            <p>Tip: <span>{data.type === 'U' ? 'Yenilənmə olunub' : data.type === 'D' ? 'Silinmə olunub' : data.type === 'A' ? 'Əlavə olunub' : ''}</span></p>
            {data.status === 'OM' && (
                <div className="notification_btn_container">
                    <button onClick={() => markNotificationAsRead(data.id)}>
                        Oxunmayıb
                    </button>
                </div>

            )}
        </div>
    )
}

export default NotificationCard