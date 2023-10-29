import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAccountingHighSchoolMonthPaymentList } from '../actions/MainAction';
import AccountingHighSchoolCard from './AccountingHighSchoolCard';

const AccountingHighSchoolTable = () => {

    const dispatch = useDispatch()
    const { monthSelectValue, accountingHighSchoolMonthPaymentListArr } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getAccountingHighSchoolMonthPaymentList(monthSelectValue))
    }, [dispatch])
    console.log(accountingHighSchoolMonthPaymentListArr);
    return (
        <table>
            <tr>
                <th>
                    Lisey
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
                accountingHighSchoolMonthPaymentListArr?.map((data, i) => {
                    return <AccountingHighSchoolCard key={i} data={data} />
                })
            }
        </table>
    )
}

export default AccountingHighSchoolTable