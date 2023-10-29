import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BranchsHandleAbiturientCard from '../components/BranchsHandleAbiturientCard';

const BranchsHandleAbiturientsPage = () => {
    const {  branchsBlockAbiturientsListArr } = useSelector(state => state.Data);
    console.log(branchsBlockAbiturientsListArr);
    

    return (
        <div className="branchs_abiturients_cards_container container">
            <div className="branchs_students_container container">
                <div className="branchs_students_table_header">
                    <div className="branchs_students_table_inner_header">
                        Abituriyentlər
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
                    branchsBlockAbiturientsListArr?.map((data, i) => {
                        return <BranchsHandleAbiturientCard key={i} data={data} />
                    })
                }
            </div>

        </div>
    )
}

export default BranchsHandleAbiturientsPage