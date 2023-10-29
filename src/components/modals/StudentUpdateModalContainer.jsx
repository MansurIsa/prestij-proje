import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { modalCloseFunc, modalOverlayFunc, setRefreshed, studentUpdateModalFunc } from '../../redux/MainReducer';
import { getBranchsStudentsList } from '../../actions/MainAction';
import axios from 'axios';
import Swal from 'sweetalert2';
import { baseUrl } from '../../MAIN_API';

const StudentUpdateModalContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getBranchsStudentsList(localStorage.getItem('selectedSeason')))
    },[dispatch])

    const {branchsStudentsListArr,refreshed}=useSelector(state=>state.Data)
    console.log(branchsStudentsListArr);


    const studentDeleteFunc=(id)=>{
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            url: `${baseUrl}service/student-retrieve-update-delete/${+id}/`,
            method: "DELETE",

        }).then(resp => {
            console.log(resp);
            if (resp.status === 204) {

                Swal.fire({
                    title: "Tələbə silindi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(function () {
                    if (!refreshed) {
                        dispatch(setRefreshed())
                        window.location.reload();
                        navigate(`/branchs-category/${localStorage.getItem('branchId')}`)

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

                <div className="branch_update_modal_container">
                    {
                        branchsStudentsListArr?.map((student, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{student.first_name + ' '+ student.last_name}</p>
                                    <div className="season_update_delete_btns">
                                        <button onClick={() => dispatch(studentUpdateModalFunc(student))} className='branch_update_modal_btn'>Dəyiş</button>
                                        <button onClick={() => studentDeleteFunc(student.id)} className='branch_update_modal_btn'>Sil</button>
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

export default StudentUpdateModalContainer