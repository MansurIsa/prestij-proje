import React from 'react'
import { CgMathMinus } from 'react-icons/cg';

const BranchsAccountingAbiturientCard = ({ data }) => {
    console.log(data);
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
    return (
        <tr style={{ color: data.status ? 'green' : daysDifference <= 3 && daysDifference > 0 ? '#EAAE0D' : daysDifference === 0 ? 'purple' : daysDifference < 0 && daysDifference >= -3 ? '#196EDA' : daysDifference < -3 ? 'red' : 'black' }}>
            <td>
                {data.month.name}
            </td>
            <td>
                {data.student.phone_number1}
            </td>
            <td>
                {data.student.phone_number2}
            </td>
            <td>
                {data.student.wp_number}
            </td>

            <td>
                {data.student.status === 'D' ? 'Dondurub' : 'DE' ? 'Davam Edir' : 'B' ? 'Bitirilib' : ''}
            </td>

            <td>
                {data.student.abiturient_class != null ? data.student.abiturient_class.name : ''}
            </td>
            <td>
                {data.student.blocks.map(block => {
                    return block.name
                })}
            </td>
            <td>
                {data.student.group != null ? data.student.group.name : ''}
            </td>
            <td>
                {data.student.subjects.map(sub => {
                    return sub.name
                })}
            </td>
            <td>
                {data.student.dim_point}
            </td>
            <td>
                {data.student.sector}
            </td>
            <td>
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.payment_date}
            </td>
            <td>
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.paid_date}
            </td>
            <td>
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.payment_type === 'N' ? 'Nağd' : data.payment_type === 'HK' ? 'Hesaba köçürmə' : ''}
            </td>
            <td>
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.payment_amount}
            </td>
            <td>
                {(data.student.status === 'D' || data.student.status === 'B') ? <CgMathMinus /> : data.status ? 'Ödənilib' : 'Ödənilməyib'}
            </td>
        </tr>
    )
}

export default BranchsAccountingAbiturientCard