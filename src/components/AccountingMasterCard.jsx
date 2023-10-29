import React from 'react'
import { getAccountingMonthMasterPaymentList } from '../actions/MainAction';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CgMathMinus } from 'react-icons/cg';

const AccountingMasterCard = ({ data }) => {

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


    const handleMaster=(id)=>{
        console.log(id);
        navigate('/branchs-accounting-master')
       dispatch(getAccountingMonthMasterPaymentList(id)) 
    }
    return (
        <tr style={{ color: data.status ? 'green' : daysDifference <= 3 && daysDifference > 0 ? '#EAAE0D' : daysDifference == 0 ? 'purple' : daysDifference<0 && daysDifference>=-3? '#196EDA': daysDifference < -3 ? 'red' : 'black' }}>
            <td style={{cursor: "pointer"}} onClick={()=>handleMaster(data.master.id)}>
                {`${data.master.student.first_name} ${data.master.student.last_name}`}
            </td>
            <td>
                {data.master.student.phone_number1}
            </td>
            <td>
                {data.master.student.phone_number2}
            </td>
            <td>
                {data.master.student.wp_number}
            </td>
            
            <td>
                {data.master.student.status=='D'? 'Dondurub': 'DE'? 'Davam Edir': 'B'? 'Bitirilib': ''}
            </td>
            <td>
                {data.master.group}
            </td>
            <td>
                {data.master.subjects.map(sub=>{
                    return sub.name
                })}
            </td>
            <td>
                {data.master.dim_point}
            </td>
            <td>
                {data.master.language}
            </td>
            <td>
                {(data.master.student.status=='D' || data.master.student.status=='B')? <CgMathMinus/> : data.payment_date}
            </td>
            <td>
                {(data.master.student.status=='D' || data.master.student.status=='B')? <CgMathMinus/> : data.payment_amount}
            </td>
            <td>
                {(data.master.student.status=='D' || data.master.student.status=='B')? <CgMathMinus/> : data.status ? 'Ödənilib' : 'Ödənilməyib'}
            </td>
        </tr>
    )
}

export default AccountingMasterCard