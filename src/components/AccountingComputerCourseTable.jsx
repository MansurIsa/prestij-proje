import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAccountingComputerCourseMonthPaymentList } from '../actions/MainAction';
import AccountingComputerCourseCard from './AccountingComputerCourseCard';

const AccountingComputerCourseTable = () => {
    const dispatch = useDispatch()
    const { monthSelectValue, accountingComputerCourseMonthPaymentListArr } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getAccountingComputerCourseMonthPaymentList(monthSelectValue))
    }, [dispatch])
    console.log(accountingComputerCourseMonthPaymentListArr);
    return (
        <table>
            <tr>
                <th>
                    Komputer hazırlığı
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
                    Proqram tipi
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
                accountingComputerCourseMonthPaymentListArr?.map((data, i) => {
                    return <AccountingComputerCourseCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default AccountingComputerCourseTable