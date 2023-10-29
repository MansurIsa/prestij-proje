import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AccountingAbiturientCard from './AccountingAbiturientCard'
import EditStudentModalContainer from './modals/EditStudentModalContainer'

const AccountingAbiturientTable = () => {
    const dispatch = useDispatch()
    const { monthSelectValue, accountingAbiturientMonthPaymentListArr,accountingStudentMonthPaymentListArr,editStudentModalContainer } = useSelector(state => state.Data);

    
    console.log(accountingStudentMonthPaymentListArr);
    console.log(accountingAbiturientMonthPaymentListArr);
    return (
        <table>
            <tr>
                <th >
                    Abiturientlər
                </th>
                <th >
                    Telefon nömrəsi 1
                </th>
                <th >
                    Telefon nömrəsi 2
                </th>
                <th >
                    Vatsap nömrəsi
                </th>

                <th >
                    Status
                </th>

                <th >
                    Sinif
                </th>
                <th >
                    Blok
                </th>
                <th >
                    Qrup
                </th>
                <th >
                    Fənlər
                </th>
                <th >
                    Dim balı
                </th>
                <th >
                    Sektor
                </th>
                <th >
                    Ödəniş tarixi
                </th>
                <th >
                    Ödəniş forması
                </th>
                <th >
                    Ödəniş məbləği
                </th>
                <th>
                    Ödəniş statusu
                </th>
                <th>
                    Ödəniş məlumatlarını dəyiş
                </th>
            </tr>
            {/* accountingStudentMonthPaymentListArr */}
            {
                 accountingStudentMonthPaymentListArr?.map((data, i) => {
                    return <AccountingAbiturientCard key={i} data={data} />
                })
            }
            {editStudentModalContainer && <EditStudentModalContainer/>}
        </table>
    )
}

export default AccountingAbiturientTable