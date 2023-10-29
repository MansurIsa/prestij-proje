import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchsAbiturientsList } from '../actions/MainAction';

const BranchsAbiturientsContainer = () => {
    const dispatch = useDispatch();
    const { seasonSelectValue, branchsAbiturientsListArr,branchsSeasonsListArr } = useSelector(state => state.Data);
    console.log(seasonSelectValue);
    useEffect(() => {
        dispatch(getBranchsAbiturientsList(seasonSelectValue))
    }, [dispatch])

    console.log(branchsAbiturientsListArr);
    return (
        <div className='branchs_students_container container'>
            <div className="branchs_students_table_header">
                <div className="branchs_students_table_inner_header">
                    Abituriyentlər
                </div>
                <div className="branchs_students_table_inner_header">
                    Bloklar
                </div>
                <div className="branchs_students_table_inner_header">
                    Sinif
                </div>
                <div className="branchs_students_table_inner_header">
                    Qrup
                </div>
                <div className="branchs_students_table_inner_header">
                    DİM balı
                </div>
                
            </div>
            {/* {
                branchsAbiturientsListArr?.map((data, i) => {
                    return <BranchsTeachersCard key={i} data={data} />
                })
            } */}
        </div>
    )
}

export default BranchsAbiturientsContainer