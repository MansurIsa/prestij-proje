import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getStudentsList } from '../actions/MainAction'
import ClassesListCard from './ClassesListCard'

const BranchsClasses = () => {
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(getStudentsList())
    // },[dispatch])

    // const {studentsListArr}=useSelector(state=>state.Data)


    // console.log(studentsListArr);
    return (
        <div className='branchs_services container'>
            {/* {
                studentsListArr?.map((data, i) => {
                    return <ClassesListCard key={i} data={data} />
                })
            } */}


        </div>
    )
}

export default BranchsClasses