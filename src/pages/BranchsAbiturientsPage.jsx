import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchsAbiturientsList, getBranchsBlockAbiturientsList, getBranchsBlocksList, getBranchsClassAbiturientsList, getBranchsClassesList, getBranchsGroupAbiturientsList, getBranchsGroupsList, getBranchsSubjectAbiturientsList, getBranchsSubjectsList } from '../actions/MainAction';
import BranchsAbiturientsCard from '../components/BranchsAbiturientsCard';
import { useNavigate } from 'react-router-dom';

const BranchsAbiturientsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { seasonSelectValue, branchsAbiturientsListArr, branchsBlocksListArr, branchsClassessListArr,
    branchsSubjectsListArr, branchsGroupsListArr } = useSelector(state => state.Data);
  console.log(seasonSelectValue);
  useEffect(() => {
    dispatch(getBranchsBlocksList())
    dispatch(getBranchsClassesList())
    dispatch(getBranchsSubjectsList())
    dispatch(getBranchsGroupsList())
    
  }, [dispatch])
 


  
  const handleBranchAbiturientCard = (id) => {
    navigate('/branchs-handle-abiturient')
    dispatch(getBranchsBlockAbiturientsList(id))
  
  }

  const handleBranchClassesCard=(id)=>{
    navigate('/branchs-handle-abiturient')
    dispatch(getBranchsClassAbiturientsList(id))
  }

  const handleBranchSubjectsCard=(id)=>{
    navigate('/branchs-handle-abiturient')
    dispatch(getBranchsSubjectAbiturientsList(id))
  }
  const handleBranchGroupsCard=(id)=>{
    navigate('/branchs-handle-abiturient')
    dispatch(getBranchsGroupAbiturientsList(id))
  }
  const handleAllAbiturient=()=>{
    navigate('/branchs-handle-abiturient')
    dispatch(getBranchsAbiturientsList(seasonSelectValue))
    console.log(branchsBlocksListArr);
  }
  
  return (
    <div className='branchs_abiturients_page'>
      <div className="branchs_abiturients_cards_container container">
        <h2>Bloklar</h2>
        <div className="branchs_abiturients_cards">
          {
            branchsBlocksListArr?.map((data, i) => {
              return <BranchsAbiturientsCard onClick={()=>handleBranchAbiturientCard(data.id)} key={i} data={data} />
            })
          }
        </div>

      </div>
      <div className="branchs_abiturients_cards_container container">
        <h2>Siniflər</h2>
        <div className="branchs_abiturients_cards">
          {
            branchsClassessListArr?.map((data, i) => {
              return <BranchsAbiturientsCard onClick={()=>handleBranchClassesCard(data.id)} key={i} data={data} />
            })
          }
        </div>

      </div>
      <div className="branchs_abiturients_cards_container container">
        <h2>Fənnlər</h2>
        <div className="branchs_abiturients_cards">
          {
            branchsSubjectsListArr?.map((data, i) => {
              return <BranchsAbiturientsCard onClick={()=>handleBranchSubjectsCard(data.id)} key={i} data={data} />
            })
          }
        </div>

      </div>
      <div className="branchs_abiturients_cards_container container">
        <h2>Qruplar</h2>
        <div className="branchs_abiturients_cards">
          {
            branchsGroupsListArr?.map((data, i) => {
              return <BranchsAbiturientsCard onClick={()=>handleBranchGroupsCard(data.id)} key={i} data={data} />
            })
          }
        </div>

      </div>
      <div onClick={handleAllAbiturient} className="branchs_abiturients_cards_container container all_abiturient">
        <h2>Bütün abiturientlər</h2>
        

      </div>
      
    </div>
  )
}

export default BranchsAbiturientsPage