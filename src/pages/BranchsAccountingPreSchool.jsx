import React from 'react'
import BranchsAccountingPreSchoolCard from '../components/BranchsAccountingPreSchoolCard'
import { useSelector } from 'react-redux';

const BranchsAccountingPreSchool = () => {

    const { accountingMonthPreSchoolPaymentListArr } = useSelector(state => state.Data);
    console.log(accountingMonthPreSchoolPaymentListArr);
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
                    Fənlər
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
                accountingMonthPreSchoolPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingPreSchoolCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default BranchsAccountingPreSchool