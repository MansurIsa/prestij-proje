import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBranchsStudentsList } from '../actions/MainAction';
import BranchsStudentsCard from './BranchsStudentsCard';

const BranchsStudentsContainer = () => {
    const dispatch = useDispatch();
    const { seasonSelectValue, branchsStudentsListArr } = useSelector(state => state.Data);
    console.log(seasonSelectValue);
    useEffect(() => {
        dispatch(getBranchsStudentsList(seasonSelectValue))
    }, [dispatch])

    console.log(branchsStudentsListArr);
    return (
        <div className='branchs_students_container container'>
            <div className="branchs_students_table_header">
                <div className="branchs_students_table_inner_header">
                    Tələbələr
                </div>
                <div className="branchs_students_table_inner_header">
                    Telefon nömrəsi 1
                </div>
                <div className="branchs_students_table_inner_header">
                    Telefon nömrəsi 2
                </div>
                <div className="branchs_students_table_inner_header">
                    Vatsap nömrəsi
                </div>
                <div className="branchs_students_table_inner_header">
                    Sezon
                </div>
                <div className="branchs_students_table_inner_header">
                    Status
                </div>
            </div>
            {
                branchsStudentsListArr?.map((data, i) => {
                    return <BranchsStudentsCard key={i} data={data} />
                })
            }
        </div>
    )
}

export default BranchsStudentsContainer