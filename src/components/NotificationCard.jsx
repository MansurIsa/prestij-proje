import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const NotificationCard = ({data}) => {
    // const [checkBoxVal,setCheckBoxVal]=useState(false)
    const navigate=useNavigate()
    // const readStatus=(e,id)=>{
    //     setCheckBoxVal(e.target.checked)
    //     console.log(e.target.checked);
    //     const data={
    //         status: e.target.checked? 'O': 'OM'
    //     }
    //     axios({
    //         method: "PUT",
    //         url: `https://prestijs.pythonanywhere.com/api/notification/notification-update-delete/${id}/`,
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    //         },
    //         data
    //     }).then(resp => {
    //         console.log(resp);
    //         if (resp.status === 200) {

    //             Swal.fire({
    //                 title: "Güncəlləndi",
    //                 // text: "Home work update",
    //                 icon: "success",
    //                 confirmButtonText: "OK",
    //                 width: "400px"
    //             }).then(function () {
    //                 // Redirect the user
    //                 // window.location.href = "/homeWork";
    //                 navigate('/notification')
    //             });
    //         }
    //     }).catch(err => {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: '',

    //         }).then(function () {

    //             window.location.href = "/homeWork";
    //         })
    //     })

    // }
    return (
        <div className="notification_card">
            <p>{data.content}</p>
            <p>Tarix: <span>{data.pub_date.substring(0,10)}</span></p>
            <p>Vaxt: <span>{data.pub_date.substring(11,16)}</span></p>
            <p>Status: <span>{data.status=='OM'? 'Oxunmayıb': data.status== 'O'? 'Oxunub': ''}</span> </p>
            {/* <input  onChange={(e)=>readStatus(e,data.id)} type="checkbox" /> */}
            <p>Tip: <span>{data.type=='U'? 'Yenilənmə olunub': data.type=='D'? 'Silinmə olunub': data.type=='A'? 'Əlavə olunub': ''}</span></p>
        </div>
    )
}

export default NotificationCard