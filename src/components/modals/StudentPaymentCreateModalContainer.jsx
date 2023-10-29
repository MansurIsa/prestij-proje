import React, { useEffect, useState } from 'react'
import { modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getBranchsStudentsList } from '../../actions/MainAction'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const StudentPaymentCreateModalContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getBranchsStudentsList(localStorage.getItem('selectedSeason')))
    }, [dispatch])


    const { refreshed, branchsStudentsListArr } = useSelector(state => state.Data)
    console.log(branchsStudentsListArr);


    const [clickedStudentPayment, setClickedStudentPayment] = useState([]);
    useEffect(() => {
        const storedClickedStudent = localStorage.getItem('clickedStudent');
        if (storedClickedStudent) {
            setClickedStudentPayment(JSON.parse(storedClickedStudent));
        }
    }, []);
    const studentPaymentCreate = (dataStudent) => {

        const data = {
            first_name: dataStudent.first_name,
            last_name: dataStudent.last_name,
            phone_number1: dataStudent.phone_number1,
            phone_number2: dataStudent.phone_number2,
            wp_number: dataStudent.wp_number,
            status: dataStudent.status,
            dim_point: dataStudent.dim_point,
            sector: dataStudent.sector,
            specialty: dataStudent.specialty,
            payment_date: dataStudent.payment_date,
            payment_amount: dataStudent.payment_amount,
            season: dataStudent.season,
            abiturient_class: dataStudent.abiturient_class,
            group: dataStudent.group,
            language: dataStudent.language,
            categories: dataStudent.categories.map(category=>{
                return category.name
            }),
            teachers: dataStudent.teachers.map(teacher=>{
                return teacher.first_name
            }),
            blocks: dataStudent.blocks.map(block=>{
                return block.name
            }),
            subjects: dataStudent.subjects.map(subject=>{
                return subject.name
            })
        }
        console.log(data);
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}service/student-retrieve-update-delete/${dataStudent.id}/`,
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

                const updatedClickedStudents = [...clickedStudentPayment, dataStudent.id];

                // Store the updated clicked months in local storage
                localStorage.setItem('clickedStudent', JSON.stringify(updatedClickedStudents));

                setClickedStudentPayment(updatedClickedStudents);
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
                        branchsStudentsListArr?.map((student, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{student.first_name + ' ' + student.last_name}</p>
                                    <div className="season_update_delete_btns">
                                        
                                        {
                                            clickedStudentPayment.includes(student.id) ? (
                                                <button disabled style={{ backgroundColor: 'green' }} className='branch_update_modal_btn'>
                                                    Ödəniş məlumatları yaradıldı
                                                </button>
                                            ) : (
                                                <button onClick={() => studentPaymentCreate(student)} className='branch_update_modal_btn'>Ödəniş məlumatlarını yarat</button>
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

export default StudentPaymentCreateModalContainer