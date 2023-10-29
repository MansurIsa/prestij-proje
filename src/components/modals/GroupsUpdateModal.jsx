import React from 'react'
import { classUpdateCategoryChange, groupsUpdateNameFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { baseUrl } from '../../MAIN_API'
import { useNavigate } from 'react-router-dom'

const GroupsUpdateModal = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const {refreshed, groupsObj,groupsUpdateName,categoryListArr,classUpdateSelectValue } = useSelector(state => state.Data)
    const groupsUpdate=(e,id)=>{
        e.preventDefault()

        const data={
            name: groupsUpdateName,
            categories: classUpdateSelectValue
        }
        console.log(data);

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}service/group-retrieve-update-delete/${+id}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Qrup dəyişdildi",
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
                <form onSubmit={(e) => groupsUpdate(e, groupsObj.id)}>
                    <input value={groupsUpdateName} onChange={(e) => dispatch(groupsUpdateNameFunc(e.target.value))} type="text" placeholder='Enter group name' />
                    <select onChange={(e) => dispatch(classUpdateCategoryChange(e.target.value))} value={classUpdateSelectValue}>
                        <option selected disabled value="">Kateqoriya seç</option>
                        {
                            categoryListArr?.map((data, i) => {
                                return <option value={data.id}>{data.name}</option>
                            })
                        }

                    </select>
                    <div className="branchs_create modal_save_btn_container">
                        <button>Dəyiş</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default GroupsUpdateModal