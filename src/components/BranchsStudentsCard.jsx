import React from 'react'

const BranchsStudentsCard = ({data}) => {
  return (
    <div className='branchs_students_card'>
        <div className="branchs_students_inner_card">
            {`${data.first_name} ${data.last_name}`}
        </div>
        <div className="branchs_students_inner_card">
            {data.phone_number1}
        </div>
        <div className="branchs_students_inner_card">
            {data.phone_number2}
        </div>
        <div className="branchs_students_inner_card">
            {data.wp_number}
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

export default BranchsStudentsCard