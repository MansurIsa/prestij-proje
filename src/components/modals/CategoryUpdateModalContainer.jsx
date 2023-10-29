import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryUpdateModalFunc, modalCloseFunc, modalOverlayFunc, setRefreshed } from '../../redux/MainReducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { baseUrl } from '../../MAIN_API'
import { useNavigate } from 'react-router-dom'

const CategoryUpdateModalContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { categoryListArr,refreshed } = useSelector(state => state.Data)

    const categoryDeleteFunc = (id) => {
        axios({
          headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
          },
          method: "DELETE",
          url: `${baseUrl}service/category-retrieve-update-delete/${id}/`,
        })
          .then((resp) => {
            console.log(resp);
            if (resp.status === 204) {
              Swal.fire({
                title: "Kateqoriya silindi",
                icon: "success",
                confirmButtonText: "OK",
                width: "400px",
              }).then(function () {
                navigate(`/branchs-category/${localStorage.getItem('branchId')}`);
                if (!refreshed) {
                    dispatch(setRefreshed())
                    window.location.reload();
                }
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '',
            }).then(function () {
              navigate(`/branchs-category/${localStorage.getItem('branchId')}`);
              if (!refreshed) {
                dispatch(setRefreshed())
                window.location.reload();
            }
            });
          });
      };
      
    return (
        <div className="modal_container">
            <div onClick={() => dispatch(modalOverlayFunc())} className='overlay'></div>
            <div className="branch_create_modal_card">
                <button onClick={() => dispatch(modalCloseFunc())} className='modal_close_btn'>Close</button>

                <div className="branch_update_modal_container">
                    {
                        categoryListArr?.map((category, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{category.name}</p>
                                    <div className="season_update_delete_btns">
                                        <button onClick={() => dispatch(categoryUpdateModalFunc(category))} className='branch_update_modal_btn'>Dəyiş</button>
                                        <button onClick={() => categoryDeleteFunc(category.id)} className='branch_update_modal_btn'>Sil</button>
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

export default CategoryUpdateModalContainer