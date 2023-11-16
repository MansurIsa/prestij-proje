// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getAccountingMonthPrimarySchoolPaymentList } from '../actions/MainAction';
// import { CgMathMinus } from 'react-icons/cg';

// const AccountingPrimarySchoolCard = ({ data }) => {
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

//     const handlePrimary=(id)=>{
//         console.log(id);
//         navigate('/branchs-accounting-primaryschool')
//        dispatch(getAccountingMonthPrimarySchoolPaymentList(id)) 
//     }
//     return (
//         <tr style={{ color: data.status ? 'green' : daysDifference <= 3 && daysDifference > 0 ? '#EAAE0D' : daysDifference == 0 ? 'purple' : daysDifference<0 && daysDifference>=-3? '#196EDA': daysDifference < -3 ? 'red' : 'black' }}>
//             <td style={{cursor: "pointer"}} onClick={()=>handlePrimary(data.primaryschool.id)}>
//                 {`${data.primaryschool.student.first_name} ${data.primaryschool.student.last_name}`}
//             </td>
//             <td>
//                 {data.primaryschool.student.phone_number1}
//             </td>
//             <td>
//                 {data.primaryschool.student.phone_number2}
//             </td>
//             <td>
//                 {data.primaryschool.student.wp_number}
//             </td>
//             <td>
//                 {data.primaryschool.group}
//             </td>
//             <td>
//                 {data.primaryschool.primaryschool_class}
//             </td>
//             <td>
//                 {data.primaryschool.subjects.map(sub => {
//                     return sub.name
//                 })}
//             </td>
//             <td>
//                 {data.primaryschool.student.status == 'D' ? 'Dondurub' : 'DE' ? 'Davam Edir' : 'B' ? 'Bitirilib' : ''}
//             </td>
//             <td>
//                 {(data.primaryschool.student.status=='D' || data.primaryschool.student.status=='B')? <CgMathMinus/> :data.payment_date}
//             </td>
//             <td>
//                 {(data.primaryschool.student.status=='D' || data.primaryschool.student.status=='B')? <CgMathMinus/> :data.payment_amount}
//             </td>
//             <td>
//                 {(data.primaryschool.student.status=='D' || data.primaryschool.student.status=='B')? <CgMathMinus/> :data.status ? 'Ödənilib' : 'Ödənilməyib'}
//             </td>
//         </tr>
//     )
// }

// export default AccountingPrimarySchoolCard