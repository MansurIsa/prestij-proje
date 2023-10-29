import React from 'react'
import { useSelector } from 'react-redux';
import BranchsAccountingTeachersCard from '../components/BranchsAccountingTeachersCard';

const BranchsAccountingTeachers = () => {
    const { accountingMonthTeachersPaymentListArr } = useSelector(state => state.Data)
    console.log(accountingMonthTeachersPaymentListArr);
    return (
        <table className='handle_student_table'>
            <tr>
                <th>
                    Müəllimlər
                </th>
                <th>
                    Telefon nömrəsi 1
                </th>

                <th>
                    Vatsap nömrəsi
                </th>

                <th>
                    Status
                </th>

                <th>
                    İxtisas
                </th>
                <th>
                    Sektor
                </th>
                <th>
                    Ödəniş tarixi
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
                accountingMonthTeachersPaymentListArr?.map((data, i) => {
                    return <BranchsAccountingTeachersCard key={i} data={data} />
                })
            }
        </table>
   
    )
}

export default BranchsAccountingTeachers