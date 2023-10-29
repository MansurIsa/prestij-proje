import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoryCreateNameFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer';
import axios from 'axios';
import { baseUrl } from '../../MAIN_API';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CategoryCreateModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {categoryCreateName,refreshed}=useSelector(state=>state.Data)
    const categoryCreate=(e)=>{
        e.preventDefault()

        const data={
            name: categoryCreateName
        }
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "POST",
            url: `${baseUrl}service/category-list-create/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Kateqoriya yaradıldı",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(function () {
                    navigate(`/branchs-category/${+localStorage.getItem('branchId')}`)
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

                navigate(`/branchs-category/${+localStorage.getItem('branchId')}`)
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
                <form onSubmit={categoryCreate}>
                    <input value={categoryCreateName} onChange={(e) => dispatch(categoryCreateNameFunc(e.target.value))} type="text" placeholder='Enter category name' />
                    <div className="branchs_create modal_save_btn_container">
                        <button>Yarat</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CategoryCreateModal