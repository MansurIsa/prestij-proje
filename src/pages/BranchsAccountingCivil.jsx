import React from 'react'
import { useSelector } from 'react-redux';
import BranchsAccountingCivilCard from '../components/BranchsAccountingCivilCard';

const BranchsAccountingCivil = () => {
    const { accountingMonthCivilPaymentListArr } = useSelector(state => state.Data);
    console.log(accountingMonthCivilPaymentListArr);
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
                accountingMonthCivilPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingCivilCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default BranchsAccountingCivil