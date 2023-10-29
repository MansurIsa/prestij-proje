import React from 'react'
import BranchsAccountingMiqCard from '../components/BranchsAccountingMiqCard';
import { useSelector } from 'react-redux';

const BranchsAccountingMiq = () => {
    const { accountingMonthMiqPaymentListArr } = useSelector(state => state.Data);
  return (
    <table className='handle_student_table'>
            <tr>
                <th>
                    Miq
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
                    İxtisas
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
                accountingMonthMiqPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingMiqCard key={i} data={data} />
                })
            }
        </table>
  )
}

export default BranchsAccountingMiq