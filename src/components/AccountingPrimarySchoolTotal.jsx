import React from 'react'
import { useSelector } from 'react-redux';

const AccountingPrimarySchoolTotal = () => {
    const { accountingPrimarySchoolMonthPaymentListArr } = useSelector(state => state.Data)
    let total = accountingPrimarySchoolMonthPaymentListArr.filter(data => data.status === true)
    let paidTotal = 0;
    if (total) {
        for (let i = 0; i < total.length; i++) {
            paidTotal += total[i].payment_amount
        }
    }
    let paymentTotal = 0;
    for (let i = 0; i < accountingPrimarySchoolMonthPaymentListArr.length; i++) {
        paymentTotal += accountingPrimarySchoolMonthPaymentListArr[i].payment_amount
    }
    let activeTotal=accountingPrimarySchoolMonthPaymentListArr.filter(data=>data.primaryschool.student.status=='DE')

    return (
        <table className='accounting_abiturient_total_container'>
            <tr>
                <th>
                    Ümumi ibtidai şagirdlərin sayı
                </th>
                <th>
                    Ödəniş etmiş ibtidai şagirdlərin sayı
                </th>
                <th>
                    Aktiv ibtidai şagirdlərin sayı
                </th>
                <th>
                    Ümumi ibtidai şagirdlərin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş etmiş ibtidai şagirdlərin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {accountingPrimarySchoolMonthPaymentListArr?.length}
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

export default AccountingPrimarySchoolTotal