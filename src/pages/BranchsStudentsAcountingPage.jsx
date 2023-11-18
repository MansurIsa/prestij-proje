import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import AccountingStudentTable from '../components/AccountingStudentTable'
import AccountingStudentsTotal from '../components/AccountingStudentsTotal'
import {  useSelector } from 'react-redux'
import AccountingStudentsTotalDay from '../components/AccountingStudentsTotalDay'

const BranchsStudentsAcountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)

  console.log(loggedInUser);
  return (
    <div>
      <AccountingMonths />
      <AccountingStudentTable />
      {
        (loggedInUser?.is_accountant === false && loggedInUser?.is_staff === true) ? <AccountingStudentsTotal /> : null
      }
      {
        (loggedInUser?.is_accountant === false && loggedInUser?.is_staff === true) ? <AccountingStudentsTotalDay /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsStudentsAcountingPage