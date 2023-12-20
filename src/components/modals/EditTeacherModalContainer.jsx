import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editPaidTeacherDateFunc, editPaymentTeacherAmountFunc, editPaymentTeacherDateFunc, editPaymentTeacherStatusFunc, editPaymentTeacherTypeFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { baseUrl } from '../../MAIN_API'

const EditTeacherModalContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { editPaymentTeacher, editPaymentTeacherDate, editPaymentTeacherAmount, editPaymentTeacherType, editPaymentTeacherStatus, refreshed, editPaidTeacherDate } = useSelector(state => state.Data)
    console.log(editPaymentTeacher);

    const editPaymentTeacherSubmit = (e, id) => {
        e.preventDefault()
        const data = {
            payment_date: editPaymentTeacherDate,
            paid_date: editPaidTeacherDate,
            payment_amount: editPaymentTeacherAmount,
            payment_type: editPaymentTeacherType,
            status: editPaymentTeacherStatus,
            teacher: editPaymentTeacher.teacher.id,
            month: editPaymentTeacher.month.id
        }

        console.log(data);

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}accounting/teacher-payment-retrieve-update/${id}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Müəllimin ödəniş məlumatları dəyişdirildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(function () {
                    navigate(`/branchs-teachers-accounting`)
                    if (!refreshed) {
                        dispatch(setRefreshed())
                        window.location.reload();
                    }



                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate(`/branchs-teachers-accounting`)
                if (!refreshed) {
                    dispatch(setRefreshed())
                    window.location.reload();
                }
            })
        })


    }
    return (
        <div className="modal_container">
            <div onClick={() => dispatch(modalOverlayFunc())} className='overlay'></div>
            <div className="branch_create_modal_card edit_branch_create_modal_card">
                <button onClick={() => dispatch(modalCloseFunc())} className='modal_close_btn'>Close</button>

                <form onSubmit={(e) => editPaymentTeacherSubmit(e, editPaymentTeacher.id)}>
                    <div className='edit_student_payment'>
                        <label htmlFor="">Ödəniş tarixi</label>
                        <input type="date" value={editPaymentTeacherDate} onChange={(e) => dispatch(editPaymentTeacherDateFunc(e.target.value))} />
                    </div>
                    <div className='edit_student_payment'>
                        <label htmlFor="">Ödənildiyi tarix</label>
                        <input type="date" value={editPaidTeacherDate} onChange={(e) => dispatch(editPaidTeacherDateFunc(e.target.value))} />
                    </div>
                    <input type="number" value={editPaymentTeacherAmount} onChange={(e) => dispatch(editPaymentTeacherAmountFunc(e.target.value))} />
                    <select value={editPaymentTeacherType} onChange={(e) => dispatch(editPaymentTeacherTypeFunc(e.target.value))}>
                        <option value="N">Nağd</option>
                        <option value="HK">Hesaba köçürmə</option>
                    </select>
                    <div className='student_payment_status'>
                        <label htmlFor='paymentStatus'>Ödəniş statusu</label>
                        <input id='paymentStatus' type="checkbox" checked={editPaymentTeacherStatus} onChange={(e) => dispatch(editPaymentTeacherStatusFunc(e.target.checked))} />
                    </div>

                    <button style={{ marginLeft: 'auto', display: 'block' }} className='branch_update_modal_btn'>Save</button>

                </form>
            </div>

        </div>
    )
}

export default EditTeacherModalContainer