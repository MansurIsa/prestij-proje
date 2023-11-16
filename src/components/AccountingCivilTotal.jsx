// import React from 'react'
// import { useSelector } from 'react-redux';

// const AccountingCivilTotal = () => {
//     const { accountingCivilMonthPaymentListArr } = useSelector(state => state.Data)
//     let total = accountingCivilMonthPaymentListArr.filter(data => data.status === true)
//     let paidTotal = 0;
//     if (total) {
//         for (let i = 0; i < total.length; i++) {
//             paidTotal += total[i].payment_amount
//         }
//     }
//     let paymentTotal = 0;
//     for (let i = 0; i < accountingCivilMonthPaymentListArr.length; i++) {
//         paymentTotal += accountingCivilMonthPaymentListArr[i].payment_amount
//     }
//     let activeTotal=accountingCivilMonthPaymentListArr.filter(data=>data.civilservice.student.status=='DE')

//     return (
//         <table className='accounting_abiturient_total_container'>
//             <tr>
//                 <th>
//                     Ümumi DQ-lərin sayı
//                 </th>
//                 <th>
//                     Ödəniş etmiş DQ-lərin sayı
//                 </th>
//                 <th>
//                     Aktiv DQ sayı
//                 </th>
//                 <th>
//                     Ümumi DQ-lərin ödənişlərinin cəmi
//                 </th>
//                 <th>
//                     Ödəniş etmiş DQ-lərin ödənişlərinin cəmi
//                 </th>


//             </tr>
//             <tr className='branchs_students_card'>
//                 <td className="branchs_students_inner_card">
//                     {accountingCivilMonthPaymentListArr?.length}
//                 </td>
//                 <td className="branchs_students_inner_card">
//                     {total?.length}
//                 </td>
//                 <td className="branchs_students_inner_card">
//                     {activeTotal?.length}
//                 </td>
//                 <td className="branchs_students_inner_card">
//                     {paymentTotal}
//                 </td>
//                 <td className="branchs_students_inner_card">
//                     {paidTotal}
//                 </td>

//             </tr>
//         </table>
//     )
// }

// export default AccountingCivilTotal