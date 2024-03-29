import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../MAIN_API';
import Swal from 'sweetalert2';
import { blockUpdateModalFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer';
import { getBlockList } from '../../actions/MainAction';

const BlockUpdateModalContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getBlockList())
    }, [dispatch])

    const { refreshed, blockListArr } = useSelector(state => state.Data)



    const blockDeleteFunc = (id) => {
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            url: `${baseUrl}service/block-retrieve-update-delete/${+id}/`,
            method: "DELETE",

        }).then(resp => {
            if (resp.status === 204) {

                Swal.fire({
                    title: "Blok silindi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(function () {
                    if (!refreshed) {
                        dispatch(setRefreshed())
                        window.location.reload();
                        navigate(`/branchs-category/${localStorage.getItem('branchId')}`)

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

                <div className="branch_update_modal_container">
                    {
                        blockListArr?.map((block, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{block.name}</p>
                                    <div className="season_update_delete_btns">
                                        <button onClick={() => dispatch(blockUpdateModalFunc(block))} className='branch_update_modal_btn'>Dəyiş</button>
                                        <button onClick={() => blockDeleteFunc(block.id)} className='branch_update_modal_btn'>Sil</button>
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

export default BlockUpdateModalContainer