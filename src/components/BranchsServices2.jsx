import React, { useEffect, useState } from 'react'
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
    // const handleAbiturientCard = () => {
    //     navigate(`/branchs-abiturient-accounting`)

    // }
    // const handleMasterCard = () => {
    //     navigate('/branchs-master-accounting')
    // }
    // const handleMiqCard = () => {
    //     navigate('/branchs-miq-accounting')
    // }
    // const handleCivilCard = () => {
    //     navigate('/branchs-civil-accounting')
    // }
    // const handleForeignLanguageCard = () => {
    //     navigate('/branchs-foreignlanguage-accounting')
    // }
    // const handleComputerCourseCard = () => {
    //     navigate('/branchs-computercourse-accounting')
    // }

    // const handleAccountingCard = () => {
    //     navigate('/branchs-accounting-accounting')
    // }

    // const handleHighSchoolCard = () => {
    //     navigate('/branchs-highschool-accounting')
    // }
    // const handlePreSchoolCard = () => {
    //     navigate('/branchs-preschool-accounting')
    // }
    // const handlePrimarySchoolCard = () => {
    //     navigate('/branchs-primaryschool-accounting')
    // }

    useEffect(() => {
        dispatch(getCategoryList())
    }, [dispatch])
    const { accountingSeasonMonthListArr, categoryListArr } = useSelector(state => state.Data)
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
            {/* <div onClick={handleTeacherCard} className="branchs_services_card">
                <h2>Müəllimlər</h2>
            </div>
            <div onClick={handleStudentCard} className="branchs_services_card">
                <h2>Tələbələr</h2>
            </div>
            <div onClick={handleAbiturientCard} className="branchs_services_card">
                <h2>Abituriyent</h2>
            </div>
            <div onClick={handleMasterCard} className="branchs_services_card">
                <h2>Magistr</h2>
            </div>
            <div onClick={handleMiqCard} className="branchs_services_card">
                <h2>Miq</h2>
            </div>
            <div onClick={handleCivilCard} className="branchs_services_card">
                <h2>Dövlət qulluğu</h2>
            </div>
            <div onClick={handleComputerCourseCard} className="branchs_services_card">
                <h2>Komputer kursları</h2>
            </div>
            <div onClick={handleForeignLanguageCard} className="branchs_services_card">
                <h2>Xarici dil</h2>
            </div>
            <div onClick={handleAccountingCard} className="branchs_services_card">
                <h2>Mühasibatlıqlar</h2>
            </div>
            <div onClick={handleHighSchoolCard} className="branchs_services_card">
                <h2>Liseylərə hazırlıq</h2>
            </div>
            <div onClick={handlePreSchoolCard} className="branchs_services_card">
                <h2>Məktəbəqədər hazırlıq</h2>
            </div>
            <div onClick={handlePrimarySchoolCard} className="branchs_services_card">
                <h2>İbtidai</h2>
            </div> */}

        </div>
    )
}

export default BranchsServices2