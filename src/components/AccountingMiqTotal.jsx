// import React from 'react'
// import { useSelector } from 'react-redux';

// const AccountingMiqTotal = () => {
//     const { accountingMiqMonthPaymentListArr } = useSelector(state => state.Data)
//     let total = accountingMiqMonthPaymentListArr.filter(data => data.status === true)
//     let paidTotal = 0;
//     if (total) {
//         for (let i = 0; i < total.length; i++) {
//             paidTotal += total[i].payment_amount
//         }
//     }
//     let paymentTotal = 0;
//     for (let i = 0; i < accountingMiqMonthPaymentListArr.length; i++) {
//         paymentTotal += accountingMiqMonthPaymentListArr[i].payment_amount
//     }
//     let activeTotal=accountingMiqMonthPaymentListArr.filter(data=>data.miq.student.status=='DE')

//     return (
//         <table className='accounting_abiturient_total_container'>
//             <tr>
//                 <th>
//                     Ümumi miqlərin sayı
//                 </th>
//                 <th>
//                     Ödəniş etmiş miqlərin sayı
//                 </th>
//                 <th>
//                     Aktiv miqlərin sayı
//                 </th>
//                 <th>
//                     Ümumi miqlərin ödənişlərinin cəmi
//                 </th>
//                 <th>
//                     Ödəniş etmiş miqlərin ödənişlərinin cəmi
//                 </th>


//             </tr>
//             <tr className='branchs_students_card'>
//                 <td className="branchs_students_inner_card">
//                     {accountingMiqMonthPaymentListArr?.length}
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

// export default AccountingMiqTotal