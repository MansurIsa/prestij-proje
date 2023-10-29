import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getServicesList } from '../actions/MainAction';
import ServicesCard from './ServicesCard';


const ServicesContainer = () => {

    const dispatch=useDispatch()
    const servicesListArr=useSelector(state=>state.Data.servicesListArr)
    useEffect(()=>{
        dispatch(getServicesList())
    },[dispatch])

    console.log(servicesListArr);
    return (
        <div className='services_container cards container'>
            
            {
                servicesListArr.map((data,i)=>{
                    return <ServicesCard key={i} data={data}/>
                })
            }
            
            
        </div>
    )
}

export default ServicesContainer