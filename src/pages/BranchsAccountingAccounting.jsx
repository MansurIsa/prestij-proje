import React from 'react'
import BranchsAccountingAccountingCard from '../components/BranchsAccountingAccountingCard'
import { useSelector } from 'react-redux';

const BranchsAccountingAccounting = () => {

    const { accountingMonthAccountingPaymentListArr } = useSelector(state => state.Data);
    console.log(accountingMonthAccountingPaymentListArr);
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
                accountingMonthAccountingPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingAccountingCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default BranchsAccountingAccounting