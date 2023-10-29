import React from 'react'
import { useSelector } from 'react-redux';

const AccountingMagistrTotal = () => {

    const {accountingMasterMonthPaymentListArr}=useSelector(state=>state.Data)
    let total=accountingMasterMonthPaymentListArr.filter(data=>data.status===true)
    let paidTotal=0;
    if(total){
        for(let i=0;i<total.length;i++){
            paidTotal+=total[i].payment_amount
        }
    }
    let paymentTotal=0;
    for(let i=0;i<accountingMasterMonthPaymentListArr.length;i++){
        paymentTotal+=accountingMasterMonthPaymentListArr[i].payment_amount
    }
    let activeTotal=accountingMasterMonthPaymentListArr.filter(data=>data.master.student.status=='DE')

    return (
        <table className='accounting_abiturient_total_container'>
            <tr>
                <th>
                    Ümumi magistrlərin sayı
                </th>
                <th>
                    Ödəniş etmiş magistrlərin sayı
                </th>
                <th>
                    Aktiv magistrlərin sayı
                </th>
                <th>
                    Ümumi magistrlərin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş etmiş magistrlərin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {accountingMasterMonthPaymentListArr?.length}
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

export default AccountingMagistrTotal