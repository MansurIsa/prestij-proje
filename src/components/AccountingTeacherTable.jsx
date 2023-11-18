import React from 'react'
import { useSelector } from 'react-redux'
import AccountingTeacherCard from './AccountingTeacherCard';

const AccountingTeacherTable = () => {
    const { accountingTeacherMonthPaymentListArr } = useSelector(state => state.Data)
    console.log(accountingTeacherMonthPaymentListArr);
    return (
        <table>
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
                <th>
                    Ödəniş məlumatlarını dəyiş
                </th>
            </tr>
            {
                accountingTeacherMonthPaymentListArr?.map((data, i) => {
                    return <AccountingTeacherCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default AccountingTeacherTable