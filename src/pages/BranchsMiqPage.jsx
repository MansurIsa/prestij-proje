import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchsMiqList, getBranchsMiqSubjectstList, getBranchsSubjectMiqList } from '../actions/MainAction';
import BranchsAbiturientsCard from '../components/BranchsAbiturientsCard';
import { useNavigate } from 'react-router-dom';

const BranchsMiqPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { seasonSelectValue, branchsMiqSubjectstListArr } = useSelector(state => state.Data);
    useEffect(() => {
        dispatch(getBranchsMiqSubjectstList(seasonSelectValue))
    }, [dispatch])

    const handleMiqSubject = (id) => {
        dispatch(getBranchsSubjectMiqList(id))
        navigate('/branchs-handle-abiturient')
    }
    const handleAllMiq=()=>{
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsMiqList(seasonSelectValue))
    }
    console.log(branchsMiqSubjectstListArr);
    return (
        <div className='branchs_abiturients_page'>
            <div className="branchs_abiturients_cards_container container">
                <h2>Miq Fənləri</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsMiqSubjectstListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleMiqSubject(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>

            <div onClick={handleAllMiq} className="branchs_abiturients_cards_container container all_abiturient">
                <h2>Bütün Miqlər</h2>
               

            </div>
        </div>
    )
}

export default BranchsMiqPage