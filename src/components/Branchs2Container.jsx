import React, { useEffect } from 'react'
import Branchs2Card from './Branchs2Card'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchsList, getUser } from '../actions/MainAction';

const Branchs2Container = () => {
  const dispatch = useDispatch()
  const { branchsListArr, loggedInUser } = useSelector(state => state.Data);
  console.log(branchsListArr);
  let loggedInEmail = localStorage.getItem('loggedInEmail')

  useEffect(() => {
    dispatch(getUser(loggedInEmail))
  }, [dispatch,loggedInEmail])

  useEffect(() => {
    dispatch(getBranchsList(loggedInEmail))
  }, [dispatch,loggedInEmail])

  console.log(loggedInUser);
  console.log(branchsListArr);




  return (
    <div className='branchs_container'>
      
      {
        branchsListArr?.map((data, i) => {
          return <Branchs2Card key={i} data={data} />
        })
      }
       
    </div>
  )
}

export default Branchs2Container