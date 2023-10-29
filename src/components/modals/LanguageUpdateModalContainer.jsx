import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLanguageList } from '../../actions/MainAction';
import { languageUpdateModalFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer';
import axios from 'axios';
import { baseUrl } from '../../MAIN_API';
import Swal from 'sweetalert2';

const LanguageUpdateModalContainer = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(getLanguageList())
    },[dispatch])

    const { refreshed,languageListArr } = useSelector(state => state.Data)

    console.log(languageListArr);


    const languageDeleteFunc=(id)=>{
        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            url: `${baseUrl}service/language-retrieve-update-delete/${+id}/`,
            method: "DELETE",

        }).then(resp => {
            console.log(resp);
            if (resp.status === 204) {

                Swal.fire({
                    title: "Xarici dil silindi",
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
                        languageListArr?.map((language, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{language.name}</p>
                                    <div className="season_update_delete_btns">
                                        <button onClick={() => dispatch(languageUpdateModalFunc(language))} className='branch_update_modal_btn'>Dəyiş</button>
                                        <button onClick={() => languageDeleteFunc(language.id)} className='branch_update_modal_btn'>Sil</button>
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

export default LanguageUpdateModalContainer