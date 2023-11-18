import React from 'react'
import { useSelector } from 'react-redux'

const AccountingStudentsTotal = () => {
    const { accountingAbiturientMonthPaymentListArr} = useSelector(state => state.Data)

    

    let total = accountingAbiturientMonthPaymentListArr.filter(data => data.status === true)
    let paidTotal = 0;
    if (total) {
        for (let i = 0; i < total.length; i++) {
            paidTotal += total[i].payment_amount
        }
    }
    let paymentTotal = 0;
    for (let i = 0; i < accountingAbiturientMonthPaymentListArr.length; i++) {
        paymentTotal += accountingAbiturientMonthPaymentListArr[i].payment_amount
    }
    let activeTotalAbiturient = accountingAbiturientMonthPaymentListArr.filter(data => data.student.status === 'DE')
    

    return (
        <table className='accounting_abiturient_total_container'>
            <tr>
                <th>
                    Ümumi tələbələrin sayı
                </th>
                <th>
                    Ödəniş edilmiş tələbələrin sayı
                </th>
                <th>
                    Aktiv tələbələrin sayı
                </th>
                <th>
                    Ümumi tələbələrin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş edilmiş tələbələrin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {
                        accountingAbiturientMonthPaymentListArr?.length


                    }
                </td>
                <td className="branchs_students_inner_card">
                    {total?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {activeTotalAbiturient?.length
                       
                    }
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

export default AccountingStudentsTotal