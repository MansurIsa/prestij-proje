import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAccountingAbiturientMonthPaymentList, getBranchsStudentsList } from '../actions/MainAction';
import AccountingStudentAbiturientCard from './AccountingStudentAbiturientCard';


const AccountingStudentTable = () => {
    let selectedSeason = localStorage.getItem('selectedSeason')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBranchsStudentsList(selectedSeason))
        dispatch(getAccountingAbiturientMonthPaymentList(localStorage.getItem('selectedMonth')))
    }, [dispatch])
    const {accountingAbiturientMonthPaymentListArr } = useSelector(state => state.Data)
    console.log(accountingAbiturientMonthPaymentListArr);
    return (
        <table>
        <tr>
            <th>
                Tələbələr
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
                Ödəniş tarixi
            </th>
            <th >
                Ödənildiyi tarix
            </th>
            <th >
                Ödəniş forması
            </th>
            <th >
                Ödəniş məbləği
            </th>
            <th >
                Ödəniş statusu
            </th>
        </tr>
        {
            accountingAbiturientMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentAbiturientCard key={i} data={data} />
            })
        }
        
    </table>
    )
}

export default AccountingStudentTable