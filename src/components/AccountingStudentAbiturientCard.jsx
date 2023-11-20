import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAccountingMonthAbiturientPaymentList } from '../actions/MainAction';
import { CgMathMinus } from 'react-icons/cg';

const AccountingStudentAbiturientCard = ({ data }) => {
    console.log(data);
    const navigate=useNavigate()
    const dispatch=useDispatch()

    function formatCurrentDate() {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Ay 0-11 aralığında olduğu için +1 ekliyoruz
        const day = currentDate.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const formattedDate = formatCurrentDate();
    console.log(formattedDate);

    function calculateDateDifference(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const differenceInMilliseconds = end - start;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

        return differenceInDays;
    }

    const startDate = formattedDate; // Başlangıç tarihi (YYYY-MM-DD)
    const endDate = data.payment_date;   // Bitiş tarihi (YYYY-MM-DD)

    const daysDifference = calculateDateDifference(startDate, endDate);

    const handleAbiturient=(id)=>{
        console.log(id);
        navigate('/branchs-accounting-abiturient')
       dispatch(getAccountingMonthAbiturientPaymentList(id,data?.category?.id)) 
    }
    return (
        <tr className='table_tr_style' style={{ color: data.status ? 'green' : data.student.status==='D'? '#ccc': data.student.status==='B'? '#00f2ff': daysDifference <= 3 && daysDifference > 0 ? '#EAAE0D' : daysDifference === 0 ? 'purple' : daysDifference<0 && daysDifference>=-3? '#196EDA': daysDifference < -3 ? 'red' :  'black' }}>
            <td style={{ cursor: "pointer" }} onClick={() => handleAbiturient(data.student.id)}>
                {`${data.student.first_name} ${data.student.last_name}`}
            </td>
            <td >
                {data.student.phone_number1}
            </td>
            <td >
                {data.student.phone_number2}
            </td>
            <td >
                {data.student.wp_number}
            </td>

            <td >
                {data.student.status === 'D' ? 'Dondurub' : data.student.status==='DE' ? 'Davam Edir' : data.student.status==='B' ? 'Bitirilib' : ''}
            </td>

            <td >
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.payment_date}
            </td>
            <td >
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.paid_date}
            </td>
            <td >
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.payment_type==='N'? 'Nağd': data.payment_type==='HK'? 'Hesaba köçürmə': ''}
            </td>
            <td >
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.payment_amount}
            </td>
            <td >
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.status ? 'Ödənilib' : 'Ödənilməyib'}
            </td>
        </tr>
    )
}

export default AccountingStudentAbiturientCard