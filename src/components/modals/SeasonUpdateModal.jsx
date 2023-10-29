import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { modalCloseFunc, modalOverlayFunc, seasonUpdateNameFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'

const SeasonUpdateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { refreshed,seasonUpdateName,seasonObj } = useSelector(state => state.Data)

    console.log(seasonObj);
    const seasonUpdate=(e,id)=>{
        e.preventDefault()

        const data={
            name: seasonUpdateName,
            branch: +localStorage.getItem('branchId')
        }
        console.log(data);

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}service/season-retrieve-update-delete/${id}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Sezon dəyişdildi",
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
                <form onSubmit={(e)=>seasonUpdate(e,seasonObj.id)}>
                    <input value={seasonUpdateName} onChange={(e) => dispatch(seasonUpdateNameFunc(e.target.value))} type="text" placeholder='Enter season name' />
                    <div className="branchs_create modal_save_btn_container">
                        <button>Dəyiş</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SeasonUpdateModal