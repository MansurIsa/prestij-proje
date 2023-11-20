import React from 'react'
import { FaManatSign } from 'react-icons/fa6';
import { useSelector } from 'react-redux'

const AccountingStudentsTotal = () => {
    const { accountingAbiturientMonthPaymentListArr} = useSelector(state => state.Data)

    console.log(accountingAbiturientMonthPaymentListArr);

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
    

    let finishedTotalArr=accountingAbiturientMonthPaymentListArr.filter(data=>data.student.status==='B')
    console.log(finishedTotalArr);

    let stoppedTotalArr=accountingAbiturientMonthPaymentListArr.filter(data=>data.student.status==='D')
    console.log(stoppedTotalArr);

    return (
        <table className='accounting_abiturient_total_container'>
            <tr>
                <th>
                    Ümumi tələbələrin sayı
                </th>
                <th>
                    Ödəniş etmiş tələbələrin sayı
                </th>
                <th>
                    Aktiv tələbələrin sayı
                </th>
                <th>
                    Bitirmiş tələbələrin sayı
                </th>
                <th>
                    Dondurmuş tələbələrin sayı
                </th>
                <th>
                    Ümumi tələbələrin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş etmiş tələbələrin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {accountingAbiturientMonthPaymentListArr?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {total?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {activeTotalAbiturient?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {finishedTotalArr?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {stoppedTotalArr?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {paymentTotal}<FaManatSign className='manat_icon'/>
                </td>
                <td className="branchs_students_inner_card">
                    {paidTotal}<FaManatSign className='manat_icon'/>
                </td>

            </tr>
        </table>
    )
}

export default AccountingStudentsTotal