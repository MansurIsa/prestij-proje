import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingPrimarySchoolTable from '../components/AccountingPrimarySchoolTable'
import AccountingPrimarySchoolTotal from '../components/AccountingPrimarySchoolTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import { useSelector } from 'react-redux'

const BranchPrimarySchoolAccountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)
  return (
    <div>
      <AccountingMonths />
      <AccountingPrimarySchoolTable />
      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingPrimarySchoolTotal /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchPrimarySchoolAccountingPage