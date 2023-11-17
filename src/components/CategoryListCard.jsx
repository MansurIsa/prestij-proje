import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryListCard = ({data}) => {
    const navigate = useNavigate()
    const handleCategoryCard=(id)=>{
        navigate(`/category/${id}`)
        window.location.reload();
    }
    return (
        <div onClick={()=>handleCategoryCard(data.id)} className="branchs_services_card">
            <h2>{data.name}</h2>
        </div>
    )
}

export default CategoryListCard