import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { modalCloseFunc, modalOverlayFunc, setRefreshed, teacherUpdateNameFunc, teacherUpdatePaymentDateFunc, teacherUpdatePaymentMoneyFunc, teacherUpdateSalaryFunc, teacherUpdateSeasonSelectValueFunc, teacherUpdateSectionFunc, teacherUpdateSpecialtyFunc, teacherUpdateStatusValueFunc, teacherUpdateSurnameFunc, teacherUpdateTelFirstFunc, teacherUpdateWpFunc } from '../../redux/MainReducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { baseUrl } from '../../MAIN_API'

const TeacherUpdateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const { teacherUpdateName, teacherUpdateSurname, teacherUpdateTelFirst, teacherUpdateWp, teacherUpdateSpecialty,
        teacherUpdateSection, teacherUpdateSalary, teacherUpdateStatusValue, teacherUpdatePaymentDate, teacherUpdatePaymentMoney,
        teacherUpdateSeasonSelectValue, branchsSeasonsListArr,refreshed,teacherObj } = useSelector(state => state.Data);

        console.log(teacherUpdateSeasonSelectValue);
        const teacherUpdate=(e,id)=>{
            e.preventDefault()

            const data={
                first_name: teacherUpdateName,
                last_name: teacherUpdateSurname,
                specialty: teacherUpdateSpecialty,
                section: teacherUpdateSection,
                salary: teacherUpdateSalary,
                phone_number1: teacherUpdateTelFirst,
                wp_number: teacherUpdateWp,
                status: teacherUpdateStatusValue,
                payment_date: teacherUpdatePaymentDate,
                payment_amount: teacherUpdatePaymentMoney,
                season: teacherUpdateSeasonSelectValue
            }
            console.log(data);
            axios({
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                },
                method: "PUT",
                url: `${baseUrl}service/teacher-retrieve-update-delete/${id}/`,
                data
            }).then(resp => {
                console.log(resp);
                if (resp.status === 200) {
    
                    Swal.fire({
                        title: "Müəllim məlumatları dəyişdirildi",
                        icon: "success",
                        confirmButtonText: "OK",
                        width: "400px"
                    }).then(function () {
                        navigate(`/branchs-category/${localStorage.getItem('branchId')}`)
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
    
                    navigate(`/branchs-category/${localStorage.getItem('branchId')}`)
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
            <div className="branch_create_modal_card">
                <button onClick={() => dispatch(modalCloseFunc())} className='modal_close_btn'>Close</button>
                <form onSubmit={(e)=>teacherUpdate(e,teacherObj.id)}>
                    <input value={teacherUpdateName} onChange={(e) => dispatch(teacherUpdateNameFunc(e.target.value))} type="text" placeholder='Enter teacher name' />
                    <input value={teacherUpdateSurname} onChange={(e) => dispatch(teacherUpdateSurnameFunc(e.target.value))} type="text" placeholder='Enter teacher surname' />
                    <input value={teacherUpdateTelFirst} onChange={(e) => dispatch(teacherUpdateTelFirstFunc(e.target.value))} type="text" placeholder='Enter teacher tel number' />
                    <input value={teacherUpdateWp} onChange={(e) => dispatch(teacherUpdateWpFunc(e.target.value))} type="text" placeholder='Enter teacher wp number' />
                    <input value={teacherUpdateSpecialty} onChange={(e) => dispatch(teacherUpdateSpecialtyFunc(e.target.value))} type="text" placeholder='Enter teacher specialty' />
                    <input value={teacherUpdateSection} onChange={(e) => dispatch(teacherUpdateSectionFunc(e.target.value))} type="text" placeholder='Enter teacher section' />
                    <input value={teacherUpdateSalary} onChange={(e) => dispatch(teacherUpdateSalaryFunc(e.target.value))} type="text" placeholder='Enter teacher salary number' />
                    <select onChange={(e) => dispatch(teacherUpdateStatusValueFunc(e.target.value))} value={teacherUpdateStatusValue}>
                        <option value="QE">Qeyd edilməyib</option>
                        <option value="TS">Tələbə sayı</option>
                        <option value="FM">Fixed maaş</option>
                    </select>
                    <input value={teacherUpdatePaymentDate} onChange={(e) => dispatch(teacherUpdatePaymentDateFunc(e.target.value))} type="date" />
                    <input value={teacherUpdatePaymentMoney} onChange={(e) => dispatch(teacherUpdatePaymentMoneyFunc(e.target.value))} type="number" placeholder='Enter payment money' />
                    <select onChange={(e) => dispatch(teacherUpdateSeasonSelectValueFunc(e.target.value))} value={teacherUpdateSeasonSelectValue}>
                        <option value="" disabled>Sezon seçin</option>
                        {
                            branchsSeasonsListArr?.map((data, i) => {
                                return <option key={data.id} value={data.id}>{data.name}</option>
                            })
                        }

                    </select>



                    <div className="branchs_create modal_save_btn_container">
                        <button>Dəyiş</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default TeacherUpdateModal