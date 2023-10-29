import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAccountingPrimarySchoolMonthPaymentList } from '../actions/MainAction';
import AccountingPrimarySchoolCard from './AccountingPrimarySchoolCard';

const AccountingPrimarySchoolTable = () => {
    const dispatch = useDispatch()
    const { monthSelectValue, accountingPrimarySchoolMonthPaymentListArr } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getAccountingPrimarySchoolMonthPaymentList(monthSelectValue))
    }, [dispatch])
    console.log(accountingPrimarySchoolMonthPaymentListArr);
    return (
        <table>
            <tr>
                <th>
                    İbtidai
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
                    Qrup
                </th>
                <th>
                    Sinif
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
                accountingPrimarySchoolMonthPaymentListArr?.map((data, i) => {
                    return <AccountingPrimarySchoolCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default AccountingPrimarySchoolTable