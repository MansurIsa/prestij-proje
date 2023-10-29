import React from 'react'
import { useSelector } from 'react-redux';

const AccountingAccountingTotal = () => {
    const { accountingAccountingMonthPaymentListArr } = useSelector(state => state.Data)
    let total = accountingAccountingMonthPaymentListArr.filter(data => data.status === true)
    let paidTotal = 0;
    if (total) {
        for (let i = 0; i < total.length; i++) {
            paidTotal += total[i].payment_amount
        }
    }
    let paymentTotal = 0;
    for (let i = 0; i < accountingAccountingMonthPaymentListArr.length; i++) {
        paymentTotal += accountingAccountingMonthPaymentListArr[i].payment_amount
    }
    let activeTotal=accountingAccountingMonthPaymentListArr.filter(data=>data.accounting.student.status=='DE')

    return (
        <table className='accounting_abiturient_total_container'>
            <tr>
                <th>
                    Ümumi mühasibat tələbələrinin sayı
                </th>
                <th>
                    Ödəniş etmiş mühasibat tələbələrinin sayı
                </th>
                <th>
                    Aktiv mühasibat tələbələrinin sayı
                </th>
                <th>
                    Ümumi mühasibat tələbələrinin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş etmiş mühasibat tələbələrinin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {accountingAccountingMonthPaymentListArr?.length}
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

export default AccountingAccountingTotal