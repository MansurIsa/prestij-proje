import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { modalCloseFunc, modalOverlayFunc, setRefreshed, studentCreateClassFunc, studentCreateDimPointFunc, studentCreateGroupFunc, studentCreateLanguageFunc, studentCreateNameFunc, studentCreatePaymentDateFunc, studentCreatePaymentMoneyFunc, studentCreateSeasonSelectValueFunc, studentCreateSectorValueFunc, studentCreateSpecialtyFunc, studentCreateStatusValueFunc, studentCreateSurnameFunc, studentCreateTelFirstFunc, studentCreateTelSecondFunc, studentCreateWpFunc } from '../../redux/MainReducer'
import { getBlockList, getBranchsTeachersList, getCategoryList, getGroupsList, getLanguageList, getSubjectList, getclassesList } from '../../actions/MainAction'
import Multiselect from 'multiselect-react-dropdown'
import Swal from 'sweetalert2'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'



const StudentCreateModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getclassesList())
        dispatch(getGroupsList())
        dispatch(getLanguageList())
        dispatch(getCategoryList())
        dispatch(getBranchsTeachersList(localStorage.getItem('selectedSeason')))
        dispatch(getBlockList())
        dispatch(getSubjectList())
    }, [dispatch])
    const { studentCreateName, studentCreateSurname, studentCreateTelFirst, studentCreateTelSecond, 
        studentCreateWp, studentCreateStatusValue, studentCreateDimPoint, studentCreateSectorValue, 
        studentCreateSpecialty,studentCreatePaymentDate, studentCreatePaymentMoney, branchsSeasonsListArr, 
        studentCreateSeasonSelectValue, studentCreateClass, classesListArr, studentCreateGroup, groupsListArr
        , languageListArr, studentCreateLanguage, categoryListArr, branchsTeachersListArr, 
        blockListArr, subjectListArr, refreshed } = useSelector(state => state.Data)

    console.log(branchsTeachersListArr);

    const [selectValue, setSelectValue] = useState([])
    const [blocksSelectValue, setBlocksSelectValue] = useState([])
    const [teachersSelectValue, setTeachersSelectValue] = useState([])
    const [categoriesSelectValue, setCategoriesSelectValue] = useState([])




    const studentCreateSelectFunc = (selectedList, selectedItem) => {
        console.log(selectedList);
        console.log(selectedItem.id);
        setCategoriesSelectValue((x) => {
            const updatedSelectedOptions = [...x, selectedItem.id];
            return updatedSelectedOptions;
        });
    }
    const selectCategoryRemove = (selectedList, removedItem) => {
        setCategoriesSelectValue((x) => {
            const updatedSelectedOptions = x.filter(
                (item) => item !== removedItem.id
            );
            return updatedSelectedOptions;
        });
    };
    

    console.log(categoriesSelectValue);

    console.log(blockListArr);


    const studentCreateTeacherSelectFunc = (selectedList, selectedItem) => {
        console.log(selectedList);
        console.log(selectedItem.id);
        setTeachersSelectValue((x) => {
            const updatedSelectedOptions = [...x, selectedItem.id];
            return updatedSelectedOptions;
        });
    }
    const selectTeacherRemove = (selectedList, removedItem) => {
        setTeachersSelectValue((x) => {
            const updatedSelectedOptions = x.filter(
                (item) => item !== removedItem.id
            );
            return updatedSelectedOptions;
        });
    };


    console.log(teachersSelectValue);


    const studentCreateBlockSelectFunc = (selectedList, selectedItem) => {
        console.log(selectedList);
        console.log(selectedItem.id);
        setBlocksSelectValue((x) => {
            const updatedSelectedOptions = [...x, selectedItem.id];
            return updatedSelectedOptions;
        });
    }
    const selectBlocksRemove = (selectedList, removedItem) => {
        setBlocksSelectValue((x) => {
            const updatedSelectedOptions = x.filter(
                (item) => item !== removedItem.id
            );
            return updatedSelectedOptions;
        });
    };

    console.log(blocksSelectValue);


    const studentCreateSubjectSelectFunc = (selectedList, selectedItem) => {
        console.log(selectedList);
        console.log(selectedItem.id);
        setSelectValue((x) => {
            const updatedSelectedOptions = [...x, selectedItem.id];
            return updatedSelectedOptions;
        });
    }
    const selectSubjectRemove = (selectedList, removedItem) => {
        setSelectValue((x) => {
            const updatedSelectedOptions = x.filter(
                (item) => item !== removedItem.id
            );
            return updatedSelectedOptions;
        });
    };

    console.log(selectValue);


    const studentCreate = (e) => {
        e.preventDefault()
        const data = {
            first_name: studentCreateName,
            last_name: studentCreateSurname,
            phone_number1: studentCreateTelFirst,
            phone_number2: studentCreateTelSecond,
            wp_number: studentCreateWp,
            status: studentCreateStatusValue,
            dim_point: studentCreateDimPoint,
            sector: studentCreateSectorValue,
            specialty: studentCreateSpecialty,
            payment_date: studentCreatePaymentDate,
            payment_amount: studentCreatePaymentMoney,
            season: studentCreateSeasonSelectValue,
            abiturient_class: studentCreateClass,
            group: studentCreateGroup,
            language: studentCreateLanguage,
            categories: categoriesSelectValue,
            teachers: teachersSelectValue,
            blocks: blocksSelectValue,
            subjects: selectValue
        }
        console.log(data);



        axios({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            method: "POST",
            url: `${baseUrl}service/student-create/`,
            data
        }).then(resp => {
            console.log(resp);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Tələbə yaradıldı",
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
                <form onSubmit={studentCreate}>
                    <input value={studentCreateName} onChange={(e) => dispatch(studentCreateNameFunc(e.target.value))} type="text" placeholder='Enter student name' />
                    <input value={studentCreateSurname} onChange={(e) => dispatch(studentCreateSurnameFunc(e.target.value))} type="text" placeholder='Enter student surname' />
                    <input value={studentCreateTelFirst} onChange={(e) => dispatch(studentCreateTelFirstFunc(e.target.value))} type="text" placeholder='Enter student tel number' />
                    <input value={studentCreateTelSecond} onChange={(e) => dispatch(studentCreateTelSecondFunc(e.target.value))} type="text" placeholder='Enter student tel number' />
                    <input value={studentCreateWp} onChange={(e) => dispatch(studentCreateWpFunc(e.target.value))} type="text" placeholder='Enter student wp number' />
                    <select onChange={(e) => dispatch(studentCreateStatusValueFunc(e.target.value))} value={studentCreateStatusValue}>
                        <option value="DE">Davam edir</option>
                        <option value="D">Dondurulub</option>
                        <option value="B">Bitirilib</option>
                    </select>
                    <input value={studentCreateDimPoint} onChange={(e) => dispatch(studentCreateDimPointFunc(e.target.value))} type="number" placeholder='Enter DIM point' />
                    <select onChange={(e) => dispatch(studentCreateSectorValueFunc(e.target.value))} value={studentCreateSectorValue}>
                        <option value="AZ">Azərbaycan dili</option>
                        <option value="RU">Rus dili</option>
                    </select>
                    <input value={studentCreateSpecialty} onChange={(e) => dispatch(studentCreateSpecialtyFunc(e.target.value))} type="text" placeholder='Enter student specialty' />
                    <input value={studentCreatePaymentDate} onChange={(e) => dispatch(studentCreatePaymentDateFunc(e.target.value))} type="date" />
                    <input value={studentCreatePaymentMoney} onChange={(e) => dispatch(studentCreatePaymentMoneyFunc(e.target.value))} type="number" placeholder='Enter payment money' />
                    <select onChange={(e) => dispatch(studentCreateSeasonSelectValueFunc(e.target.value))} value={studentCreateSeasonSelectValue}>
                        <option value="" disabled>Sezon seçin</option>
                        {
                            branchsSeasonsListArr?.map((data, i) => {
                                return <option key={data.id} value={data.id}>{data.name}</option>
                            })
                        }

                    </select>
                    <select value={studentCreateClass} onChange={(e) => dispatch(studentCreateClassFunc(e.target.value))}>
                        <option value="" disabled>Sinif seçin</option>

                        {
                            classesListArr?.map((data, i) => {
                                return <option key={i} value={data.id}>{data.name}</option>
                            })
                        }
                    </select>
                    <select value={studentCreateGroup} onChange={(e) => dispatch(studentCreateGroupFunc(e.target.value))}>
                        <option value="" disabled>Qrup seçin</option>

                        {
                            groupsListArr?.map((data, i) => {
                                return <option key={i} value={data.id}>{data.name}</option>
                            })
                        }
                    </select>
                    <select value={studentCreateLanguage} onChange={(e) => dispatch(studentCreateLanguageFunc(e.target.value))}>
                        <option value="" disabled>Xarici dil seçin</option>

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
                        displayValue="name"
                        placeholder='Enter categories'
                    />

                    <Multiselect
                        isObject={true}
                        onRemove={selectTeacherRemove}
                        onSelect={studentCreateTeacherSelectFunc}
                        options={branchsTeachersListArr.map(teacher => ({ ...teacher, displayValue: `${teacher.first_name} ${teacher.last_name}` }))}
                        className='multi_select'
                        placeholder='Enter teachers'
                        displayValue="displayValue"
                    />
                    <Multiselect
                        isObject={true}
                        onRemove={selectBlocksRemove}
                        onSelect={studentCreateBlockSelectFunc}
                        options={blockListArr}
                        displayValue='name'
                        className='multi_select'
                        placeholder='Enter blocks'
                    />
                    
                    <Multiselect
                        isObject={true}
                        onRemove={selectSubjectRemove}
                        onSelect={studentCreateSubjectSelectFunc}
                        options={subjectListArr}
                        displayValue='name'
                        className='multi_select'
                        placeholder='Enter subjects'


                    />


                    <div className="branchs_create modal_save_btn_container">
                        <button>Yarat</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default StudentCreateModal