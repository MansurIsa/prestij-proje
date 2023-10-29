import React, { useEffect } from 'react'
import BranchsSeasons from '../components/BranchsSeasons'
import { useParams } from 'react-router-dom'
import BranchsServices from '../components/BranchsServices'

const BranchsCategory = () => {

  const {id}=useParams()
  console.log(id);
  
  return (
    <div className='branchs_category'>
        <BranchsSeasons id={id}/>
        <BranchsServices/>
    </div>
  )
}

export default BranchsCategory