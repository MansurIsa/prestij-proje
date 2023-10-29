import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchsForeignLanguageList, getBranchsGroupMasterList, getBranchsMasterForeignLanguageList, getBranchsMasterGrouptList, getBranchsMasterList, getBranchsMasterSubjectList, getBranchsSubjectMasterList } from '../actions/MainAction';
import BranchsAbiturientsCard from '../components/BranchsAbiturientsCard';
import { useNavigate } from 'react-router-dom';

const BranchsMasterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { seasonSelectValue, branchsMasterForeignLanguageListArr, branchsMasterSubjectListArr, branchsMasterGrouptListArr,
        branchsForeignLanguageListArr } = useSelector(state => state.Data);
    console.log(seasonSelectValue);
    useEffect(() => {
        dispatch(getBranchsMasterForeignLanguageList())
        dispatch(getBranchsMasterSubjectList())
        dispatch(getBranchsMasterGrouptList())
    }, [dispatch])

    const handleMasterForeignLanguage = (id) => {
        dispatch(getBranchsForeignLanguageList(id))
        navigate('/branchs-handle-abiturient')
    }

    const handleMasterSubject = (id) => {
        dispatch(getBranchsSubjectMasterList(id))
        navigate('/branchs-handle-abiturient')
    }

    const handleMasterGroup = (id) => {
        dispatch(getBranchsGroupMasterList(id))
        navigate('/branchs-handle-abiturient')
    }
    const handleAllMaster=()=>{
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsMasterList(seasonSelectValue))
    }



    console.log(branchsForeignLanguageListArr);
    return (
        <div className='branchs_abiturients_page'>
            <div className="branchs_abiturients_cards_container container">
                <h2>Magistr Xarici dilləri</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsMasterForeignLanguageListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleMasterForeignLanguage(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>
            <div className="branchs_abiturients_cards_container container">
                <h2>Magistr Fənnləri</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsMasterSubjectListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleMasterSubject(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>
            <div className="branchs_abiturients_cards_container container">
                <h2>Magistr Qrupları</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsMasterGrouptListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleMasterGroup(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>
            <div onClick={handleAllMaster} className="branchs_abiturients_cards_container container all_abiturient">
                <h2>Bütün Magistrantlar</h2>
               

            </div>
        </div>
    )
}

export default BranchsMasterPage