import React, { useEffect } from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingTeacherTable from '../components/AccountingTeacherTable'
import AccountingTeachersTotal from '../components/AccountingTeachersTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../actions/MainAction'
import AccountingTeachersTotalDay from '../components/AccountingTeachersTotalDay'
import EditTeacherModalContainer from '../components/modals/EditTeacherModalContainer'
import AccountingTeachersStatusColor from '../components/AccountingTeachersStatusColor'

const BranchsTeachersAccountingPage = () => {
  const {loggedInUser,editTeacherModalContainer}=useSelector(state=>state.Data)
  const dispatch=useDispatch()

  console.log(loggedInUser);

  useEffect(()=>{
    dispatch(getUser(localStorage.getItem('loggedInEmail')))
  },[dispatch])
  return (
    <div>
        <AccountingMonths/>
        <AccountingTeacherTable/>
        {
          (loggedInUser?.is_accountant===false && loggedInUser?.is_staff===true)? <AccountingTeachersTotal/>: null
        }
        {
          (loggedInUser?.is_accountant===false && loggedInUser?.is_staff===true)? <AccountingTeachersTotalDay/>: null
        }
        
        <AccountingTeachersStatusColor/>
        {editTeacherModalContainer && <EditTeacherModalContainer/>}
    </div>
  )
}

export default BranchsTeachersAccountingPage