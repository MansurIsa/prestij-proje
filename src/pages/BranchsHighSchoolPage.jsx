import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBranchsHandleHighSchoolClassList, getBranchsHandleHighSchoolGroupList, getBranchsHandleHighSchoolSubjectList, getBranchsHighSchoolClassList, getBranchsHighSchoolGroupList, getBranchsHighSchoolList, getBranchsHighSchoolSubjectList } from '../actions/MainAction';
import BranchsAbiturientsCard from '../components/BranchsAbiturientsCard';

const BranchsHighSchoolPage = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate()
  const { seasonSelectValue, branchsHighSchoolClassListArr,branchsHighSchoolSubjectListArr,branchsHighSchoolGroupListArr } = useSelector(state => state.Data);
  console.log(seasonSelectValue);
  useEffect(() => {
    dispatch(getBranchsHighSchoolClassList())
    dispatch(getBranchsHighSchoolSubjectList())
    dispatch(getBranchsHighSchoolGroupList())
  }, [dispatch])

  console.log(branchsHighSchoolGroupListArr);

  const handleBranchHighSchoolClassCard=(id)=>{
    navigate('/branchs-handle-abiturient')
    dispatch(getBranchsHandleHighSchoolClassList(id))
  }
  const handleBranchHighSchoolSubjectCard=(id)=>{
    navigate('/branchs-handle-abiturient')
    dispatch(getBranchsHandleHighSchoolSubjectList(id))
  }
  const handleBranchHighSchoolGroupCard=(id)=>{
    navigate('/branchs-handle-abiturient')
    dispatch(getBranchsHandleHighSchoolGroupList(id))
  }
  const handleAllHighSchool=()=>{
    navigate('/branchs-handle-abiturient')
    dispatch(getBranchsHighSchoolList(seasonSelectValue))
  }

    return (
        <div className='branchs_abiturients_page'>
            <div className="branchs_abiturients_cards_container container">
                <h2>Liseylərə hazırlıq sinifləri</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsHighSchoolClassListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleBranchHighSchoolClassCard(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>
            <div className="branchs_abiturients_cards_container container">
                <h2>Liseylərə hazırlıq fənnləri</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsHighSchoolSubjectListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleBranchHighSchoolSubjectCard(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>
            <div className="branchs_abiturients_cards_container container">
                <h2>Liseylərə hazırlıq qrupları</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsHighSchoolGroupListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleBranchHighSchoolGroupCard(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>


            <div onClick={handleAllHighSchool} className="branchs_abiturients_cards_container container all_abiturient">
                <h2>Bütün Liseylər</h2>
               

            </div>
            
        </div>
    )
}

export default BranchsHighSchoolPage