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

    console.log(studentObj.season);

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

    const [removedOptions, setRemovedOptions] = useState([]);
    const [selectValue, setSelectValue] = useState(studentObj?.subjects?.map(x=>{
        return x.name
    }))
    const [blocksSelectValue, setBlocksSelectValue] = useState(studentObj?.blocks?.map(x=>{
        return x.name
    }))
    const [teachersSelectValue, setTeachersSelectValue] = useState([])
    const [categoriesSelectValue, setCategoriesSelectValue] = useState(studentObj?.categories?.map(x=>{
        return x.name
    }))


    const selectRemove = (selectedList, removedItem) => {
        setRemovedOptions([...removedOptions, removedItem]);
    }

    const studentCreateSubjectSelectFunc = (e) => {
        setSelectValue(e)
        console.log(e);
    }
    const studentCreateBlockSelectFunc = (e) => {
        setBlocksSelectValue(e)
    }
    const studentCreateTeacherSelectFunc = (e) => {
        setTeachersSelectValue(e)
    }

    const studentCreateSelectFunc = (e) => {
        setCategoriesSelectValue(e)
    }
    const studentUpdate = (e,id) => {
        e.preventDefault()

        console.log(e,id);

        const data = {
            first_name: studentUpdateName,
            last_name: studentUpdateSurname,
            phone_number1: +studentUpdateTelFirst,
            phone_number2: +studentUpdateTelSecond,
            wp_number: +studentUpdateWp,
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
            categories: categoriesSelectValue,
            teachers: teachersSelectValue,
            blocks: blocksSelectValue,
            subjects: selectValue
        }
        console.log(studentUpdateSubjects,data);

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
                    <select onChange={(e) => dispatch(studentUpdateSeasonSelectValueFunc(e.target.value))} value={studentObj.season}>
                        <option value="" disabled>Sezon seçin</option>
                        {
                            branchsSeasonsListArr?.map((data, i) => {
                                return <option  key={data.id} value={data.name}>{data.name}</option>
                            })
                        }

                    </select>
                    <select value={studentUpdateClass} onChange={(e) => dispatch(studentUpdateClassFunc(e.target.value))}>
                        <option value="" disabled>Sinif seçin</option>

                        {
                            classesListArr?.map((data, i) => {
                                return <option key={i} value={data.id}>{data.name}</option>
                            })
                        }
                    </select>
                    <select value={studentUpdateGroup} onChange={(e) => dispatch(studentUpdateGroupFunc(e.target.value))}>
                        <option value="" disabled>Qrup seçin</option>

                        {
                            groupsListArr?.map((data, i) => {
                                return <option key={i} value={data.id}>{data.name}</option>
                            })
                        }
                    </select>
                    <select value={studentUpdateLanguage} onChange={(e) => dispatch(studentUpdateLanguageFunc(e.target.value))}>
                        <option value="" disabled>Xarici dil seçin</option>

                        {
                            languageListArr?.map((data, i) => {
                                return <option key={i} value={data.id}>{data.name}</option>
                            })
                        }
                    </select>
                    <Multiselect
                        isObject={false}
                        onRemove={selectRemove}
                        onSelect={studentCreateSelectFunc}
                        options={categoryListArr?.map(data => {
                            return data.name
                        })}
                        className='multi_select'
                        placeholder='Enter categories'
                        selectedValues={studentUpdateCategories?.map(data => {
                            return data.name
                        })}
                        
                    />

                    <Multiselect
                        isObject={false}
                        onRemove={selectRemove}
                        onSelect={studentCreateTeacherSelectFunc}
                        options={branchsTeachersListArr?.map(data => {
                            return data.first_name+ ' '+ data.last_name
                        })}
                        className='multi_select'
                        placeholder='Enter teachers'
                        selectedValues={studentUpdateTeachers?.map(data => {
                            return data.first_name+ ' '+data.last_name
                        })}
                    />
                    <Multiselect
                        isObject={false}
                        onRemove={selectRemove}
                        onSelect={studentCreateBlockSelectFunc}
                        options={blockListArr?.map(data => {
                            return data.name
                        })}
                        selectedValues={studentUpdateBlocks?.map(data => {
                            return data.name
                        })}
                        className='multi_select'
                        placeholder='Enter blocks'
                    />

                    <Multiselect
                        isObject={false}
                        onRemove={selectRemove}
                        onSelect={studentCreateSubjectSelectFunc}
                        options={subjectListArr?.map(data => {
                            return data.name
                        })}
                        selectedValues={studentUpdateSubjects?.map(data => {
                            return data.name
                        })}
                        className='multi_select'
                        placeholder='Enter subjects'

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