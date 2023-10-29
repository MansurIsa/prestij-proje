import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingHighSchoolTable from '../components/AccountingHighSchoolTable'
import AccountingHighSchoolTotal from '../components/AccountingHighSchoolTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import { useSelector } from 'react-redux'

const BranchsHighSchoolAccountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)
  return (
    <div>
      <AccountingMonths />
      <AccountingHighSchoolTable />
      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingHighSchoolTotal /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsHighSchoolAccountingPage