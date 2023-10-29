import React from 'react'
import BranchsAccountingHighScholCard from '../components/BranchsAccountingHighScholCard'
import { useSelector } from 'react-redux';

const BranchsAccountingHighSchool = () => {
    const { accountingMonthHighSchoolPaymentListArr } = useSelector(state => state.Data);
    console.log(accountingMonthHighSchoolPaymentListArr);
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
                accountingMonthHighSchoolPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingHighScholCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default BranchsAccountingHighSchool