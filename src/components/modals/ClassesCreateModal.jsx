import React from 'react'
import { categoryChange, classesCreateNameFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../MAIN_API';
import Swal from 'sweetalert2';

const ClassesCreateModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { refreshed,classesCreateName,categoryListArr,categorySelectValue } = useSelector(state => state.Data)

    console.log(categoryListArr);

    
    const classesCreate=(e)=>{
        e.preventDefault()

        const data={
            name: classesCreateName,
            categories: +categorySelectValue
        }
        console.log(data);

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "POST",
            url: `${baseUrl}service/class-list-create/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Sinif yaradıldı",
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
                <form onSubmit={classesCreate}>
                    <input value={classesCreateName} onChange={(e) => dispatch(classesCreateNameFunc(e.target.value))} type="text" placeholder='Enter class name' />
                    <select onChange={(e)=>dispatch(categoryChange(e.target.value))} value={categorySelectValue}>
                        <option selected disabled value="">Kateqoriya seç</option>
                        {
                            categoryListArr?.map((data,i)=>{
                                return <option value={data.id}>{data.name}</option>
                            })
                        }
                        
                    </select>
                    <div className="branchs_create modal_save_btn_container">
                        <button>Yarat</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ClassesCreateModal