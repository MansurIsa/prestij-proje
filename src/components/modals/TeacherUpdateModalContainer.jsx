import React, { useEffect } from 'react'
import { modalCloseFunc, modalOverlayFunc, teacherUpdateModalFunc } from '../../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchsTeachersList } from '../../actions/MainAction';

const TeacherUpdateModalContainer = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBranchsTeachersList(localStorage.getItem('selectedSeason')))
    },[dispatch])

    const {branchsTeachersListArr}=useSelector(state=>state.Data)
    console.log(branchsTeachersListArr);
    return (
        <div className="modal_container">
            <div onClick={() => dispatch(modalOverlayFunc())} className='overlay'></div>
            <div className="branch_create_modal_card">
                <button onClick={() => dispatch(modalCloseFunc())} className='modal_close_btn'>Close</button>

                <div className="branch_update_modal_container">
                    {
                        branchsTeachersListArr?.map((teacher, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{teacher.first_name + ' ' + teacher.last_name}</p>
                                    <div className="season_update_delete_btns">
                                        <button onClick={() => dispatch(teacherUpdateModalFunc(teacher))} className='branch_update_modal_btn'>Dəyiş</button>
                                        {/* <button onClick={() => teacherDeleteFunc(teacher.id)} className='branch_update_modal_btn'>Sil</button> */}
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

export default TeacherUpdateModalContainer