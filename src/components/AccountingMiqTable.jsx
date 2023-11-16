// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAccountingMiqMonthPaymentList } from '../actions/MainAction';
// import AccountingMiqCard from './AccountingMiqCard';

// const AccountingMiqTable = () => {
//     const dispatch = useDispatch()
//     const { monthSelectValue, accountingMiqMonthPaymentListArr } = useSelector(state => state.Data);

//     useEffect(() => {
//         dispatch(getAccountingMiqMonthPaymentList(monthSelectValue))
//     }, [dispatch])
//     console.log(accountingMiqMonthPaymentListArr);
//     return (
//         <table>
//             <tr>
//                 <th>
//                     Miq
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
//                     İxtisas
//                 </th>
//                 <th>
//                     Fənlər
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
//                 accountingMiqMonthPaymentListArr?.map((data, i) => {
//                     return <AccountingMiqCard key={i} data={data} />
//                 })
//             }
//         </table>
//     )
// }

// export default AccountingMiqTable