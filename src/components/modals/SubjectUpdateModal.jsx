import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'
import { classUpdateCategoryChange, modalCloseFunc, modalOverlayFunc, setRefreshed, subjectUpdateNameFunc } from '../../redux/MainReducer'

const SubjectUpdateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { subjectObj, categoryListArr, classUpdateSelectValue, refreshed, subjectUpdateName } = useSelector(state => state.Data)

    const subjectUpdate = (e, id) => {
        e.preventDefault()
        const data = {
            name: subjectUpdateName,
            categories: classUpdateSelectValue
        }


        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}service/subject-retrieve-update-delete/${+id}/`,
            data
        }).then(resp => {
            if (resp.status === 200) {

                Swal.fire({
                    title: "Fənn dəyişdirildi",
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
                <form onSubmit={(e) => subjectUpdate(e, subjectObj.id)}>
                    <input value={subjectUpdateName} onChange={(e) => dispatch(subjectUpdateNameFunc(e.target.value))} type="text" placeholder='Enter class name' />
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

export default SubjectUpdateModal