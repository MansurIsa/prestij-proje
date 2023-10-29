import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBranchsCivilList, getBranchsCivilSubjectstList, getBranchsSubjectCivilList } from '../actions/MainAction';
import BranchsAbiturientsCard from '../components/BranchsAbiturientsCard';

const BranchsCivilPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { seasonSelectValue, branchsCivilSubjectstListArr } = useSelector(state => state.Data);
    useEffect(() => {
        dispatch(getBranchsCivilSubjectstList(seasonSelectValue))
    }, [dispatch])
    console.log(branchsCivilSubjectstListArr);

    const handleCivilSubject=(id)=>{
        dispatch(getBranchsSubjectCivilList(id))
        navigate('/branchs-handle-abiturient')
    }
    const handleAllCivil=()=>{
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsCivilList(seasonSelectValue))
    }
    return (
        <div className='branchs_abiturients_page'>
            <div className="branchs_abiturients_cards_container container">
                <h2>Dövlət qulluğu</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsCivilSubjectstListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleCivilSubject(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>
            <div onClick={handleAllCivil} className="branchs_abiturients_cards_container container all_abiturient">
                <h2>Bütün Dövlət qulluğu</h2>
               

            </div>
        </div>
    )
}

export default BranchsCivilPage