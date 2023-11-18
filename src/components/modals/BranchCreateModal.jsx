import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { branchNameFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const BranchCreateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const { branchName, refreshed } = useSelector(state => state.Data)

    const branchCreate = (e) => {
        e.preventDefault()
        const data = {
            name: branchName
        }
        console.log(data);
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "POST",
            url: `https://prestijs.pythonanywhere.com/api/service/branch-create/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Filial yaradıldı",
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
                <form onSubmit={branchCreate}>
                    <input value={branchName} onChange={(e) => dispatch(branchNameFunc(e.target.value))} type="text" placeholder='Enter branch name' />
                    <div className="branchs_create modal_save_btn_container">
                        <button>Save</button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default BranchCreateModal