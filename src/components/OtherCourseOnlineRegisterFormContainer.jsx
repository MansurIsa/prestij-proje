import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { courseOnlineRegAbiturientClassFunc, courseOnlineRegAbiturientDimFunc, courseOnlineRegAbiturientEmailFunc, courseOnlineRegAbiturientFullNameFunc, courseOnlineRegAbiturientGroupFunc, courseOnlineRegAbiturientMobilNumberFunc, courseOnlineRegAbiturientPassportCardFunc, courseOnlineRegAbiturientSchoolFunc, courseOnlineRegAbiturientSelectFunc, courseOnlineRegAccountingEmailFunc, courseOnlineRegAccountingFullNameFunc, courseOnlineRegAccountingMobilNumberFunc, courseOnlineRegAccountingPassportCardFunc, courseOnlineRegCivilEmailFunc, courseOnlineRegCivilFullNameFunc, courseOnlineRegCivilGraduatedUniFunc, courseOnlineRegCivilMobilNumberFunc, courseOnlineRegCivilPassportCardFunc, courseOnlineRegComputerCourseEmailFunc, courseOnlineRegComputerCourseFullNameFunc, courseOnlineRegComputerCourseMobilNumberFunc, courseOnlineRegComputerCoursePassportCardFunc, courseOnlineRegComputerCourseProgramTypeFunc, courseOnlineRegForeignLangEmailFunc, courseOnlineRegForeignLangFullNameFunc, courseOnlineRegForeignLangLanguageFunc, courseOnlineRegForeignLangMobilNumberFunc, courseOnlineRegForeignLangPassportCardFunc, courseOnlineRegHighSchoolClassFunc, courseOnlineRegHighSchoolEmailFunc, courseOnlineRegHighSchoolFullNameFunc, courseOnlineRegHighSchoolMobilNumberFunc, courseOnlineRegHighSchoolPassportCardFunc, courseOnlineRegMasterEmailFunc, courseOnlineRegMasterForeignLangFunc, courseOnlineRegMasterFullNameFunc, courseOnlineRegMasterGraduatedUniFunc, courseOnlineRegMasterMobilNumberFunc, courseOnlineRegMasterPassportCardFunc, courseOnlineRegMasterPointFunc, courseOnlineRegMasterProfessionFunc, courseOnlineRegMiqEmailFunc, courseOnlineRegMiqFullNameFunc, courseOnlineRegMiqGraduatedUniFunc, courseOnlineRegMiqMobilNumberFunc, courseOnlineRegMiqPassportCardFunc, courseOnlineRegMiqProfessionFunc, courseOnlineRegPreSchoolEmailFunc, courseOnlineRegPreSchoolFullNameFunc, courseOnlineRegPreSchoolMobilNumberFunc, courseOnlineRegPreSchoolPassportCardFunc, courseOnlineRegPrimarySchoolClassFunc, courseOnlineRegPrimarySchoolEmailFunc, courseOnlineRegPrimarySchoolFullNameFunc, courseOnlineRegPrimarySchoolMobilNumberFunc, courseOnlineRegPrimarySchoolPassportCardFunc, courseOnlineRegTeacherEmailFunc, courseOnlineRegTeacherFullNameFunc, courseOnlineRegTeacherMobilNumberFunc, courseOnlineRegTeacherPassportCardFunc, courseOnlineRegTeacherProfessionFunc, courseOnlineRegTeacherSelectFunc } from '../redux/MainReducer';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const OtherCourseOnlineRegisterFormContainer = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { courseOnlineRegTeacherFullName, courseOnlineRegTeacherEmail, courseOnlineRegTeacherMobilNumber, courseOnlineRegTeacherPassportCard, courseOnlineRegTeacherProfession, courseOnlineRegTeacherSelect,
        courseOnlineRegAbiturientFullName, courseOnlineRegAbiturientEmail, courseOnlineRegAbiturientMobilNumber, courseOnlineRegAbiturientPassportCard, courseOnlineRegAbiturientSchool, courseOnlineRegAbiturientSelect,
        courseOnlineRegAbiturientGroup, courseOnlineRegAbiturientClass, courseOnlineRegAbiturientDim,
        courseOnlineRegMasterFullName,
        courseOnlineRegMasterEmail,
        courseOnlineRegMasterMobilNumber,
        courseOnlineRegMasterPassportCard,
        courseOnlineRegMasterGraduatedUni,
        courseOnlineRegMasterProfession,
        courseOnlineRegMasterForeignLang,
        courseOnlineRegMasterPoint,

        courseOnlineRegMiqFullName,
        courseOnlineRegMiqEmail,
        courseOnlineRegMiqMobilNumber,
        courseOnlineRegMiqPassportCard,
        courseOnlineRegMiqGraduatedUni,
        courseOnlineRegMiqProfession,

        courseOnlineRegCivilFullName,
        courseOnlineRegCivilEmail,
        courseOnlineRegCivilMobilNumber,
        courseOnlineRegCivilPassportCard,
        courseOnlineRegCivilGraduatedUni,

        courseOnlineRegComputerCourseFullName,
        courseOnlineRegComputerCourseEmail,
        courseOnlineRegComputerCourseMobilNumber,
        courseOnlineRegComputerCoursePassportCard,
        courseOnlineRegComputerCourseProgramType,


        courseOnlineRegForeignLangFullName,
        courseOnlineRegForeignLangEmail,
        courseOnlineRegForeignLangMobilNumber,
        courseOnlineRegForeignLangPassportCard,
        courseOnlineRegForeignLangLanguage,

        courseOnlineRegAccountingFullName,
        courseOnlineRegAccountingEmail,
        courseOnlineRegAccountingMobilNumber,
        courseOnlineRegAccountingPassportCard,

        courseOnlineRegHighSchoolFullName,
        courseOnlineRegHighSchoolEmail,
        courseOnlineRegHighSchoolMobilNumber,
        courseOnlineRegHighSchoolPassportCard,
        courseOnlineRegHighSchoolClass,

        courseOnlineRegPreSchoolFullName,
        courseOnlineRegPreSchoolEmail,
        courseOnlineRegPreSchoolMobilNumber,
        courseOnlineRegPreSchoolPassportCard, 
    
    
        courseOnlineRegPrimarySchoolFullName,
        courseOnlineRegPrimarySchoolEmail,
        courseOnlineRegPrimarySchoolMobilNumber,
        courseOnlineRegPrimarySchoolPassportCard,
        courseOnlineRegPrimarySchoolClass,} = useSelector(state => state.Data);
    console.log(courseOnlineRegTeacherSelect);

    const categoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const courseOnlineRegTeacherSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegTeacherFullName,
            email: courseOnlineRegTeacherEmail,
            mobile_number: courseOnlineRegTeacherMobilNumber,
            identity_card_number: courseOnlineRegTeacherPassportCard,
            speciality: courseOnlineRegTeacherProfession,
            section: courseOnlineRegTeacherSelect,


        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/teacher-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })


    }
    const courseOnlineRegAbiturientSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegAbiturientFullName,
            email: courseOnlineRegAbiturientEmail,
            mobile_number: courseOnlineRegAbiturientMobilNumber,
            identity_card_number: courseOnlineRegAbiturientPassportCard,
            school: courseOnlineRegAbiturientSchool,
            section: courseOnlineRegAbiturientSelect,
            group: courseOnlineRegAbiturientGroup,
            student_class: courseOnlineRegAbiturientClass,
            dim_point: courseOnlineRegAbiturientDim


        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/abiturient-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }

    const courseOnlineRegMasterSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegMasterFullName,
            email: courseOnlineRegMasterEmail,
            mobile_number: courseOnlineRegMasterMobilNumber,
            university: courseOnlineRegMasterGraduatedUni,
            speciality: courseOnlineRegMasterProfession,
            identity_card_number: courseOnlineRegMasterPassportCard,
            dim_point: courseOnlineRegMasterPoint,
            language: courseOnlineRegMasterForeignLang


        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/master-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }


    const courseOnlineRegMiqSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegMiqFullName,
            email: courseOnlineRegMiqEmail,
            mobile_number: courseOnlineRegMiqMobilNumber,
            university: courseOnlineRegMiqGraduatedUni,
            speciality: courseOnlineRegMiqProfession,
            identity_card_number: courseOnlineRegMiqPassportCard,



        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/miq-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }

    const courseOnlineRegCivilSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegCivilFullName,
            email: courseOnlineRegCivilEmail,
            mobile_number: courseOnlineRegCivilMobilNumber,
            university: courseOnlineRegCivilGraduatedUni,
            identity_card_number: courseOnlineRegCivilPassportCard,



        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/civilservice-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }


    const courseOnlineRegComputerCourseSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegComputerCourseFullName,
            email: courseOnlineRegComputerCourseEmail,
            mobile_number: courseOnlineRegComputerCourseMobilNumber,
            program_type: courseOnlineRegComputerCourseProgramType,
            identity_card_number: courseOnlineRegComputerCoursePassportCard,



        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/computercourse-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }


    const courseOnlineRegForeignLangSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegForeignLangFullName,
            email: courseOnlineRegForeignLangEmail,
            mobile_number: courseOnlineRegForeignLangMobilNumber,
            language: courseOnlineRegForeignLangLanguage,
            identity_card_number: courseOnlineRegForeignLangPassportCard,



        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/foreignlanguage-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }


    const courseOnlineRegAccountingSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegAccountingFullName,
            email: courseOnlineRegAccountingEmail,
            mobile_number: courseOnlineRegAccountingMobilNumber,
            identity_card_number: courseOnlineRegAccountingPassportCard,



        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/accounting-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }


    const courseOnlineRegHighSchoolSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegHighSchoolFullName,
            email: courseOnlineRegHighSchoolEmail,
            mobile_number: courseOnlineRegHighSchoolMobilNumber,
            identity_card_number: courseOnlineRegHighSchoolPassportCard,
            student_class: courseOnlineRegHighSchoolClass,



        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/highschool-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }


    const courseOnlineRegPreSchoolSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegPreSchoolFullName,
            email: courseOnlineRegPreSchoolEmail,
            mobile_number: courseOnlineRegPreSchoolMobilNumber,
            identity_card_number: courseOnlineRegPreSchoolPassportCard
        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/preschool-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }


    const courseOnlineRegPrimarySchoolSubmit = (e) => {
        e.preventDefault()
        const data = {

            full_name: courseOnlineRegPrimarySchoolFullName,
            email: courseOnlineRegPrimarySchoolEmail,
            mobile_number: courseOnlineRegPrimarySchoolMobilNumber,
            identity_card_number: courseOnlineRegPrimarySchoolPassportCard,
            student_class: courseOnlineRegPrimarySchoolClass,



        }
        console.log(data);

        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/primaryschool-onlineregister-create/",
            data
        }).then(resp => {
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    // text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    navigate('/course-online-register')
                });
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                navigate('/course-online-register')
            })
        })
    }
    return (
        <div className='other_cv_send_form_container'>

            <div className='branchs_seasons course_online_register_select'>
                <select onChange={categoryChange} value={selectedCategory}>
                    <option value="">Kateqoriya seçin</option>
                    <option value="müəllim">Müəllim</option>
                    <option value="abiturient">Abiturient</option>
                    <option value="magistr">Magistr</option>
                    <option value="miq">Miq</option>
                    <option value="civil">Dövlət qulluğu</option>
                    <option value="computerCourse">Komputer kursu</option>
                    <option value="foreignLang">Xarici dil</option>
                    <option value="accounting">Mühasibatlıq</option>
                    <option value="highSchool">Lisey</option>
                    <option value="preSchool">Məktəbəqədər</option>
                    <option value="primarySchool">İbtidai</option>
                </select>
                <FaChevronDown className='select_down_icon' />
            </div>
            {selectedCategory === 'müəllim' && (
                <form onSubmit={courseOnlineRegTeacherSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegTeacherFullName} onChange={(e) => dispatch(courseOnlineRegTeacherFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegTeacherEmail} onChange={(e) => dispatch(courseOnlineRegTeacherEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegTeacherMobilNumber} onChange={(e) => dispatch(courseOnlineRegTeacherMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegTeacherPassportCard} onChange={(e) => dispatch(courseOnlineRegTeacherPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegTeacherProfession} onChange={(e) => dispatch(courseOnlineRegTeacherProfessionFunc(e.target.value))} placeholder='İxtisas*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card course_online_reg_select">
                                <select value={courseOnlineRegTeacherSelect} onChange={(e) => dispatch(courseOnlineRegTeacherSelectFunc(e.target.value))}>
                                    <option value="">Bölmə seçin</option>
                                    <option value="AZ">Azərbaycan</option>
                                    <option value="RU">Rus</option>
                                </select>
                                <FaChevronDown className='select_down_icon' />
                            </div>
                        </div>

                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'abiturient' && (
                <form onSubmit={courseOnlineRegAbiturientSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAbiturientFullName} onChange={(e) => dispatch(courseOnlineRegAbiturientFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAbiturientEmail} onChange={(e) => dispatch(courseOnlineRegAbiturientEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAbiturientMobilNumber} onChange={(e) => dispatch(courseOnlineRegAbiturientMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAbiturientPassportCard} onChange={(e) => dispatch(courseOnlineRegAbiturientPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAbiturientSchool} onChange={(e) => dispatch(courseOnlineRegAbiturientSchoolFunc(e.target.value))} placeholder='Təhsil aldığı məktəb*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card course_online_reg_select">
                                <select value={courseOnlineRegAbiturientSelect} onChange={(e) => dispatch(courseOnlineRegAbiturientSelectFunc(e.target.value))}>
                                    <option value="">Bölmə seçin</option>
                                    <option value="AZ">Azərbaycan</option>
                                    <option value="RU">Rus</option>
                                </select>
                                <FaChevronDown className='select_down_icon' />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAbiturientGroup} onChange={(e) => dispatch(courseOnlineRegAbiturientGroupFunc(e.target.value))} placeholder='Qrup*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAbiturientClass} onChange={(e) => dispatch(courseOnlineRegAbiturientClassFunc(e.target.value))} placeholder='Sinif*' type="text" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAbiturientDim} onChange={(e) => dispatch(courseOnlineRegAbiturientDimFunc(e.target.value))} placeholder='Dim balı*' type="text" />
                            </div>

                        </div>

                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'magistr' && (
                <form onSubmit={courseOnlineRegMasterSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMasterFullName} onChange={(e) => dispatch(courseOnlineRegMasterFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMasterEmail} onChange={(e) => dispatch(courseOnlineRegMasterEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMasterMobilNumber} onChange={(e) => dispatch(courseOnlineRegMasterMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMasterPassportCard} onChange={(e) => dispatch(courseOnlineRegMasterPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMasterGraduatedUni} onChange={(e) => dispatch(courseOnlineRegMasterGraduatedUniFunc(e.target.value))} placeholder='Bitirdiyiniz Universitet*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMasterForeignLang} onChange={(e) => dispatch(courseOnlineRegMasterForeignLangFunc(e.target.value))} placeholder='Xarici dil*' type="text" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMasterProfession} onChange={(e) => dispatch(courseOnlineRegMasterProfessionFunc(e.target.value))} placeholder='İxtisas*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMasterPoint} onChange={(e) => dispatch(courseOnlineRegMasterPointFunc(e.target.value))} placeholder='Qəbul balı*' type="text" />
                            </div>
                        </div>

                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'miq' && (
                <form onSubmit={courseOnlineRegMiqSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMiqFullName} onChange={(e) => dispatch(courseOnlineRegMiqFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMiqEmail} onChange={(e) => dispatch(courseOnlineRegMiqEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMiqMobilNumber} onChange={(e) => dispatch(courseOnlineRegMiqMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMiqPassportCard} onChange={(e) => dispatch(courseOnlineRegMiqPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMiqGraduatedUni} onChange={(e) => dispatch(courseOnlineRegMiqGraduatedUniFunc(e.target.value))} placeholder='Bitirdiyiniz Universitet*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegMiqProfession} onChange={(e) => dispatch(courseOnlineRegMiqProfessionFunc(e.target.value))} placeholder='İxtisas*' type="text" />
                            </div>
                        </div>


                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'civil' && (
                <form onSubmit={courseOnlineRegCivilSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegCivilFullName} onChange={(e) => dispatch(courseOnlineRegCivilFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegCivilEmail} onChange={(e) => dispatch(courseOnlineRegCivilEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegCivilMobilNumber} onChange={(e) => dispatch(courseOnlineRegCivilMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegCivilPassportCard} onChange={(e) => dispatch(courseOnlineRegCivilPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegCivilGraduatedUni} onChange={(e) => dispatch(courseOnlineRegCivilGraduatedUniFunc(e.target.value))} placeholder='Bitirdiyiniz Universitet*' type="text" />
                            </div>

                        </div>


                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'computerCourse' && (
                <form onSubmit={courseOnlineRegComputerCourseSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegComputerCourseFullName} onChange={(e) => dispatch(courseOnlineRegComputerCourseFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegComputerCourseEmail} onChange={(e) => dispatch(courseOnlineRegComputerCourseEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegComputerCourseMobilNumber} onChange={(e) => dispatch(courseOnlineRegComputerCourseMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegComputerCoursePassportCard} onChange={(e) => dispatch(courseOnlineRegComputerCoursePassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegComputerCourseProgramType} onChange={(e) => dispatch(courseOnlineRegComputerCourseProgramTypeFunc(e.target.value))} placeholder='Bitirdiyiniz Universitet*' type="text" />
                            </div>

                        </div>


                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'foreignLang' && (
                <form onSubmit={courseOnlineRegForeignLangSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegForeignLangFullName} onChange={(e) => dispatch(courseOnlineRegForeignLangFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegForeignLangEmail} onChange={(e) => dispatch(courseOnlineRegForeignLangEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegForeignLangMobilNumber} onChange={(e) => dispatch(courseOnlineRegForeignLangMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegForeignLangPassportCard} onChange={(e) => dispatch(courseOnlineRegForeignLangPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegForeignLangLanguage} onChange={(e) => dispatch(courseOnlineRegForeignLangLanguageFunc(e.target.value))} placeholder='Xarici dil*' type="text" />
                            </div>

                        </div>


                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'accounting' && (
                <form onSubmit={courseOnlineRegAccountingSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAccountingFullName} onChange={(e) => dispatch(courseOnlineRegAccountingFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAccountingEmail} onChange={(e) => dispatch(courseOnlineRegAccountingEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAccountingMobilNumber} onChange={(e) => dispatch(courseOnlineRegAccountingMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegAccountingPassportCard} onChange={(e) => dispatch(courseOnlineRegAccountingPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>



                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'highSchool' && (
                <form onSubmit={courseOnlineRegHighSchoolSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegHighSchoolFullName} onChange={(e) => dispatch(courseOnlineRegHighSchoolFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegHighSchoolEmail} onChange={(e) => dispatch(courseOnlineRegHighSchoolEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegHighSchoolMobilNumber} onChange={(e) => dispatch(courseOnlineRegHighSchoolMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegHighSchoolPassportCard} onChange={(e) => dispatch(courseOnlineRegHighSchoolPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>

                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegHighSchoolClass} onChange={(e) => dispatch(courseOnlineRegHighSchoolClassFunc(e.target.value))} placeholder='Sinif*' type="text" />
                            </div>

                        </div>



                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'preSchool' && (
                <form onSubmit={courseOnlineRegPreSchoolSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegPreSchoolFullName} onChange={(e) => dispatch(courseOnlineRegPreSchoolFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegPreSchoolEmail} onChange={(e) => dispatch(courseOnlineRegPreSchoolEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegPreSchoolMobilNumber} onChange={(e) => dispatch(courseOnlineRegPreSchoolMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegPreSchoolPassportCard} onChange={(e) => dispatch(courseOnlineRegPreSchoolPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>



                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
            {selectedCategory === 'primarySchool' && (
                <form onSubmit={courseOnlineRegPrimarySchoolSubmit}>
                    <div className="other_cv_send_form_card">
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegPrimarySchoolFullName} onChange={(e) => dispatch(courseOnlineRegPrimarySchoolFullNameFunc(e.target.value))} placeholder='Ad, Soyad*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegPrimarySchoolEmail} onChange={(e) => dispatch(courseOnlineRegPrimarySchoolEmailFunc(e.target.value))} placeholder='Email*' type="email" />
                            </div>
                        </div>
                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegPrimarySchoolMobilNumber} onChange={(e) => dispatch(courseOnlineRegPrimarySchoolMobilNumberFunc(e.target.value))} placeholder='Mobil Nömrə*' type="text" />
                            </div>
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegPrimarySchoolPassportCard} onChange={(e) => dispatch(courseOnlineRegPrimarySchoolPassportCardFunc(e.target.value))} placeholder='Şəxsiyyət vəsiqəsinin nömrəsi*' type="text" />
                            </div>
                        </div>

                        <div className="other_cv_send_form_input_container">
                            <div className="other_cv_send_form_input_card">
                                <input required value={courseOnlineRegPrimarySchoolClass} onChange={(e) => dispatch(courseOnlineRegPrimarySchoolClassFunc(e.target.value))} placeholder='Sinif*' type="text" />
                            </div>

                        </div>



                    </div>
                    <button><span>Göndər</span></button>
                </form>
            )}
        </div>
    )
}

export default OtherCourseOnlineRegisterFormContainer