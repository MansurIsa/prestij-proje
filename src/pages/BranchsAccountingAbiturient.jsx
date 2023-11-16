import React from 'react'
import { useSelector } from 'react-redux';
import BranchsAccountingAbiturientCard from '../components/BranchsAccountingAbiturientCard';

const BranchsAccountingAbiturient = () => {
    const { accountingMonthAbiturientPaymentListArr } = useSelector(state => state.Data);
    console.log(accountingMonthAbiturientPaymentListArr);
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
                    Sinif
                </th>
                <th>
                    Blok
                </th>
                <th>
                    Qrup
                </th>
                <th>
                    Fənlər
                </th>
                <th>
                    Dim balı
                </th>
                <th>
                    Sektor
                </th>
                <th>
                    Ödəniş tarixi
                </th>
                <th>
                    Ödənildiyi tarix
                </th>
                <th>
                    Ödəniş forması
                </th>
                <th>
                    Ödəniş məbləği
                </th>
                <th>
                    Ödəniş statusu
                </th>
            </tr>
            {
                accountingMonthAbiturientPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingAbiturientCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default BranchsAccountingAbiturient