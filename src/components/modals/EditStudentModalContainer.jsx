import React from 'react'
import { editPaidStudentDateFunc, editPaymentStudentAmountFunc, editPaymentStudentDateFunc, editPaymentStudentStatusFunc, editPaymentStudentTypeFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const EditStudentModalContainer = ({categoryId}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { editPaymentStudent, editPaymentStudentDate, editPaymentStudentAmount, editPaymentStudentType, editPaymentStudentStatus, refreshed, editPaidStudentDate } = useSelector(state => state.Data)
    console.log(editPaymentStudent);

    const editPaymentStudentSubmit = (e, id) => {
        e.preventDefault()
        const data = {
            payment_date: editPaymentStudentDate,
            paid_date: editPaidStudentDate,
            payment_amount: editPaymentStudentAmount,
            payment_type: editPaymentStudentType,
            status: editPaymentStudentStatus,
            student: editPaymentStudent.student.id,
            month: editPaymentStudent.month.id
        }

        console.log(data);

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}accounting/student-payment-retrieve-update/${id}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Tələbənin ödəniş məlumatları dəyişdirildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(function () {
                    navigate(`/category/${categoryId}`)
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

                navigate(`/category/${categoryId}`)
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

                <form onSubmit={(e) => editPaymentStudentSubmit(e, editPaymentStudent.id)}>
                    <div className='edit_student_payment'>
                        <label htmlFor="">Ödəniş tarixi</label>
                        <input type="date" value={editPaymentStudentDate} onChange={(e) => dispatch(editPaymentStudentDateFunc(e.target.value))} />
                    </div>
                    <div className='edit_student_payment'>
                        <label htmlFor="">Ödənildiyi tarix</label>
                        <input type="date" value={editPaidStudentDate} onChange={(e) => dispatch(editPaidStudentDateFunc(e.target.value))} />
                    </div>
                    <input type="number" value={editPaymentStudentAmount} onChange={(e) => dispatch(editPaymentStudentAmountFunc(e.target.value))} />
                    <select value={editPaymentStudentType} onChange={(e) => dispatch(editPaymentStudentTypeFunc(e.target.value))}>
                        <option value="N">Nağd</option>
                        <option value="HK">Hesaba köçürmə</option>
                    </select>
                    <div className='student_payment_status'>
                        <label htmlFor='paymentStatus'>Ödəniş statusu</label>
                        <input id='paymentStatus' type="checkbox" checked={editPaymentStudentStatus} onChange={(e) => dispatch(editPaymentStudentStatusFunc(e.target.checked))} />
                    </div>

                    <button style={{ marginLeft: 'auto', display: 'block' }} className='branch_update_modal_btn'>Save</button>

                </form>
            </div>

        </div>
    )
}

export default EditStudentModalContainer