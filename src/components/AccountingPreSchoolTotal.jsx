import React from 'react'
import { useSelector } from 'react-redux';

const AccountingPreSchoolTotal = () => {
    const { accountingPreSchoolMonthPaymentListArr } = useSelector(state => state.Data)
    let total = accountingPreSchoolMonthPaymentListArr.filter(data => data.status === true)
    let paidTotal = 0;
    if (total) {
        for (let i = 0; i < total.length; i++) {
            paidTotal += total[i].payment_amount
        }
    }
    let paymentTotal = 0;
    for (let i = 0; i < accountingPreSchoolMonthPaymentListArr.length; i++) {
        paymentTotal += accountingPreSchoolMonthPaymentListArr[i].payment_amount
    }
    let activeTotal=accountingPreSchoolMonthPaymentListArr.filter(data=>data.preschool.student.status=='DE')

    return (
        <table className='accounting_abiturient_total_container'>
            <tr>
                <th>
                    Ümumi məktəbəqədər tələbələrin sayı
                </th>
                <th>
                    Ödəniş etmiş məktəbəqədər tələbələrin sayı
                </th>
                <th>
                    Aktiv məktəbəqədər tələbələrin sayı
                </th>
                <th>
                    Ümumi məktəbəqədər tələbələrin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş etmiş məktəbəqədər tələbələrin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {accountingPreSchoolMonthPaymentListArr?.length}
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

export default AccountingPreSchoolTotal