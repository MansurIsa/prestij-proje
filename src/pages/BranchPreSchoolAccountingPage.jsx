import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingPreSchoolTable from '../components/AccountingPreSchoolTable'
import AccountingPreSchoolTotal from '../components/AccountingPreSchoolTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import { useSelector } from 'react-redux'

const BranchPreSchoolAccountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)
  return (
    <div>
      <AccountingMonths />
      <AccountingPreSchoolTable />
      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingPreSchoolTotal /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchPreSchoolAccountingPage