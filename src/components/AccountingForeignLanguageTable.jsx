// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAccountingForeignlanguageMonthPaymentList } from '../actions/MainAction';
// import AccountingForeignLanguageCard from './AccountingForeignLanguageCard';

// const AccountingForeignLanguageTable = () => {
//     const dispatch = useDispatch()
//     const { monthSelectValue, accountingForeignlanguageMonthPaymentListArr } = useSelector(state => state.Data);

//     useEffect(() => {
//         dispatch(getAccountingForeignlanguageMonthPaymentList(monthSelectValue))
//     }, [dispatch])
//     console.log(accountingForeignlanguageMonthPaymentListArr);
//     return (
//         <table>
//             <tr>
//                 <th>
//                     Xarici dil
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
//                 accountingForeignlanguageMonthPaymentListArr?.map((data, i) => {
//                     return <AccountingForeignLanguageCard key={i} data={data} />
//                 })
//             }
//         </table>
//     )
// }

// export default AccountingForeignLanguageTable