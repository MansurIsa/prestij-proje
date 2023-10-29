import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingComputerCourseTable from '../components/AccountingComputerCourseTable'
import AccountingComputerCourseTotal from '../components/AccountingComputerCourseTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import { useSelector } from 'react-redux'

const BranchsComputerCourseAccountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)
  return (
    <div>
      <AccountingMonths />
      <AccountingComputerCourseTable />
      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingComputerCourseTotal /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsComputerCourseAccountingPage