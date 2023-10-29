import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryUpdateNameFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../MAIN_API'

const CategoryUpdateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {categoryObj,categoryUpdateName,refreshed}=useSelector(state=>state.Data)

    const categoryUpdate=(e,id)=>{
        e.preventDefault()
        

        const data={
            name: categoryUpdateName
        }
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}service/category-retrieve-update-delete/${id}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Kateqoriya dəyişdildi",
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
                <form onSubmit={(e) => categoryUpdate(e, categoryObj.id)}>
                    <input value={categoryUpdateName} onChange={(e) => dispatch(categoryUpdateNameFunc(e.target.value))} type="text" placeholder='Enter category name' />
                    <div className="branchs_create modal_save_btn_container">
                        <button>Dəyiş</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CategoryUpdateModal