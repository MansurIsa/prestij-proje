import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBranchsComputerCourseAllList, getBranchsComputerCourseList, getBranchsComputerList } from '../actions/MainAction';
import BranchsAbiturientsCard from '../components/BranchsAbiturientsCard';

const BranchsComputerCoursePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { seasonSelectValue, getBranchsComputerCourseArr } = useSelector(state => state.Data);
    useEffect(() => {
        dispatch(getBranchsComputerCourseList())
    }, [dispatch])
    console.log(getBranchsComputerCourseArr);

    const handleComputerCourse=(id)=>{
        dispatch(getBranchsComputerList(id))
        navigate('/branchs-handle-abiturient')
    }
    const handleAllComputer=()=>{
        navigate('/branchs-handle-abiturient')
        dispatch(getBranchsComputerCourseAllList(seasonSelectValue))
    }
    return (
        <div className='branchs_abiturients_page'>
            <div className="branchs_abiturients_cards_container container">
                <h2>Komputer kursları</h2>
                <div className="branchs_abiturients_cards">
                    {
                        getBranchsComputerCourseArr?.map((data, i) => {
                            return <BranchsAbiturientsCard onClick={() => handleComputerCourse(data.id)} key={i} data={data} />
                        })
                    }
                </div>

            </div>
            <div onClick={handleAllComputer} className="branchs_abiturients_cards_container container all_abiturient">
                <h2>Bütün Komputer kursları</h2>
               

            </div>
        </div>
    )
}

export default BranchsComputerCoursePage