import React from 'react'

const BranchsHandleAbiturientCard = ({ data }) => {
    console.log(data);
    return (
        
        <div className='branchs_students_card '>
            <div className="branchs_students_inner_card">
                {`${data.student.first_name} ${data.student.last_name}`}
            </div>
            <div className="branchs_students_inner_card">
                {data?.student?.phone_number1}
            </div>
            <div className="branchs_students_inner_card">
                {data?.student?.phone_number2}
            </div>
            <div className="branchs_students_inner_card">
                {data?.student?.wp_number}
            </div>
            <div className="branchs_students_inner_card">
                {data?.student?.season}
            </div>
            <div className="branchs_students_inner_card">
                {data?.student?.status}
            </div>
        </div>
    )
}

export default BranchsHandleAbiturientCard