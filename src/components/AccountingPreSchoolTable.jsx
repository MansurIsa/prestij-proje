// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAccountingPreSchoolMonthPaymentList } from '../actions/MainAction';
// import AccountingPreSchoolCard from './AccountingPreSchoolCard';

// const AccountingPreSchoolTable = () => {
//     const dispatch = useDispatch()
//     const { monthSelectValue, accountingPreSchoolMonthPaymentListArr } = useSelector(state => state.Data);

//     useEffect(() => {
//         dispatch(getAccountingPreSchoolMonthPaymentList(monthSelectValue))
//     }, [dispatch])
//     console.log(accountingPreSchoolMonthPaymentListArr);
//     return (
//         <table>
//             <tr>
//                 <th>
//                     Məktəbəqədər
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
//                 accountingPreSchoolMonthPaymentListArr?.map((data, i) => {
//                     return <AccountingPreSchoolCard key={i} data={data} />
//                 })
//             }
//         </table>
//     )
// }

// export default AccountingPreSchoolTable