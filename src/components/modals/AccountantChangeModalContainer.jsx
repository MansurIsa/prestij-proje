import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { accountantUpdateModalFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import { getAccountants } from '../../actions/MainAction'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const AccountantChangeModalContainer = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const {accountants,refreshed}=useSelector(state=>state.Data)

    useEffect(()=>{
        dispatch(getAccountants())
    },[dispatch])

    console.log(accountants);


    const accountantDelete=(el)=>{
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "DELETE",
            url: `${baseUrl}account/account/${el.email}/`,
        }).then(resp => {
            console.log(resp);
            if (resp.status === 204) {

                Swal.fire({
                    title: "Mühasib silindi",
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
                        accountants?.map((accountant, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{accountant.first_name} {accountant.last_name}</p>
                                    <div className="season_update_delete_btns">
                                        <button onClick={() => dispatch(accountantUpdateModalFunc(accountant))} className='branch_update_modal_btn'>Dəyiş</button>
                                        <button onClick={() => accountantDelete(accountant)} className='branch_update_modal_btn'>Sil</button>
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

export default AccountantChangeModalContainer