import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingForeignLanguageTable from '../components/AccountingForeignLanguageTable'
import AccountingForeignLanguageTotal from '../components/AccountingForeignLanguageTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import { useSelector } from 'react-redux'

const BranchsForeignLanguageAccountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)
  return (
    <div>
      <AccountingMonths />
      <AccountingForeignLanguageTable />
      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingForeignLanguageTotal /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsForeignLanguageAccountingPage