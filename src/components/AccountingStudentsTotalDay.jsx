import React from 'react'
import { useSelector } from 'react-redux';

const AccountingStudentsTotalDay = () => {

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    
    const { accountingAbiturientMonthPaymentListArr } = useSelector(state => state.Data)
    
    let total = accountingAbiturientMonthPaymentListArr.filter(data => data.status === true)
    
    let paidTotal = 0;
    
    
    if (total?.length>0 && total?.filter(data=>data?.payment_date===formattedDate)) {
        for (let i = 0; i < total?.filter(data=>data?.payment_date===formattedDate).length; i++) {
            paidTotal += total?.filter(data=>data?.payment_date===formattedDate)[i].payment_amount
        }
    }
    // let paymentTotal = 0;
    // for (let i = 0; i < accountingAbiturientMonthPaymentListArr.length; i++) {
    //     paymentTotal += accountingAbiturientMonthPaymentListArr[i].payment_amount
    // }

    // let activeTotal = accountingAbiturientMonthPaymentListArr.filter(data => data.student.status == 'DE')
    

  return (
    <table className='accounting_abiturient_total_container'>
            <tr >
                {/* <th>
                    Ümumi abiturientlərin sayı
                </th> */}
                <th>
                   Bu gün ödəniş etmiş tələbələrin sayı
                </th>
                {/* <th>
                    Aktiv abiturientlərin sayı
                </th> */}
                {/* <th>
                    Ümumi abiturientlərin ödənişlərinin cəmi
                </th> */}
                <th>
                  Bu gün ödəniş etmiş tələbələrin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                {/* <td className="branchs_students_inner_card">
                    {accountingStudentMonthPaymentListArr?.length}
                </td> */}
                <td className="branchs_students_inner_card">
                    {total?.filter(data=>data?.payment_date===formattedDate)?.length}
                </td>
                {/* <td className="branchs_students_inner_card">
                    {activeTotal?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {paymentTotal}
                </td> */}
                <td className="branchs_students_inner_card">
                    {paidTotal}
                </td>

            </tr>
        </table>
  )
}

export default AccountingStudentsTotalDay