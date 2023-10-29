import React from 'react'
import { useSelector } from 'react-redux';
import BranchsAccountingMasterCard from '../components/BranchsAccountingMasterCard';

const BranchsAccountingMaster = () => {
    const { accountingMonthMasterPaymentListArr } = useSelector(state => state.Data);
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
                    Qrup
                </th>
                <th>
                    Fənlər
                </th>
                <th>
                    Qəbul balı
                </th>
                <th>
                    Dil
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
                accountingMonthMasterPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingMasterCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default BranchsAccountingMaster