import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAccountingAbiturientMonthPaymentList, getBranchsStudentsList } from '../actions/MainAction';
import AccountingStudentAbiturientCard from './AccountingStudentAbiturientCard';
import AccountingStudentMasterCard from './AccountingStudentMasterCard';
import AccountingStudentMiqCard from './AccountingStudentMiqCard';
import AccountingStudentCivilCard from './AccountingStudentCivilCard';
import AccountingStudentComputerCourseCard from './AccountingStudentComputerCourseCard';
import AccountingStudentForeignLangCard from './AccountingStudentForeignLangCard';
import AccountingStudentAccountingCard from './AccountingStudentAccountingCard';
import AccountingStudentHighSchoolCard from './AccountingStudentHighSchoolCard';
import AccountingStudentPreSchoolCard from './AccountingStudentPreSchoolCard';
import AccountingStudentPrimarySchoolCard from './AccountingStudentPrimarySchoolCard';

const AccountingStudentTable = () => {
    let selectedSeason = localStorage.getItem('selectedSeason')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBranchsStudentsList(selectedSeason))
        dispatch(getAccountingAbiturientMonthPaymentList(localStorage.getItem('selectedMonth')))
    }, [dispatch])
    const {accountingAbiturientMonthPaymentListArr,accountingMasterMonthPaymentListArr,accountingMiqMonthPaymentListArr,accountingCivilMonthPaymentListArr,
        accountingForeignlanguageMonthPaymentListArr,accountingComputerCourseMonthPaymentListArr,accountingAccountingMonthPaymentListArr,
        accountingHighSchoolMonthPaymentListArr,accountingPreSchoolMonthPaymentListArr,accountingPrimarySchoolMonthPaymentListArr } = useSelector(state => state.Data)
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
        {/* {
            accountingAbiturientMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentAbiturientCard key={i} data={data} />
            })
        }
        {
            accountingMasterMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentMasterCard key={i} data={data} />
            })
        }
        {
            accountingMiqMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentMiqCard key={i} data={data} />
            })
        }
        {
            accountingCivilMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentCivilCard key={i} data={data} />
            })
        }
        {
            accountingForeignlanguageMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentForeignLangCard key={i} data={data} />
            })
        }
        {
            accountingComputerCourseMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentComputerCourseCard key={i} data={data} />
            })
        }
        {
            accountingAccountingMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentAccountingCard key={i} data={data} />
            })
        }
        {
            accountingHighSchoolMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentHighSchoolCard key={i} data={data} />
            })
        }
        {
            accountingPreSchoolMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentPreSchoolCard key={i} data={data} />
            })
        }
        {
            accountingPrimarySchoolMonthPaymentListArr?.map((data, i) => {
                return <AccountingStudentPrimarySchoolCard key={i} data={data} />
            })
        } */}
        
    </table>
    )
}

export default AccountingStudentTable