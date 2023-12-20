import React, { useEffect } from 'react'
import AccountingMonths from '../components/AccountingMonths'
import AccountingAbiturientTable from '../components/AccountingAbiturientTable'
import {  useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AccountingAbiturientTotal from '../components/AccountingAbiturientTotal'
import AccountingStudentsStatusColor from '../components/AccountingStudentsStatusColor'
import AccountingStudentTotalDay from '../components/AccountingStudentTotalDay'
import { getCategoryList } from '../actions/MainAction'

const BranchsAbiturientsAccountingPage = () => {
  const { id } = useParams()
  const dispatch=useDispatch()
  console.log(id);

  useEffect(()=>{
    dispatch(getCategoryList())
  },[dispatch])

  const { loggedInUser,categoryListArr } = useSelector(state => state.Data)
  console.log(loggedInUser);
  console.log(categoryListArr);


  let categoryName=categoryListArr.find(x=>x?.id===+id)
  
  return (
    <div>
      <AccountingMonths id={id} />
      <AccountingAbiturientTable categoryName={categoryName} id={id} />

      {
        (loggedInUser?.is_accountant === false && loggedInUser?.is_staff === true) ? <AccountingAbiturientTotal categoryName={categoryName}/> : null
      }

      {
        (loggedInUser?.is_accountant === false && loggedInUser?.is_staff === true) ? <AccountingStudentTotalDay categoryName={categoryName}/> : null
      }

      <AccountingStudentsStatusColor />
    </div>
  )
}

export default BranchsAbiturientsAccountingPage