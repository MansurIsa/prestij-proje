import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blockCreateModalFunc, blockUpdateModalContainerFunc, categoryCreateModalFunc, categoryUpdateModalContainerFunc, classCreateModalFunc, classUpdateModalContainerFunc, groupCreateModalFunc, groupUpdateModalContainerFunc, languageCreateModalFunc, languageUpdateModalContainerFunc, studentCreateModalFunc, studentUpdateModalContainerFunc, subjectCreateModalFunc, subjectUpdateModalContainerFunc, teacherCreateModalFunc, teacherUpdateModalContainerFunc } from '../redux/MainReducer'
import CategoryCreateModal from './modals/CategoryCreateModal'
import CategoryUpdateModalContainer from './modals/CategoryUpdateModalContainer'
import CategoryUpdateModal from './modals/CategoryUpdateModal'
import StudentCreateModal from './modals/StudentCreateModal'
import ClassesCreateModal from './modals/ClassesCreateModal'
import ClassUpdateModalContainer from './modals/ClassUpdateModalContainer'
import ClassUpdateModal from './modals/ClassUpdateModal'
import GroupCreateModal from './modals/GroupCreateModal'
import GroupUpdateModalContainer from './modals/GroupUpdateModalContainer'
import GroupsUpdateModal from './modals/GroupsUpdateModal'
import LanguageCreateModal from './modals/LanguageCreateModal'
import LanguageUpdateModalContainer from './modals/LanguageUpdateModalContainer'
import LanguageUpdateModal from './modals/LanguageUpdateModal'
import BlockCreateModal from './modals/BlockCreateModal'
import BlockUpdateModalContainer from './modals/BlockUpdateModalContainer'
import BlockUpdateModal from './modals/BlockUpdateModal'
import SubjectCreateModal from './modals/SubjectCreateModal'
import SubjectUpdateModalContainer from './modals/SubjectUpdateModalContainer'
import SubjectUpdateModal from './modals/SubjectUpdateModal'
import StudentUpdateModalContainer from './modals/StudentUpdateModalContainer'
import StudentUpdateModal from './modals/StudentUpdateModal'
import TeacherCreateModal from './modals/TeacherCreateModal'
import TeacherUpdateModalContainer from './modals/TeacherUpdateModalContainer'
import TeacherUpdateModal from './modals/TeacherUpdateModal'
import StudentPaymentCreateModalContainer from './modals/StudentPaymentCreateModalContainer'
import TeacherPaymentCreateModalContainer from './modals/TeacherPaymentCreateModalContainer'

const BranchsCategoryStudentCreate = () => {
    const dispatch = useDispatch()
    const { categoryCreateModal,
        categoryUpdateModalContainer,
        categoryUpdateModal,
        studentCreateModal,
        classCreateModal,
        classUpdateModalContainer,
        classUpdateModal,
        groupCreateModal,
        groupUpdateModalContainer,
        groupsUpdateModal,
        languageCreateModal,
        languageUpdateModalContainer,
        languageUpdateModal,
        blockCreateModal,
        blockUpdateModalContainer,
        blockUpdateModal,
        subjectCreateModal,
        subjectUpdateModalContainer,
        subjectUpdateModal,
        studentUpdateModalContainer,
        studentUpdateModal,
        teacherCreateModal,
        teacherUpdateModalContainer,
        teacherUpdateModal,
        studentPaymentCreateModalContainer,
        teacherPaymentCreateModalContainer,
        branchsSeasonsListArr } = useSelector(state => state.Data)

console.log(branchsSeasonsListArr);


    return (
        <div className="branchs_category_student_create">
            <div className='season_select_container'>

                <button onClick={() => dispatch(categoryCreateModalFunc())}>Kateqoriya yarat</button>
                <button onClick={() => dispatch(categoryUpdateModalContainerFunc())}>Kateqoriya dəyiş</button>


            </div>
            <div className='season_select_container'>

                <button onClick={() => dispatch(classCreateModalFunc())}>Sinif yarat</button>
                <button onClick={() => dispatch(classUpdateModalContainerFunc())}>Sinif dəyiş</button>

            </div>
            <div className='season_select_container'>

                <button onClick={() => dispatch(groupCreateModalFunc())}>Qrup yarat</button>
                <button onClick={() => dispatch(groupUpdateModalContainerFunc())}>Qrup dəyiş</button>

            </div>
            <div className='season_select_container'>

                <button onClick={() => dispatch(languageCreateModalFunc())}>Xarici dil yarat</button>
                <button onClick={() => dispatch(languageUpdateModalContainerFunc())}>Xarici dil dəyiş</button>

            </div>
            <div className='season_select_container'>

                <button onClick={() => dispatch(blockCreateModalFunc())}>Blok yarat</button>
                <button onClick={() => dispatch(blockUpdateModalContainerFunc())}>Blok dəyiş</button>

            </div>

            <div className='season_select_container'>

                <button onClick={() => dispatch(subjectCreateModalFunc())}>Fənn yarat</button>
                <button onClick={() => dispatch(subjectUpdateModalContainerFunc())}>Fənn dəyiş</button>

            </div>
            <div className='season_select_container'>

                <button onClick={() => dispatch(studentCreateModalFunc())}>Tələbə yarat</button>
                <button onClick={() => dispatch(studentUpdateModalContainerFunc())}>Tələbə dəyiş</button>

            </div>

            <div className='season_select_container'>

                <button onClick={() => dispatch(teacherCreateModalFunc())}>Müəllim yarat</button>
                <button onClick={() => dispatch(teacherUpdateModalContainerFunc())}>Müəllim dəyiş</button>

            </div>


            {categoryCreateModal && <CategoryCreateModal />}
            {categoryUpdateModalContainer && <CategoryUpdateModalContainer />}
            {categoryUpdateModal && <CategoryUpdateModal />}
            {studentCreateModal && <StudentCreateModal />}
            {classCreateModal && <ClassesCreateModal />}
            {classUpdateModalContainer && <ClassUpdateModalContainer />}
            {classUpdateModal && <ClassUpdateModal />}
            {groupCreateModal && <GroupCreateModal />}
            {groupUpdateModalContainer && <GroupUpdateModalContainer />}
            {groupsUpdateModal && <GroupsUpdateModal />}
            {languageCreateModal && <LanguageCreateModal />}
            {languageUpdateModalContainer && <LanguageUpdateModalContainer />}
            {languageUpdateModal && <LanguageUpdateModal />}
            {blockCreateModal && <BlockCreateModal />}
            {blockUpdateModalContainer && <BlockUpdateModalContainer />}
            {blockUpdateModal && <BlockUpdateModal/>}
            {subjectCreateModal && <SubjectCreateModal/>}
            {subjectUpdateModalContainer && <SubjectUpdateModalContainer/>}
            {subjectUpdateModal && <SubjectUpdateModal/>}
            {studentUpdateModalContainer && <StudentUpdateModalContainer/>}
            {studentUpdateModal && <StudentUpdateModal/>}
            {teacherCreateModal && <TeacherCreateModal/>}
            {teacherUpdateModalContainer && <TeacherUpdateModalContainer/>}
            {teacherUpdateModal && <TeacherUpdateModal/>}
            {studentPaymentCreateModalContainer && <StudentPaymentCreateModalContainer/>}
            {teacherPaymentCreateModalContainer && <TeacherPaymentCreateModalContainer/>}
            
        </div>

    )
}

export default BranchsCategoryStudentCreate