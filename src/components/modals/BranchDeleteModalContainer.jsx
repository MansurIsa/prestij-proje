import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { baseUrl } from '../../MAIN_API'
import { useNavigate } from 'react-router-dom'

const BranchDeleteModalContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { branchsListArr, refreshed } = useSelector(state => state.Data)

    const branchDeleteModalFunc = (id) => {
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "DELETE",
            url: `${baseUrl}service/branch-retrieve-update-delete/${id}/`
        }).then(resp => {
            console.log(resp);
            if (resp.status === 204) {

                Swal.fire({
                    title: "Filial silindi",
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

                <div className="branch_update_modal_container">
                    {
                        branchsListArr?.map((branch, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{branch.name}</p>
                                    <button onClick={() => branchDeleteModalFunc(branch.id)} className='branch_update_modal_btn'>Sil</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>


        </div>
    )
}

export default BranchDeleteModalContainer