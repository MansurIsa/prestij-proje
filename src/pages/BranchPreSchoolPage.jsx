import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchsHandlePreSchoolSubjectList, getBranchsPreSchoolList, getBranchsPreSchoolSubjectList } from '../actions/MainAction';
import BranchsAbiturientsCard from '../components/BranchsAbiturientsCard';
import { useNavigate } from 'react-router-dom';

const BranchPreSchoolPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { seasonSelectValue, branchsPreSchoolSubjectListArr } = useSelector(state => state.Data);
    useEffect(() => {
      dispatch(getBranchsPreSchoolSubjectList())
    }, [dispatch])
  
    console.log(branchsPreSchoolSubjectListArr);

    const handlePreSchoolSubject=(id)=>{
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsHandlePreSchoolSubjectList(id))
    }

    const handleAllPreSchool=(id)=>{
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsPreSchoolList(seasonSelectValue))
    }


    return (
        <div className='branchs_abiturients_page'>
            <div className="branchs_abiturients_cards_container container">
                <h2>Məktəbəqədər hazırlıq fənnləri</h2>
                <div className="branchs_abiturients_cards">
                    {
                        branchsPreSchoolSubjectListArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handlePreSchoolSubject(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>

            <div onClick={handleAllPreSchool} className="branchs_abiturients_cards_container container all_abiturient">
                <h2>Bütün Məktəbəqədər hazırlıq</h2>
               

            </div>
        </div>
    )
}

export default BranchPreSchoolPage