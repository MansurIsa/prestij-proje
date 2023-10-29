import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBranchsId } from '../redux/MainReducer'

const BranchsCard = ({ data }) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleBranchsCard=(id)=>{
        dispatch(getBranchsId(id))
        navigate(`/branchs-category/${id}`)

    }
    return (
        
            <div onClick={()=>handleBranchsCard(data.id)} className='branchs_card'>
                <h2>{data.name}</h2>
            </div>
        

    )
}

export default BranchsCard