// import React from 'react'
// import { CgMathMinus } from 'react-icons/cg'
// import { getAccountingMonthHighSchoolPaymentList } from '../actions/MainAction'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

// const AccountingStudentHighSchoolCard = ({data}) => {
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

//     const handleHighSchool = (id) => {
//         console.log(id);
//         navigate('/branchs-accounting-highschool')
//         dispatch(getAccountingMonthHighSchoolPaymentList(id))
//     }
//     return (
//         <tr style={{ color: data.status ? 'green' : daysDifference <= 3 && daysDifference > 0 ? '#EAAE0D' : daysDifference == 0 ? 'purple' : daysDifference<0 && daysDifference>=-3? '#196EDA': daysDifference < -3 ? 'red' : 'black' }}>
//             <td style={{ cursor: "pointer" }} onClick={() => handleHighSchool(data.highschool.id)}>
//                 {`${data.highschool.student.first_name} ${data.highschool.student.last_name}`}
//             </td>
//             <td>
//                 {data.highschool.student.phone_number1}
//             </td>
//             <td>
//                 {data.highschool.student.phone_number2}
//             </td>
//             <td>
//                 {data.highschool.student.wp_number}
//             </td>

//             <td>
//                 {data.highschool.student.status == 'D' ? 'Dondurub' : 'DE' ? 'Davam Edir' : 'B' ? 'Bitirilib' : ''}
//             </td>
//             <td>
//                 {(data.highschool.student.status == 'D' || data.highschool.student.status == 'B') ? <CgMathMinus /> : data.payment_date}
//             </td>
//             <td>
//                 {(data.highschool.student.status == 'D' || data.highschool.student.status == 'B') ? <CgMathMinus /> : data.payment_amount}
//             </td>
//             <td>
//                 {(data.highschool.student.status == 'D' || data.highschool.student.status == 'B') ? <CgMathMinus /> : data.status ? 'Ödənilib' : 'Ödənilməyib'}
//             </td>
//         </tr>
//     )
// }

// export default AccountingStudentHighSchoolCard