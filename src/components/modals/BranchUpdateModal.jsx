import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  branchUpdateNameFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'

const BranchUpdateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const { branchUpdateName, refreshed,branchObj } = useSelector(state => state.Data)


    const branchUpdate=(e,id)=>{
        e.preventDefault()
        console.log(id,e);
        console.log(branchUpdateName);
        const data={
            name: branchUpdateName
        }
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}service/branch-retrieve-update-delete/${id}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Filial dəyişdildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(function () {
                    navigate('/accounting')
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

                navigate('/accounting')
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
                <form onSubmit={(e)=>branchUpdate(e,branchObj.id)}>
                    <input value={branchUpdateName} onChange={(e) => dispatch(branchUpdateNameFunc(e.target.value))} type="text" placeholder='Enter branch name' />
                    <div className="branchs_create modal_save_btn_container">
                        <button>Dəyiş</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default BranchUpdateModal