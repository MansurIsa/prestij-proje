import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingAccountingTable from '../components/AccountingAccountingTable'
import AccountingAccountingTotal from '../components/AccountingAccountingTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import { useSelector } from 'react-redux'

const BranchsAccountingAccountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)
  return (
    <div>
      <AccountingMonths />
      <AccountingAccountingTable />
      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingAccountingTotal /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsAccountingAccountingPage