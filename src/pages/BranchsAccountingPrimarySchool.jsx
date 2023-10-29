import React from 'react'
import { useSelector } from 'react-redux';
import BranchsAccountingPrimarySchoolCard from '../components/BranchsAccountingPrimarySchoolCard';

const BranchsAccountingPrimarySchool = () => {
    const { accountingMonthPrimarySchoolPaymentListArr } = useSelector(state => state.Data);
    console.log(accountingMonthPrimarySchoolPaymentListArr);
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
                    Qrup
                </th>
                <th>
                    Sinif
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
                accountingMonthPrimarySchoolPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingPrimarySchoolCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default BranchsAccountingPrimarySchool