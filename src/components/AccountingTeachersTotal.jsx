import React from 'react'
import { useSelector } from 'react-redux';

const AccountingTeachersTotal = () => {
    const { accountingTeacherMonthPaymentListArr } = useSelector(state => state.Data)
    let total = accountingTeacherMonthPaymentListArr.filter(data => data.status === true)
    let paidTotal = 0;
    if (total) {
        for (let i = 0; i < total.length; i++) {
            paidTotal += total[i].payment_amount
        }
    }
    let paymentTotal = 0;
    for (let i = 0; i < accountingTeacherMonthPaymentListArr.length; i++) {
        paymentTotal += accountingTeacherMonthPaymentListArr[i].payment_amount
    }

    return (
        <table className='accounting_abiturient_total_container'>
            <tr>
                <th>
                    Ümumi müəllimlərin sayı
                </th>
                <th>
                    Ödəniş edilmiş müəllimlərin sayı
                </th>
                <th>
                    Ümumi müəllimlərin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş edilmiş müəllimlərin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {accountingTeacherMonthPaymentListArr?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {total?.length}
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

export default AccountingTeachersTotal