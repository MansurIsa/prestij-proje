import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAccountingAccountingMonthPaymentList } from '../actions/MainAction';
import AccountingAccountingCard from './AccountingAccountingCard';

const AccountingAccountingTable = () => {
    const dispatch = useDispatch()
    const { monthSelectValue, accountingAccountingMonthPaymentListArr } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getAccountingAccountingMonthPaymentList(monthSelectValue))
    }, [dispatch])
    console.log(accountingAccountingMonthPaymentListArr);
    return (
        <table>
            <tr>
                <th>
                    Muhasibatlıq
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
                accountingAccountingMonthPaymentListArr?.map((data, i) => {
                    return <AccountingAccountingCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default AccountingAccountingTable