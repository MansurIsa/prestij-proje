import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchsTeachersList } from '../actions/MainAction';
import BranchsTeachersCard from './BranchsTeachersCard';

const BranchsTeachersContainer = () => {
    const dispatch = useDispatch();
    const { seasonSelectValue, branchsTeachersListArr } = useSelector(state => state.Data);
    console.log(seasonSelectValue);
    useEffect(() => {
        dispatch(getBranchsTeachersList(seasonSelectValue))
    }, [dispatch])

    console.log(branchsTeachersListArr);
  return (
    <div className='branchs_students_container container'>
            <div className="branchs_students_table_header">
                <div className="branchs_students_table_inner_header">
                    Müəllimlər
                </div>
                <div className="branchs_students_table_inner_header">
                    Telefon nömrəsi
                </div>
                <div className="branchs_students_table_inner_header">
                    Vatsap nömrəsi
                </div>
                <div className="branchs_students_table_inner_header">
                    Fənn
                </div>
                <div className="branchs_students_table_inner_header">
                    Sektor
                </div>
                <div className="branchs_students_table_inner_header">
                    Maaş
                </div>
                <div className="branchs_students_table_inner_header">
                    Sezon
                </div>
                <div className="branchs_students_table_inner_header">
                    Status
                </div>
            </div>
            {
                branchsTeachersListArr?.map((data, i) => {
                    return <BranchsTeachersCard key={i} data={data} />
                })
            }
        </div>
  )
}

export default BranchsTeachersContainer