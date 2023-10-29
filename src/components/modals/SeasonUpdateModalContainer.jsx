import React from 'react'
import { modalCloseFunc, modalOverlayFunc, seasonUpdateModalFunc, setRefreshed } from '../../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { baseUrl } from '../../MAIN_API'
import { useNavigate } from 'react-router-dom'

const SeasonUpdateModalContainer = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const { branchsSeasonsListArr,refreshed } = useSelector(state => state.Data)

    const seasonDeleteModalFunc=(id)=>{
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "DELETE",
            url: `${baseUrl}service/season-retrieve-update-delete/${id}/`
        }).then(resp => {
            console.log(resp);
            if (resp.status === 204) {

                Swal.fire({
                    title: "Sezon silindi",
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

                <div className="branch_update_modal_container">
                    {
                        branchsSeasonsListArr?.map((season, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{season.name}</p>
                                    <div className="season_update_delete_btns">
                                        <button onClick={() => dispatch(seasonUpdateModalFunc(season))} className='branch_update_modal_btn'>Dəyiş</button>
                                        <button onClick={() => seasonDeleteModalFunc(season.id)} className='branch_update_modal_btn'>Sil</button>
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

export default SeasonUpdateModalContainer