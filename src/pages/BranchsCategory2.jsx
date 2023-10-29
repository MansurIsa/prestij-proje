import React from 'react'
import { useParams } from 'react-router-dom';
import BranchsSeasons from '../components/BranchsSeasons';
import BranchsServices2 from '../components/BranchsServices2';
import BranchsCategoryStudentCreate from '../components/BranchsCategoryStudentCreate';
import BranchsClasses from '../components/BranchsClasses';

const BranchsCategory2 = () => {
    const { id } = useParams()
    console.log(id);


    return (
        <div className='branchs_category'>
            <BranchsSeasons id={id} />
            <BranchsServices2 id={id} />
            <BranchsCategoryStudentCreate/>
            {/* <BranchsClasses/> */}

            <div className='information_container container'>
                Qeyd: Sezon,Tələbə və Müəllim yaratdıqda müvafiq olaraq sarı rəngli buttonlara toxunmaq lazımdır
            </div>

        </div>
    )
}

export default BranchsCategory2