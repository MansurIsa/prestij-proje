import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBranchsHandlePrimarySchoolClassList, getBranchsHandlePrimarySchoolGroupList, getBranchsHandlePrimarySchoolSubjectList, getBranchsPrimarySchoolClassList, getBranchsPrimarySchoolGrouptList, getBranchsPrimarySchoolList, getBranchsPrimarySchoolSubjectList } from '../actions/MainAction';
import BranchsAbiturientsCard from '../components/BranchsAbiturientsCard';

const BranchPrimarySchoolPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { seasonSelectValue, branchsPrimarySchoolClassListArr, branchsPrimarySchoolSubjectListArr, branchsPrimarySchoolGroupListArr } = useSelector(state => state.Data);
    useEffect(() => {
        dispatch(getBranchsPrimarySchoolClassList())
        dispatch(getBranchsPrimarySchoolSubjectList())
        dispatch(getBranchsPrimarySchoolGrouptList())
    }, [dispatch])

    console.log(branchsPrimarySchoolGroupListArr);

    const handleBranchPrimarySchoolClassCard = (id) => {
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsHandlePrimarySchoolClassList(id))
    }
    const handleBranchPrimarySchoolSubjectCard = (id) => {
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsHandlePrimarySchoolSubjectList(id))
    }
    const handleBranchPrimarySchoolGroupCard = (id) => {
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsHandlePrimarySchoolGroupList(id))
    }

    const handleAllPrimarySchool = (id) => {
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsPrimarySchoolList(seasonSelectValue))
    }
    
    return (
        <div className='branchs_abiturients_page'>
            <div className="branchs_abiturients_cards_container container">
                <h2>Ibtidai sinifləri</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsPrimarySchoolClassListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleBranchPrimarySchoolClassCard(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>
            <div className="branchs_abiturients_cards_container container">
                <h2>Ibtidai fənnləri</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsPrimarySchoolSubjectListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleBranchPrimarySchoolSubjectCard(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>
            <div className="branchs_abiturients_cards_container container">
                <h2>Ibtidai qrupları</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsPrimarySchoolGroupListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleBranchPrimarySchoolGroupCard(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>

            <div onClick={handleAllPrimarySchool} className="branchs_abiturients_cards_container container all_abiturient">
                <h2>Bütün İbtidai</h2>


            </div>

        </div>
    )
}

export default BranchPrimarySchoolPage