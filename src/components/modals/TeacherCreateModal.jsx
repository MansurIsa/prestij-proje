import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { modalCloseFunc, modalOverlayFunc, setRefreshed, teacherCreateNameFunc, teacherCreatePaymentDateFunc, teacherCreatePaymentMoneyFunc, teacherCreateSalaryFunc, teacherCreateSeasonSelectValueFunc, teacherCreateSectionFunc, teacherCreateSpecialtyFunc, teacherCreateStatusValueFunc, teacherCreateSurnameFunc, teacherCreateTelFirstFunc, teacherCreateWpFunc } from '../../redux/MainReducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { baseUrl } from '../../MAIN_API'

const TeacherCreateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const { teacherCreateName, teacherCreateSurname, teacherCreateTelFirst, teacherCreateWp, teacherCreateSpecialty,
        teacherCreateSection, teacherCreateSalary, teacherCreateStatusValue, teacherCreatePaymentDate, teacherCreatePaymentMoney,
        teacherCreateSeasonSelectValue, branchsSeasonsListArr,refreshed } = useSelector(state => state.Data);

    useEffect(() => {

    }, [dispatch])

    const teacherCreate = (e) => {
        e.preventDefault()

        const data = {
            first_name: teacherCreateName,
            last_name: teacherCreateSurname,
            specialty: teacherCreateSpecialty,
            section: teacherCreateSection,
            salary: teacherCreateSalary,
            phone_number1: teacherCreateTelFirst,
            wp_number: teacherCreateWp,
            status: teacherCreateStatusValue,
            payment_date: teacherCreatePaymentDate,
            payment_amount: teacherCreatePaymentMoney,
            season: teacherCreateSeasonSelectValue
        }

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "POST",
            url: `${baseUrl}service/teacher-create/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Müəllim yaradıldı",
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
                <form onSubmit={teacherCreate}>
                    <input value={teacherCreateName} onChange={(e) => dispatch(teacherCreateNameFunc(e.target.value))} type="text" placeholder='Enter teacher name' />
                    <input value={teacherCreateSurname} onChange={(e) => dispatch(teacherCreateSurnameFunc(e.target.value))} type="text" placeholder='Enter teacher surname' />
                    <input value={teacherCreateTelFirst} onChange={(e) => dispatch(teacherCreateTelFirstFunc(e.target.value))} type="text" placeholder='Enter teacher tel number' />
                    <input value={teacherCreateWp} onChange={(e) => dispatch(teacherCreateWpFunc(e.target.value))} type="text" placeholder='Enter teacher wp number' />
                    <input value={teacherCreateSpecialty} onChange={(e) => dispatch(teacherCreateSpecialtyFunc(e.target.value))} type="text" placeholder='Enter teacher specialty' />
                    <input value={teacherCreateSection} onChange={(e) => dispatch(teacherCreateSectionFunc(e.target.value))} type="text" placeholder='Enter teacher section' />
                    <input value={teacherCreateSalary} onChange={(e) => dispatch(teacherCreateSalaryFunc(e.target.value))} type="text" placeholder='Enter teacher salary number' />
                    <select onChange={(e) => dispatch(teacherCreateStatusValueFunc(e.target.value))} value={teacherCreateStatusValue}>
                        <option value="QE">Qeyd edilməyib</option>
                        <option value="TS">Tələbə sayı</option>
                        <option value="FM">Fixed maaş</option>
                    </select>
                    <input value={teacherCreatePaymentDate} onChange={(e) => dispatch(teacherCreatePaymentDateFunc(e.target.value))} type="date" />
                    <input value={teacherCreatePaymentMoney} onChange={(e) => dispatch(teacherCreatePaymentMoneyFunc(e.target.value))} type="number" placeholder='Enter payment money' />
                    <select onChange={(e) => dispatch(teacherCreateSeasonSelectValueFunc(e.target.value))} value={teacherCreateSeasonSelectValue}>
                        <option value="" disabled>Sezon seçin</option>
                        {
                            branchsSeasonsListArr?.map((data, i) => {
                                return <option key={data.id} value={data.id}>{data.name}</option>
                            })
                        }

                    </select>



                    <div className="branchs_create modal_save_btn_container">
                        <button>Yarat</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default TeacherCreateModal