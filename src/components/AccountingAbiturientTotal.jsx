import React from 'react'
import { useSelector } from 'react-redux'
import { FaManatSign } from "react-icons/fa6";


const AccountingAbiturientTotal = ({categoryName}) => {
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

    console.log(accountingStudentMonthPaymentListArr);

    let finishedTotalArr=accountingStudentMonthPaymentListArr.filter(data=>data.student.status==='B')
    console.log(finishedTotalArr);

    let stoppedTotalArr=accountingStudentMonthPaymentListArr.filter(data=>data.student.status==='D')
    console.log(stoppedTotalArr);

    return (
        <table className='accounting_abiturient_total_container'>
            <tr >
                <th>
                    Ümumi {categoryName?.name}lərin sayı
                </th>
                <th>
                    Ödəniş etmiş {categoryName?.name}lərin sayı
                </th>
                <th>
                    Aktiv {categoryName?.name}lərin sayı
                </th>
                <th>
                    Bitirmiş {categoryName?.name}lərin sayı
                </th>
                <th>
                    Dondurmuş {categoryName?.name}lərin sayı
                </th>
                <th>
                    Ümumi {categoryName?.name}lərin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş etmiş {categoryName?.name}lərin ödənişlərinin cəmi
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

export default AccountingAbiturientTotal