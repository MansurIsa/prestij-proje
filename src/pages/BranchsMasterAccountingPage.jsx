import React from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingMasterTable from '../components/AccountingMasterTable'
import { useDispatch, useSelector } from 'react-redux'
import AccountingMagistrTotal from '../components/AccountingMagistrTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'

const BranchsMasterAccountingPage = () => {
  const { loggedInUser } = useSelector(state => state.Data)
  return (
    <div>
      <AccountingMonths />
      <AccountingMasterTable />
      {
        (loggedInUser?.is_accountant == false && loggedInUser?.is_staff == true) ? <AccountingMagistrTotal /> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsMasterAccountingPage