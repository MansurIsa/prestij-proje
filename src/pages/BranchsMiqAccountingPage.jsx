import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingMiqTable from '../components/AccountingMiqTable'
import AccountingMiqTotal from '../components/AccountingMiqTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import { useSelector } from 'react-redux'

const BranchsMiqAccountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)
  return (
    <div>
      <AccountingMonths />
      <AccountingMiqTable />
      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingMiqTotal /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsMiqAccountingPage