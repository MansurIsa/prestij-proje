import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalCloseFunc, modalOverlayFunc, seasonCreateNameFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const SeasonCreateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { seasonCreateName,refreshed } = useSelector(state => state.Data)

    const seasonCreate=(e)=>{
        e.preventDefault()
        const data={
            name: seasonCreateName,
            branch: +localStorage.getItem('branchId')
        }
        console.log(data);

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "POST",
            url: `${baseUrl}service/season-create/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Sezon yaradıldı",
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
                <form onSubmit={seasonCreate}>
                    <input value={seasonCreateName} onChange={(e) => dispatch(seasonCreateNameFunc(e.target.value))} type="text" placeholder='Enter season name' />
                    <div className="branchs_create modal_save_btn_container">
                        <button>Yarat</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SeasonCreateModal