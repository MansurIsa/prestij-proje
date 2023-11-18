import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { branchUpdateModalFunc, modalCloseFunc, modalOverlayFunc } from '../../redux/MainReducer'

const BranchUpdateModalContainer = () => {
    const dispatch = useDispatch()
    const { branchsListArr } = useSelector(state => state.Data)
    console.log(branchsListArr);
    return (
        <div className="modal_container">
            <div onClick={() => dispatch(modalOverlayFunc())} className='overlay'></div>
            <div className="branch_create_modal_card">
                <button onClick={() => dispatch(modalCloseFunc())} className='modal_close_btn'>Close</button>

                <div className="branch_update_modal_container">
                    {
                        branchsListArr?.map((branch, i) => {
                            return (
                                <div key={i} className="branch_update_modal_card">
                                    <p>{branch.name}</p>
                                    <button onClick={() => dispatch(branchUpdateModalFunc(branch))} className='branch_update_modal_btn'>Dəyiş</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>


        </div>
    )
}

export default BranchUpdateModalContainer