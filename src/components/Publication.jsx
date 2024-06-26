import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEditionList } from '../actions/MainAction';
import PublicationCard from './PublicationCard';

const Publication = () => {
    const dispatch=useDispatch();
    const {editionListArr}=useSelector(state=>state.Data)

    useEffect(()=>{
        dispatch(getEditionList())
    },[dispatch])

  return (
    <div className=' publication_container container'>
        {
            editionListArr?.map((data,i)=>{
                return <PublicationCard key={i} data={data}/>
            })
        }
    </div>
  )
}

export default Publication