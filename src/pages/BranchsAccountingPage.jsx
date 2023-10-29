import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchsAccountingList } from '../actions/MainAction';
import BranchsHandleAbiturientCard from '../components/BranchsHandleAbiturientCard';

const BranchsAccountingPage = () => {

    const dispatch = useDispatch();
    const { seasonSelectValue, branchsAccountingListArr } = useSelector(state => state.Data);
    useEffect(() => {
        dispatch(getBranchsAccountingList(seasonSelectValue))
    }, [dispatch])
    console.log(branchsAccountingListArr);
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
            branchsAccountingListArr?.map((data, i) => {
                return <BranchsHandleAbiturientCard key={i} data={data} />
            })
        }
    </div>

</div>
  )
}

export default BranchsAccountingPage