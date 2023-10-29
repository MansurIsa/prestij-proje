import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAccountingCivilMonthPaymentList } from '../actions/MainAction';
import AccountingCivilCard from './AccountingCivilCard';

const AccountingCivilTable = () => {
    const dispatch=useDispatch()
    const {monthSelectValue,accountingCivilMonthPaymentListArr}=useSelector(state=>state.Data);

    useEffect(()=>{
        dispatch(getAccountingCivilMonthPaymentList(monthSelectValue))
    },[dispatch])
    console.log(accountingCivilMonthPaymentListArr);
  return (
    <table>
            <tr>
                <th>
                    Dövlət qulluğu
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
                accountingCivilMonthPaymentListArr?.map((data, i) => {
                    return <AccountingCivilCard key={i} data={data} />
                })
            }
        </table>
  )
}

export default AccountingCivilTable