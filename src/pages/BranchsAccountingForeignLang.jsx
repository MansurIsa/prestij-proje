import React from 'react'
import { useSelector } from 'react-redux';
import BranchsAccountingForeignLangCard from '../components/BranchsAccountingForeignLangCard';

const BranchsAccountingForeignLang = () => {
    const { accountingMonthForeiginLangPaymentListArr } = useSelector(state => state.Data);
    console.log(accountingMonthForeiginLangPaymentListArr);
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
                accountingMonthForeiginLangPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingForeignLangCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default BranchsAccountingForeignLang