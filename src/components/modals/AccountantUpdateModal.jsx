import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { accountantBranchSelectFunc, accountantEmailFunc, accountantNameFunc, accountantSurnameFunc, isAccountantFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import { getBranchsList } from '../../actions/MainAction'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const AccountantUpdateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { accountantObj, accountantName, accountantSurname, accountantEmail, isAccountantValue, branchsListArr,
        accountantBranchSelectValue,refreshed } = useSelector(state => state.Data)
    console.log(accountantObj);
    console.log(isAccountantValue);
    let loggedInEmail = localStorage.getItem('loggedInEmail')

    useEffect(() => {
        dispatch(getBranchsList(loggedInEmail))
    }, [dispatch,loggedInEmail])

    console.log(branchsListArr);

    const accountantUpdate = (e) => {
        e.preventDefault()
        const data = {
            first_name: accountantName,
            last_name: accountantSurname,
            email: accountantEmail,
            // is_staff: false,
            is_accountant: isAccountantValue,
            branch: accountantBranchSelectValue,
        }

        console.log(data);

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}account/account/${accountantObj.email}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Mühasib dəyişdildi",
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
                    <form onSubmit={accountantUpdate}>
                        <input value={accountantName} onChange={(e) => dispatch(accountantNameFunc(e.target.value))} type="text" placeholder='Mühasibin adını daxil edin' />
                        <input value={accountantSurname} onChange={(e) => dispatch(accountantSurnameFunc(e.target.value))} type="text" placeholder='Mühasibin soyadını daxil edin' />
                        <input value={accountantEmail} onChange={(e) => dispatch(accountantEmailFunc(e.target.value))} type="email" placeholder='Mühasibin emailini daxil edin' />
                        <div className="register_check isAccountant">
                            <label htmlFor="isAccountant">is accountant</label>
                            <input id='isAccountant' checked={isAccountantValue} onChange={(e) => dispatch(isAccountantFunc(e.target.checked))} type="checkbox" />
                        </div>
                        <select value={accountantBranchSelectValue} onChange={(e) => dispatch(accountantBranchSelectFunc(e.target.value))}>
                            {
                                branchsListArr?.map((data, i) => {
                                    return <option value={data.id}>{data.name}</option>
                                })
                            }

                        </select>
                        <div className="modal_save_btn_container">
                            <button>Save</button>
                        </div>
                        
                    </form>

                </div>

            </div>

        </div>
    )
}

export default AccountantUpdateModal