import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const MonthCreateModalContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { branchsSeasonsListArr, refreshed } = useSelector(state => state.Data)

    // const [clicked, setClicked] = useState(false)
    const [clickedMonths, setClickedMonths] = useState([]);

    // Check local storage for previously clicked months on component mount
    useEffect(() => {
        const storedClickedMonths = localStorage.getItem('clickedMonths');
        if (storedClickedMonths) {
            setClickedMonths(JSON.parse(storedClickedMonths));
        }
    }, []);

    const monthUpdateModalFunc = (month) => {
        const data = {
            name: month.name,
            branch: +localStorage.getItem('branchId')
        }
        console.log(data);

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}service/season-retrieve-update-delete/${month.id}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Sezona uyğun aylar yaradıldı",
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
                const updatedClickedMonths = [...clickedMonths, month.id];

                // Store the updated clicked months in local storage
                localStorage.setItem('clickedMonths', JSON.stringify(updatedClickedMonths));

                setClickedMonths(updatedClickedMonths);
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
                        branchsSeasonsListArr?.map((month, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{month.name}</p>
                                    <div className="season_update_delete_btns">
                                       

                                        {
                                            clickedMonths.includes(month.id) ? (
                                                <button disabled style={{ backgroundColor: 'green' }} className='branch_update_modal_btn'>
                                                    Ayları yaradıldı
                                                </button>
                                            ) : (
                                                <button onClick={() => monthUpdateModalFunc(month)} className='branch_update_modal_btn'>
                                                    Ayları yarat
                                                </button>
                                            )
                                        }


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

export default MonthCreateModalContainer