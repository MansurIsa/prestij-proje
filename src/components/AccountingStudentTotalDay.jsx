import React from 'react'
import { useSelector } from 'react-redux';

const AccountingStudentTotalDay = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    
    const { accountingStudentMonthPaymentListArr } = useSelector(state => state.Data)
    
    let total = accountingStudentMonthPaymentListArr.filter(data => data.status === true)
    
    let paidTotal = 0;
    
    
    if (total?.length>0 && total?.filter(data=>data?.payment_date===formattedDate)) {
        for (let i = 0; i < total?.filter(data=>data?.payment_date===formattedDate).length; i++) {
            paidTotal += total?.filter(data=>data?.payment_date===formattedDate)[i].payment_amount
        }
    }
    let paymentTotal = 0;
    for (let i = 0; i < accountingStudentMonthPaymentListArr.length; i++) {
        paymentTotal += accountingStudentMonthPaymentListArr[i].payment_amount
    }

    

   
    return (
        <table className='accounting_abiturient_total_container'>
            <tr >
               
                <th>
                   Bu gün ödəniş etmiş abiturientlərin sayı
                </th>
                
                <th>
                  Bu gün ödəniş etmiş abiturientlərin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                
                <td className="branchs_students_inner_card">
                    {total?.filter(data=>data?.payment_date===formattedDate)?.length}
                </td>
               
                <td className="branchs_students_inner_card">
                    {paidTotal}
                </td>

            </tr>
        </table>
    )
}

export default AccountingStudentTotalDay