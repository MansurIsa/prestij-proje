// import React from 'react'
// import { useSelector } from 'react-redux';

// const AccountingForeignLanguageTotal = () => {
//     const { accountingForeignlanguageMonthPaymentListArr } = useSelector(state => state.Data)
//     let total = accountingForeignlanguageMonthPaymentListArr.filter(data => data.status === true)
//     let paidTotal = 0;
//     if (total) {
//         for (let i = 0; i < total.length; i++) {
//             paidTotal += total[i].payment_amount
//         }
//     }
//     let paymentTotal = 0;
//     for (let i = 0; i < accountingForeignlanguageMonthPaymentListArr.length; i++) {
//         paymentTotal += accountingForeignlanguageMonthPaymentListArr[i].payment_amount
//     }
//     let activeTotal=accountingForeignlanguageMonthPaymentListArr.filter(data=>data.foreignlanguage.student.status=='DE')

//     return (
//         <table className='accounting_abiturient_total_container'>
//             <tr>
//                 <th>
//                     Ümumi xarici dil tələbələrin sayı
//                 </th>
//                 <th>
//                     Ödəniş etmiş xarici dil tələbələrin sayı
//                 </th>
//                 <th>
//                     Aktiv xarici dil tələbələrin sayı
//                 </th>
//                 <th>
//                     Ümumi xarici dil tələbələrin ödənişlərinin cəmi
//                 </th>
//                 <th>
//                     Ödəniş etmiş xarici dil tələbələrin ödənişlərinin cəmi
//                 </th>


//             </tr>
//             <tr className='branchs_students_card'>
//                 <td className="branchs_students_inner_card">
//                     {accountingForeignlanguageMonthPaymentListArr?.length}
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

// export default AccountingForeignLanguageTotal