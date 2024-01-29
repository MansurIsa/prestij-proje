import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  contactEmailChange, contactMessageChange, contactNameChange, contactSubjectChange } from '../redux/MainReducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const OtherContactForm = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const { contactNameValue, contactEmailValue, contactSubjectValue, contactMessageValue } = useSelector(state => state.Data)

    const contactSubmit=async(e)=>{
        e.preventDefault()
        const data={
            name: contactNameValue,
            email: contactEmailValue,
            subject: contactSubjectValue,
            message: contactMessageValue
        }
       await axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/contact-create/",
            data
        }).then(resp=>{
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    text: "Mesaj uğurla göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    customClass: "contact_create_modal"
                }).then(function () {
                    navigate("/elaqe")
                });
            }
        }).catch(err=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate("/elaqe")
            })
        })
    }
    return (
        <div className='other_contact_form'>
            <form onSubmit={contactSubmit}>
                <div className='other_contact_form_card'>
                    <input required onChange={(e) => dispatch(contactNameChange(e.target.value))} value={contactNameValue} type="text" placeholder='Ad' />
                </div>
                <div className='other_contact_form_card'>
                    <input required onChange={(e) => dispatch(contactEmailChange(e.target.value))} value={contactEmailValue} type="email" placeholder='Email' />
                </div>
                <div className='other_contact_form_card'>
                    <input required onChange={(e) => dispatch(contactSubjectChange(e.target.value))} value={contactSubjectValue} type="text" placeholder='Mövzu' />
                </div>
                <div className='other_contact_form_card'>
                    <textarea required onChange={(e) => dispatch(contactMessageChange(e.target.value))} value={contactMessageValue} placeholder='Mesaj' cols="30" rows="10"></textarea>
                </div>
                <button><span>Göndər</span></button>
            </form>
        </div>
    )
}

export default OtherContactForm