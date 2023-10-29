import React from 'react'
import { useSelector } from 'react-redux';

const AccountingHighSchoolTotal = () => {
    const { accountingHighSchoolMonthPaymentListArr } = useSelector(state => state.Data)
    let total = accountingHighSchoolMonthPaymentListArr.filter(data => data.status === true)
    let paidTotal = 0;
    if (total) {
        for (let i = 0; i < total.length; i++) {
            paidTotal += total[i].payment_amount
        }
    }
    let paymentTotal = 0;
    for (let i = 0; i < accountingHighSchoolMonthPaymentListArr.length; i++) {
        paymentTotal += accountingHighSchoolMonthPaymentListArr[i].payment_amount
    }
    let activeTotal=accountingHighSchoolMonthPaymentListArr.filter(data=>data.highschool.student.status=='DE')

    return (
        <table className='accounting_abiturient_total_container'>
            <tr>
                <th>
                    Ümumi LH(lisey) tələbələrin sayı
                </th>
                <th>
                    Ödəniş etmiş LH(lisey) tələbələrin sayı
                </th>
                <th>
                    Aktiv LH(lisey) tələbələrin sayı
                </th>
                <th>
                    Ümumi LH(lisey) tələbələrin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş etmiş LH(lisey) tələbələrin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {accountingHighSchoolMonthPaymentListArr?.length}
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

export default AccountingHighSchoolTotal