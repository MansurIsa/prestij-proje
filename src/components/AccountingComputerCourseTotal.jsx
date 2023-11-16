// import React from 'react'
// import { useSelector } from 'react-redux';

// const AccountingComputerCourseTotal = () => {
//     const { accountingComputerCourseMonthPaymentListArr } = useSelector(state => state.Data)
//     let total = accountingComputerCourseMonthPaymentListArr.filter(data => data.status === true)
//     let paidTotal = 0;
//     if (total) {
//         for (let i = 0; i < total.length; i++) {
//             paidTotal += total[i].payment_amount
//         }
//     }
//     let paymentTotal = 0;
//     for (let i = 0; i < accountingComputerCourseMonthPaymentListArr.length; i++) {
//         paymentTotal += accountingComputerCourseMonthPaymentListArr[i].payment_amount
//     }
//     let activeTotal=accountingComputerCourseMonthPaymentListArr.filter(data=>data.computercourse.student.status=='DE')

//     return (
//         <table className='accounting_abiturient_total_container'>
//             <tr>
//                 <th>
//                     Ümumi komputer tələbələrinin sayı
//                 </th>
//                 <th>
//                     Ödəniş etmiş komputer tələbələrinin sayı
//                 </th>
//                 <th>
//                     Aktiv komputer tələbələrinin sayı
//                 </th>
//                 <th>
//                     Ümumi komputer tələbələrinin ödənişlərinin cəmi
//                 </th>
//                 <th>
//                     Ödəniş etmiş komputer tələbələrinin ödənişlərinin cəmi
//                 </th>


//             </tr>
//             <tr className='branchs_students_card'>
//                 <td className="branchs_students_inner_card">
//                     {accountingComputerCourseMonthPaymentListArr?.length}
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

// export default AccountingComputerCourseTotal