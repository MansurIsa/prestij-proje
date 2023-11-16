// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getAccountingMonthCivilPaymentList } from '../actions/MainAction';
// import { CgMathMinus } from 'react-icons/cg';

// const AccountingCivilCard = ({ data }) => {
//     const navigate=useNavigate()
//     const dispatch=useDispatch()
//     function formatCurrentDate() {
//         const currentDate = new Date();

//         const year = currentDate.getFullYear();
//         const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Ay 0-11 aralığında olduğu için +1 ekliyoruz
//         const day = currentDate.getDate().toString().padStart(2, '0');

//         return `${year}-${month}-${day}`;
//     }

//     const formattedDate = formatCurrentDate();
//     console.log(formattedDate);

//     function calculateDateDifference(startDate, endDate) {
//         const start = new Date(startDate);
//         const end = new Date(endDate);

//         const differenceInMilliseconds = end - start;
//         const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

//         return differenceInDays;
//     }

//     const startDate = formattedDate; // Başlangıç tarihi (YYYY-MM-DD)
//     const endDate = data.payment_date;   // Bitiş tarihi (YYYY-MM-DD)

//     const daysDifference = calculateDateDifference(startDate, endDate);
//     const handleCivil = (id) => {
//         console.log(id);
//         navigate('/branchs-accounting-civil')
//         dispatch(getAccountingMonthCivilPaymentList(id))
//     }
//     console.log(data);
//     return (
//         <tr style={{ color: data.status ? 'green' : daysDifference <= 3 && daysDifference > 0 ? '#EAAE0D' : daysDifference == 0 ? 'purple' : daysDifference<0 && daysDifference>=-3? '#196EDA': daysDifference < -3 ? 'red' : 'black' }}>
//             <td style={{cursor: "pointer"}} onClick={()=>handleCivil(data.civilservice.id)}>
//                 {`${data.civilservice.student.first_name} ${data.civilservice.student.last_name}`}
//             </td>
//             <td>
//                 {data.civilservice.student.phone_number1}
//             </td>
//             <td>
//                 {data.civilservice.student.phone_number2}
//             </td>
//             <td>
//                 {data.civilservice.student.wp_number}
//             </td>
//             <td>
//                 {data.civilservice.subjects.map(sub => {
//                     return sub.name
//                 })}
//             </td>
//             <td>
//                 {data.civilservice.student.status == 'D' ? 'Dondurub' : 'DE' ? 'Davam Edir' : 'B' ? 'Bitirilib' : ''}
//             </td>
//             <td>
//                 {(data.civilservice.student.status=='D' || data.civilservice.student.status=='B')? <CgMathMinus/> :data.payment_date}
//             </td>
//             <td>
//                 {(data.civilservice.student.status=='D' || data.civilservice.student.status=='B')? <CgMathMinus/> :data.payment_amount}
//             </td>
//             <td>
//                 {(data.civilservice.student.status=='D' || data.civilservice.student.status=='B')? <CgMathMinus/> :data.status ? 'Ödənilib' : 'Ödənilməyib'}
//             </td>
//         </tr>
//     )
// }

// export default AccountingCivilCard