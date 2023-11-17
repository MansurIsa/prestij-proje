import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCategoryList } from '../actions/MainAction'
import CategoryListCard from './CategoryListCard'


const BranchsServices2 = ({ id }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(id);




    const handleStudentCard = () => {
        navigate('/branchs-students-accounting')
    }
    const handleTeacherCard = () => {
        navigate('/branchs-teachers-accounting')
    }
 

    useEffect(() => {
        dispatch(getCategoryList())
    }, [dispatch])
    const {  categoryListArr } = useSelector(state => state.Data)
    console.log(categoryListArr);
    return (
        <div className='branchs_services container'>

            <div onClick={handleTeacherCard} className="branchs_services_card">
                <h2>Müəllimlər</h2>
            </div>
            <div onClick={handleStudentCard} className="branchs_services_card">
                <h2>Tələbələr</h2>
            </div>
            {
                categoryListArr?.map((data, i) => {
                    return <CategoryListCard key={i} data={data} />
                })
            }
            

        </div>
    )
}

export default BranchsServices2