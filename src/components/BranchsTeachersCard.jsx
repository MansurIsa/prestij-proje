import React from 'react'

const BranchsTeachersCard = ({data}) => {
    console.log(data);
    return (
        <div className='branchs_students_card'>
            <div className="branchs_students_inner_card">
                {`${data.first_name} ${data.last_name}`}
            </div>
            <div className="branchs_students_inner_card">
                {data.phone_number1}
            </div>
            <div className="branchs_students_inner_card">
                {data.wp_number}
            </div>
            <div className="branchs_students_inner_card">
                {data.specialty}
            </div>
            <div className="branchs_students_inner_card">
                {data.section}
            </div>
            <div className="branchs_students_inner_card">
                {data.salary}
            </div>
            
            <div className="branchs_students_inner_card">
                {data.season}
            </div>
            <div className="branchs_students_inner_card">
                {data.status}
            </div>
        </div>
    )
}

export default BranchsTeachersCard