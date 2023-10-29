import React, { useEffect } from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingAbiturientTable from '../components/AccountingAbiturientTable'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountingAbiturientMonthPaymentList, getAccountingMasterMonthPaymentList, getUser } from '../actions/MainAction'
import { useParams } from 'react-router-dom'
import AccountingAbiturientTotal from '../components/AccountingAbiturientTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import AccountingStudentTotalDay from '../components/AccountingStudentTotalDay'

const BranchsAbiturientsAccountingPage = () => {
  const { id } = useParams()
  console.log(id);

  const { loggedInUser } = useSelector(state => state.Data)
  console.log(loggedInUser);
  return (
    <div>
      <AccountingMonths id={id} />
      <AccountingAbiturientTable />

      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingAbiturientTotal /> : null
      }

      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingStudentTotalDay /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsAbiturientsAccountingPage