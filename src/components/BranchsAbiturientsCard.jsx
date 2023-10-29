import React from 'react'

const BranchsAbiturientsCard = ({data,onClick}) => {
    return (
        <div onClick={onClick}  className="branchs_abiturients_card">
            {data.name}
        </div>
    )
}

export default BranchsAbiturientsCard