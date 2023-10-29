import React from 'react'
import BranchsAccountingComputerCourseCard from '../components/BranchsAccountingComputerCourseCard'
import { useSelector } from 'react-redux';

const BranchsAccountingComputerCourse = () => {
    const { accountingMonthComputerCoursePaymentListArr } = useSelector(state => state.Data);
    console.log(accountingMonthComputerCoursePaymentListArr);
    return (
        <table className='handle_student_table'>
            <tr>
                <th>
                    Aylar
                </th>
                <th>
                    Telefon nömrəsi 1
                </th>
                <th>
                    Telefon nömrəsi 2
                </th>
                <th>
                    Vatsap nömrəsi
                </th>
                <th>
                    Proqram tipi
                </th>
                <th>
                    Status
                </th>
                <th>
                    Ödəniş tarixi
                </th>
                <th>
                    Ödəniş məbləği
                </th>
                <th>
                    Ödəniş statusu
                </th>
            </tr>
            {
                accountingMonthComputerCoursePaymentListArr?.map((data, i) => {
                    return <BranchsAccountingComputerCourseCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default BranchsAccountingComputerCourse