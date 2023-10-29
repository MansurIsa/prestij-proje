import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAccountingStudentMonthPaymentList } from '../actions/MainAction'

const CategoryListCard = ({data}) => {
    let selectedSeason=localStorage.getItem('selectedSeason')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleCategoryCard=(id)=>{
        navigate(`/category/${id}`)
        // dispatch(getAccountingStudentMonthPaymentList(selectedSeason,id))
        window.location.reload();
    }
    return (
        <div onClick={()=>handleCategoryCard(data.id)} className="branchs_services_card">
            <h2>{data.name}</h2>
        </div>
    )
}

export default CategoryListCard