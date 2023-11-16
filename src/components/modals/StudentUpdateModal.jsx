import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { modalCloseFunc, modalOverlayFunc, setRefreshed, studentUpdateClassFunc, studentUpdateDimPointFunc, studentUpdateGroupFunc, studentUpdateLanguageFunc, studentUpdateNameFunc, studentUpdatePaymentDateFunc, studentUpdatePaymentMoneyFunc, studentUpdateSeasonSelectValueFunc, studentUpdateSectorValueFunc, studentUpdateSpecialtyFunc, studentUpdateStatusValueFunc, studentUpdateSurnameFunc, studentUpdateTelFirstFunc, studentUpdateTelSecondFunc, studentUpdateWpFunc } from '../../redux/MainReducer'
import { getBlockList, getBranchsTeachersList, getCategoryList, getGroupsList, getLanguageList, getSubjectList, getclassesList } from '../../actions/MainAction'
import Multiselect from 'multiselect-react-dropdown'
import axios from 'axios'
import Swal from 'sweetalert2'
import { baseUrl } from '../../MAIN_API'

const StudentUpdateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { studentObj, studentUpdateName, studentUpdateSurname, studentUpdateTelFirst, studentUpdateTelSecond, studentUpdateWp,
        studentUpdateStatusValue,
        studentUpdateDimPoint,
        studentUpdateSectorValue,
        studentUpdateSpecialty,
        studentUpdatePaymentDate,
        studentUpdatePaymentMoney,
        studentUpdateSeasonSelectValue,
        studentUpdateClass,
        studentUpdateGroup,
        studentUpdateLanguage,
        branchsSeasonsListArr,
        classesListArr,
        groupsListArr,
        languageListArr,
        categoryListArr,
        branchsTeachersListArr,
        blockListArr,
        subjectListArr,
        studentUpdateCategories,
        studentUpdateTeachers,
        studentUpdateBlocks,
        studentUpdateSubjects,
        refreshed,
        seasonStudentUpdateId


    } = useSelector(state => state.Data)

    console.log(studentObj);
    console.log(studentUpdateClass);

    console.log(categoryListArr);
    console.log(studentUpdateSeasonSelectValue);
    console.log(seasonStudentUpdateId);
    useEffect(() => {
        dispatch(getclassesList())
        dispatch(getGroupsList())
        dispatch(getLanguageList())
        dispatch(getCategoryList())
        dispatch(getBranchsTeachersList(localStorage.getItem('selectedSeason')))
        dispatch(getBlockList())
        dispatch(getSubjectList())
    }, [dispatch])

    const [studentUpdateCategoriesValue, setStudentUpdateCategoriesValue] = useState(studentUpdateCategories.map(data => {
        return data.id
    }))

    const [studentUpdateTeachersValue, setStudentUpdateTeachersValue] = useState(studentUpdateTeachers.map(data => {
        return data.id
    }))

    const [studentUpdateBlocksValue, setStudentUpdateBlocksValue] = useState(studentUpdateBlocks.map(data => {
        return data.id
    }))

    const [studentUpdateSubjectsValue, setStudentUpdateSubjectsValue] = useState(studentUpdateSubjects.map(data => {
        return data.id
    }))

    console.log(studentUpdateCategoriesValue);
    console.log(studentUpdateTeachersValue);
    console.log(studentUpdateBlocksValue);
    console.log(studentUpdateSubjectsValue);
    const studentCreateSelectFunc = (selectedList, selectedItem) => {
        console.log(selectedList);
        console.log(selectedItem.id);
        setStudentUpdateCategoriesValue((x) => {
            const updatedSelectedOptions = [...x, selectedItem.id];
            return updatedSelectedOptions;
        });
    }
    const selectCategoryRemove = (selectedList, removedItem) => {
        console.log(selectedList);
        setStudentUpdateCategoriesValue((x) => {
            const updatedSelectedOptions = x.filter(
                (item) => item !== removedItem.id
            );
            return updatedSelectedOptions;
        });
    };

    const studentTeacherUpdateSelectFunc = (selectedList, selectedItem) => {
        console.log(selectedList);
        console.log(selectedItem.id);
        setStudentUpdateTeachersValue((x) => {
            const updatedSelectedOptions = [...x, selectedItem.id];
            return updatedSelectedOptions;
        });
    }
    const selectTeacherRemove = (selectedList, removedItem) => {
        console.log(selectedList);
        setStudentUpdateTeachersValue((x) => {
            const updatedSelectedOptions = x.filter(
                (item) => item !== removedItem.id
            );
            return updatedSelectedOptions;
        });
    };


    const studentBlocksUpdateSelectFunc = (selectedList, selectedItem) => {
        console.log(selectedList);
        console.log(selectedItem.id);
        setStudentUpdateBlocksValue((x) => {
            const updatedSelectedOptions = [...x, selectedItem.id];
            return updatedSelectedOptions;
        });
    }
    const selectBlocksRemove = (selectedList, removedItem) => {
        console.log(selectedList);
        setStudentUpdateBlocksValue((x) => {
            const updatedSelectedOptions = x.filter(
                (item) => item !== removedItem.id
            );
            return updatedSelectedOptions;
        });
    };

    const studentSubjectsUpdateSelectFunc = (selectedList, selectedItem) => {
        console.log(selectedList);
        console.log(selectedItem.id);
        setStudentUpdateSubjectsValue((x) => {
            const updatedSelectedOptions = [...x, selectedItem.id];
            return updatedSelectedOptions;
        });
    }
    const selectSubjectsRemove = (selectedList, removedItem) => {
        console.log(selectedList);
        setStudentUpdateSubjectsValue((x) => {
            const updatedSelectedOptions = x.filter(
                (item) => item !== removedItem.id
            );
            return updatedSelectedOptions;
        });
    };
    const studentUpdate = (e, id) => {
        e.preventDefault()

        console.log(e, id);


        const data = {
            first_name: studentUpdateName,
            last_name: studentUpdateSurname,
            phone_number1: studentUpdateTelFirst,
            phone_number2: studentUpdateTelSecond,
            wp_number: studentUpdateWp,
            status: studentUpdateStatusValue,
            dim_point: +studentUpdateDimPoint,
            sector: studentUpdateSectorValue,
            specialty: studentUpdateSpecialty,
            payment_date: studentUpdatePaymentDate,
            payment_amount: +studentUpdatePaymentMoney,
            season: studentUpdateSeasonSelectValue,
            abiturient_class: studentUpdateClass,
            group: studentUpdateGroup,
            language: studentUpdateLanguage,
            categories: studentUpdateCategoriesValue,
            teachers: studentUpdateTeachersValue,
            blocks: studentUpdateBlocksValue,
            subjects: studentUpdateSubjectsValue
        }
        console.log( data);

        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "PUT",
            url: `${baseUrl}service/student-retrieve-update-delete/${id}/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 200) {

                Swal.fire({
                    title: "Tələbə məlumatları dəyişdirildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(function () {
                    navigate(`/branchs-category/${localStorage.getItem('branchId')}`)
                    if (!refreshed) {
                        dispatch(setRefreshed())
                        window.location.reload();
                    }



                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate(`/branchs-category/${localStorage.getItem('branchId')}`)
                if (!refreshed) {
                    dispatch(setRefreshed())
                    window.location.reload();
                }
            })
        })



    }

    return (
        <div className="modal_container">
            <div onClick={() => dispatch(modalOverlayFunc())} className='overlay'></div>
            <div className="branch_create_modal_card">
                <button onClick={() => dispatch(modalCloseFunc())} className='modal_close_btn'>Close</button>
                <form onSubmit={(e) => studentUpdate(e, studentObj.id)}>
                    <input value={studentUpdateName} onChange={(e) => dispatch(studentUpdateNameFunc(e.target.value))} type="text" placeholder='Enter student name' />
                    <input value={studentUpdateSurname} onChange={(e) => dispatch(studentUpdateSurnameFunc(e.target.value))} type="text" placeholder='Enter student surname' />
                    <input value={studentUpdateTelFirst} onChange={(e) => dispatch(studentUpdateTelFirstFunc(e.target.value))} type="text" placeholder='Enter student tel number' />
                    <input value={studentUpdateTelSecond} onChange={(e) => dispatch(studentUpdateTelSecondFunc(e.target.value))} type="text" placeholder='Enter student tel number' />
                    <input value={studentUpdateWp} onChange={(e) => dispatch(studentUpdateWpFunc(e.target.value))} type="text" placeholder='Enter student wp number' />
                    <select onChange={(e) => dispatch(studentUpdateStatusValueFunc(e.target.value))} value={studentUpdateStatusValue}>
                        <option value="DE">Davam edir</option>
                        <option value="D">Dondurulub</option>
                        <option value="B">Bitirilib</option>
                    </select>
                    <input value={studentUpdateDimPoint} onChange={(e) => dispatch(studentUpdateDimPointFunc(e.target.value))} type="number" placeholder='Enter DIM point' />
                    <select onChange={(e) => dispatch(studentUpdateSectorValueFunc(e.target.value))} value={studentUpdateSectorValue}>
                        <option value="AZ">Azərbaycan dili</option>
                        <option value="RU">Rus dili</option>
                    </select>
                    <input value={studentUpdateSpecialty} onChange={(e) => dispatch(studentUpdateSpecialtyFunc(e.target.value))} type="text" placeholder='Enter student specialty' />
                    <input value={studentUpdatePaymentDate} onChange={(e) => dispatch(studentUpdatePaymentDateFunc(e.target.value))} type="date" />
                    <input value={studentUpdatePaymentMoney} onChange={(e) => dispatch(studentUpdatePaymentMoneyFunc(e.target.value))} type="number" placeholder='Enter payment money' />
                    <select onChange={(e) => dispatch(studentUpdateSeasonSelectValueFunc(e.target.value))} value={studentUpdateSeasonSelectValue}>
                        <option value="" >Sezon seçin</option>
                        {
                            branchsSeasonsListArr?.map((data, i) => {
                                return <option key={i} value={data.id}>{data.name}</option>
                            })
                        }

                    </select>
                    <select value={studentUpdateClass} onChange={(e) => dispatch(studentUpdateClassFunc(e.target.value))}>
                        
                        
                        
                        
                         <option value="" >Sinif seçin</option>
                        
                        

                        {
                            classesListArr?.map((data, i) => {
                                return <option key={i} value={data.id}>{data.name}</option>
                            })
                        }
                    </select>
                    <select value={studentUpdateGroup} onChange={(e) => dispatch(studentUpdateGroupFunc(e.target.value))}>
                        <option value="" >Qrup seçin</option>

                        {
                            groupsListArr?.map((data, i) => {
                                return <option key={i} value={data.id}>{data.name}</option>
                            })
                        }
                    </select>
                    <select value={studentUpdateLanguage} onChange={(e) => dispatch(studentUpdateLanguageFunc(e.target.value))}>
                        <option value="" >Xarici dil seçin</option>

                        {
                            languageListArr?.map((data, i) => {
                                return <option key={i} value={data.id}>{data.name}</option>
                            })
                        }
                    </select>


                    <Multiselect
                        isObject={true}
                        onRemove={selectCategoryRemove}
                        onSelect={studentCreateSelectFunc}
                        options={categoryListArr}
                        className='multi_select'
                        placeholder='Enter categories'
                        selectedValues={studentUpdateCategories}
                        displayValue='name'

                    />

                    <Multiselect
                        isObject={true}
                        onRemove={selectTeacherRemove}
                        onSelect={studentTeacherUpdateSelectFunc}
                        options={branchsTeachersListArr.map(teacher => ({ ...teacher, displayValue: `${teacher.first_name} ${teacher.last_name}` }))}
                        className='multi_select'
                        placeholder='Enter teachers'
                        selectedValues={studentUpdateTeachers.map(teacher => ({ ...teacher, displayValue: `${teacher.first_name} ${teacher.last_name}` }))}
                        displayValue='displayValue'

                    />

                    <Multiselect
                        isObject={true}
                        onRemove={selectBlocksRemove}
                        onSelect={studentBlocksUpdateSelectFunc}
                        options={blockListArr}
                        className='multi_select'
                        placeholder='Enter blocks'
                        selectedValues={studentUpdateBlocks}
                        displayValue='name'

                    />

                    <Multiselect
                        isObject={true}
                        onRemove={selectSubjectsRemove}
                        onSelect={studentSubjectsUpdateSelectFunc}
                        options={subjectListArr}
                        className='multi_select'
                        placeholder='Enter subjects'
                        selectedValues={studentUpdateSubjects}
                        displayValue='name'

                    />



                    <div className="branchs_create modal_save_btn_container">
                        <button>Dəyiş</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default StudentUpdateModal