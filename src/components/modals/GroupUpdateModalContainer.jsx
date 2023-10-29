import React, { useEffect } from 'react'
import { groupsUpdateModalFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsList } from '../../actions/MainAction';
import Swal from 'sweetalert2';
import { baseUrl } from '../../MAIN_API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GroupUpdateModalContainer = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(getGroupsList())
    },[dispatch])

    const { refreshed,groupsListArr } = useSelector(state => state.Data)

    console.log(groupsListArr);


    const groupsDeleteFunc=(id)=>{
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            url: `${baseUrl}service/group-retrieve-update-delete/${+id}/`,
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
                        groupsListArr?.map((groups, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{groups.name}</p>
                                    <div className="season_update_delete_btns">
                                        <button onClick={() => dispatch(groupsUpdateModalFunc(groups))} className='branch_update_modal_btn'>Dəyiş</button>
                                        <button onClick={() => groupsDeleteFunc(groups.id)} className='branch_update_modal_btn'>Sil</button>
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

export default GroupUpdateModalContainer