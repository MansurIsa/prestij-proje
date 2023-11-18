import React from 'react'
import { useSelector } from 'react-redux'

const AccountingAbiturientTotal = () => {
    const {accountingStudentMonthPaymentListArr}=useSelector(state=>state.Data)
    let total=accountingStudentMonthPaymentListArr.filter(data=>data.status===true)
    let paidTotal=0;
    if(total){
        for(let i=0;i<total.length;i++){
            paidTotal+=total[i].payment_amount
        }
    }
    let paymentTotal=0;
    for(let i=0;i<accountingStudentMonthPaymentListArr.length;i++){
        paymentTotal+=accountingStudentMonthPaymentListArr[i].payment_amount
    }

    let activeTotal=accountingStudentMonthPaymentListArr.filter(data=>data.student.status==='DE')
    console.log(activeTotal);


    return (
        <table className='accounting_abiturient_total_container'>
            <tr >
                <th>
                    Ümumi abiturientlərin sayı
                </th>
                <th>
                    Ödəniş etmiş abiturientlərin sayı
                </th>
                <th>
                    Aktiv abiturientlərin sayı
                </th>
                <th>
                    Ümumi abiturientlərin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş etmiş abiturientlərin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {accountingStudentMonthPaymentListArr?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {total?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {activeTotal?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {paymentTotal}
                </td>
                <td className="branchs_students_inner_card">
                    {paidTotal}
                </td>

            </tr>
        </table>
    )
}

export default AccountingAbiturientTotal