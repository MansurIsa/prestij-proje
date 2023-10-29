import React from 'react'
const AccountingStudentCard = ({ data }) => {
    
    
    
    return (
        <tr>
            <td style={{ cursor: "pointer" }} >
                {`${data.first_name} ${data.last_name}`}
            </td>
            <td>
                {data.phone_number1}
            </td>
            <td>
                {data.phone_number2}
            </td>

            <td>
                {data.wp_number}
            </td>
            <td>
                {data.status == 'D' ? 'Dondurub' : 'DE' ? 'Davam Edir' : 'B' ? 'Bitirilib' : ''}
            </td>
            
            <td>
                {data.payment_amount}
            </td>
            
        </tr>
    )
}

export default AccountingStudentCard