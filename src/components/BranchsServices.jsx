import React from 'react'
import { useNavigate } from 'react-router-dom';

const BranchsServices = () => {

    const navigate=useNavigate()
    const handleStudentCard=()=>{
        navigate('/branchs-students')
    }
    const handleTeacherCard=()=>{
        navigate('/branchs-teachers')
    }
    const handleAbiturientCard=()=>{
        navigate('/branchs-abiturient')
    }
    const handleMasterCard=()=>{
        navigate('/branchs-master')
    }
    const handleMiqCard=()=>{
        navigate('/branchs-miq')
    }
    const handleCivilCard=()=>{
        navigate('/branchs-civil')
    }
    const handleForeignLanguageCard=()=>{
        navigate('/branchs-foreignlanguage')
    }
    const handleComputerCourseCard=()=>{
        navigate('/branchs-computercourse')
    }

    const handleAccountingCard=()=>{
        navigate('/branchs-accounting')
    }

    const handleHighSchoolCard=()=>{
        navigate('/branchs-highschool')
    }
    const handlePreSchoolCard=()=>{
        navigate('/branchs-preschool')
    }
    const handlePrimarySchoolCard=()=>{
        navigate('/branchs-primaryschool')
    }

  return (
    <div className='branchs_services container'>
        <div onClick={handleStudentCard} className="branchs_services_card">
            <h2>Tələbələr</h2>
        </div>
        <div onClick={handleTeacherCard} className="branchs_services_card">
            <h2>Müəllimlər</h2>
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
        </div>
        
    </div>
  )
}

export default BranchsServices