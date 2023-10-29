import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBranchsList } from '../actions/MainAction';
import BranchsCard from './BranchsCard';

const BranchsContainer = () => {
    const dispatch=useDispatch()
    const {branchsListArr}=useSelector(state=>state.Data);

    useEffect(()=>{
        dispatch(getBranchsList())
    },[dispatch])

    console.log(branchsListArr);
  return (
    <div className='branchs_container'>
        {
            branchsListArr?.map((data,i)=>{
                return <BranchsCard key={i} data={data}/>
            })
        }
    </div>
  )
}

export default BranchsContainer