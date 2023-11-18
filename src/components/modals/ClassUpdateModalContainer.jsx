import React, { useEffect } from 'react'
import {  classesUpdateModalFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getclassesList } from '../../actions/MainAction'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'

const ClassUpdateModalContainer = () => {
    const dispatch = useDispatch()
    const navigate = useDispatch()
    useEffect(() => {
        dispatch(getclassesList())
    }, [dispatch])
    const { classesListArr, refreshed } = useSelector(state => state.Data)

    const classesDeleteFunc = (id) => {
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            url: `${baseUrl}service/class-retrieve-update-delete/${+id}/`,
            method: "DELETE",

        }).then(resp => {
            console.log(resp);
            if (resp.status === 204) {

                Swal.fire({
                    title: "Sinif silindi",
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

                if (!refreshed) {
                    dispatch(setRefreshed())
                    window.location.reload();
                    navigate(`/branchs-category/${localStorage.getItem('branchId')}`)

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
                        classesListArr?.map((classes, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{classes.name}</p>
                                    <div className="season_update_delete_btns">
                                        <button onClick={() => dispatch(classesUpdateModalFunc(classes))} className='branch_update_modal_btn'>Dəyiş</button>
                                        <button onClick={() => classesDeleteFunc(classes.id)} className='branch_update_modal_btn'>Sil</button>
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

export default ClassUpdateModalContainer