import React from 'react'
import { getAccountingMonthTeachersPaymentList } from '../actions/MainAction';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editTeacherModalContainerFunc } from '../redux/MainReducer';
import { FaEdit } from 'react-icons/fa';

const AccountingTeacherCard = ({ data }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
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

    const handleTeachers = (id) => {
        console.log(id);
        navigate('/branchs-accounting-teachers')
        dispatch(getAccountingMonthTeachersPaymentList(id))
    }
    return (
        <tr className='table_tr_style' style={{ color: data.status ? 'green' : daysDifference <= 3 && daysDifference > 0 ? '#EAAE0D' : daysDifference === 0 ? 'purple' : daysDifference<0 && daysDifference>=-3? '#196EDA': daysDifference < -3 ? 'red' : 'black' }}>
            <td style={{ cursor: "pointer" }} onClick={() => handleTeachers(data.teacher.id)}>
                {`${data.teacher.first_name} ${data.teacher.last_name}`}
            </td>
            <td>
                {data.teacher.phone_number1}
            </td>

            <td>
                {data.teacher.wp_number}
            </td>
            <td>
                {data.teacher.status === 'FM' ? 'Fixed Maaş' : 'TS' ? 'Tələbə sayı' : 'QE' ? 'Qeyd edilməyib' : ''}
            </td>
            <td>
                {data.teacher.specialty}
            </td>

            <td>
                {data.teacher.section}
            </td>
            <td>
                {data.payment_date}
            </td>
            <td>
                {data.paid_date}
            </td>
            <td>
                {data.payment_type==='N'? 'Nağd': data.payment_type==='HK'? 'Hesaba köçürmə': ''}
            </td>
            <td>
                {data.payment_amount}
            </td>
            <td>
                {data.status ? 'Ödənilib' : 'Ödənilməyib'}
            </td>
            <td style={{fontSize: '20px', color: '#196EDA'}}>
                <FaEdit onClick={()=>dispatch(editTeacherModalContainerFunc(data))}/>
            </td>
        </tr>
    )
}

export default AccountingTeacherCard