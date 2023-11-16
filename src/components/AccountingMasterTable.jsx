// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAccountingMasterMonthPaymentList } from '../actions/MainAction';
// import AccountingMasterCard from './AccountingMasterCard';

// const AccountingMasterTable = () => {
//     const dispatch = useDispatch()
//     const { monthSelectValue, accountingMasterMonthPaymentListArr } = useSelector(state => state.Data);

//     useEffect(() => {
//         dispatch(getAccountingMasterMonthPaymentList(monthSelectValue))
//     }, [dispatch])
//     console.log(accountingMasterMonthPaymentListArr);
//     return (
//         <table>
//             <tr>
//                 <th>
//                     Magistr hazırlığı
//                 </th>
//                 <th>
//                     Telefon nömrəsi 1
//                 </th>
//                 <th>
//                     Telefon nömrəsi 2
//                 </th>
//                 <th>
//                     Vatsap nömrəsi
//                 </th>
               
//                 <th>
//                     Status
//                 </th>
//                 <th>
//                     Qrup
//                 </th>
//                 <th>
//                     Fənlər
//                 </th>
//                 <th>
//                     Qəbul balı
//                 </th>
//                 <th>
//                     Dil
//                 </th>
//                 <th>
//                     Ödəniş tarixi
//                 </th>
//                 <th>
//                     Ödəniş məbləği
//                 </th>
//                 <th>
//                     Ödəniş statusu
//                 </th>
//             </tr>
//             {
//                 accountingMasterMonthPaymentListArr?.map((data, i) => {
//                     return <AccountingMasterCard key={i} data={data} />
//                 })
//             }
//         </table>
//     )
// }

// export default AccountingMasterTable