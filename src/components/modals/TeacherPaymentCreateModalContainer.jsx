import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBranchsTeachersList } from '../../actions/MainAction'
import { modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'

const TeacherPaymentCreateModalContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getBranchsTeachersList(localStorage.getItem('selectedSeason')))
    }, [dispatch])


    const { refreshed, branchsTeachersListArr } = useSelector(state => state.Data)
    console.log(branchsTeachersListArr);


    const [clickedTeacherPayment, setClickedTeacherPayment] = useState([]);
    useEffect(() => {
        const storedClickedTeacher = localStorage.getItem('clickedTeacher');
        if (storedClickedTeacher) {
            setClickedTeacherPayment(JSON.parse(storedClickedTeacher));
        }
    }, []);


    const teacherPaymentCreate = (teacher) => {
        console.log(teacher);

        const data = {
            first_name: teacher.first_name,
            last_name: teacher.last_name,
            specialty: teacher.specialty,
            section: teacher.section,
            salary: teacher.salary,
            phone_number1: teacher.phone_number1,
            wp_number: teacher.wp_number,
            status: teacher.status,
            payment_date: teacher.payment_date,
            payment_amount: teacher.payment_amount,
            season: localStorage.getItem('selectedSeason')
        }

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}service/teacher-retrieve-update-delete/${teacher.id}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Ödəniş məlumatlarını yaradıldı",
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

                const updatedClickedTeachers = [...clickedTeacherPayment, teacher.id];

                // Store the updated clicked months in local storage
                localStorage.setItem('clickedTeacher', JSON.stringify(updatedClickedTeachers));

                setClickedTeacherPayment(updatedClickedTeachers);
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

                <div className="branch_update_modal_container">
                    {
                        branchsTeachersListArr?.map((teacher, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{teacher.first_name + ' ' + teacher.last_name}</p>
                                    <div className="season_update_delete_btns">

                                        {
                                            clickedTeacherPayment.includes(teacher.id) ? (
                                                <button disabled style={{ backgroundColor: 'green' }} className='branch_update_modal_btn'>
                                                    Ödəniş məlumatları yaradıldı
                                                </button>
                                            ) : (
                                                <button onClick={() => teacherPaymentCreate(teacher)} className='branch_update_modal_btn'>Ödəniş məlumatlarını yarat</button>
                                            )
                                        }
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>


        </div>
    )
}

export default TeacherPaymentCreateModalContainer