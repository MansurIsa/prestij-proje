import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingCivilTable from '../components/AccountingCivilTable'
import AccountingCivilTotal from '../components/AccountingCivilTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import { useSelector } from 'react-redux'

const BranchsCivilAccountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)
  return (
    <div>
      <AccountingMonths />
      <AccountingCivilTable />
      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingCivilTotal /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsCivilAccountingPage