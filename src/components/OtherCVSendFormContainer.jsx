import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { achievementsChange, achievementsSecondChange, achievementsThirdChange, addressChange, birthDateChange, companyNameAddressFieldChange, companyNameAddressFieldSecondChange, companyNameAddressFieldThirdChange, dateOfParticipationStartEndChange, dateOfParticipationStartEndSecondChange, dateOfParticipationStartEndThirdChange, emailChange, fullNameFatherChange, homeNumberChange, mobileNumberChange, otherAchievmentsChange, placeOfExecutedChange, placeOfExecutedSecondChange, placeOfExecutedThirdChange, positionMainObligationChange, positionMainObligationSecondChange, positionMainObligationThirdChange, qualificationChange, qualificationDegreeChange, qualificationDegreeSecondChange, qualificationDegreeThirdChange, qualificationSecondChange, qualificationThirdChange, reasonForLeavingChange, reasonForLeavingSecondChange, reasonForLeavingThirdChange, recommendMobileNumberChange, recommendMobileNumberSecondChange, recommendfullNameFatherChange, recommendfullNameFatherSecondChange, relatedToChange, relatedToSecondChange, resultRateAverageChange, resultRateAverageSecondChange, resultRateAverageThirdChange, studiedDateStartEndChange, studiedDateStartEndSecondChange, studiedDateStartEndThirdChange, studiedUniversityChange, studiedUniversitySecondChange, studiedUniversityThirdChange, subjectToTeachChange, vacancyNameChange, workedDateStartEndChange, workedDateStartEndSecondChange, workedDateStartEndThirdChange } from '../redux/MainReducer';
import axios from 'axios';
import Swal from 'sweetalert2';

const OtherCVSendFormContainer = () => {
    const dispatch=useDispatch();
    const {vacancyName, subjectToTeach, fullNameFather, homeNumber, email, mobileNumber,birthDate, address, workedDateStartEnd, companyNameAddressField, positionMainObligation
        ,reasonForLeaving, workedDateStartEndSecond, companyNameAddressFieldSecond, positionMainObligationSecond, reasonForLeavingSecond, workedDateStartEndThird, companyNameAddressFieldThird
        , positionMainObligationThird, reasonForLeavingThird, studiedDateStartEnd, studiedUniversity, qualificationDegree, resultRateAverage, studiedDateStartEndSecond, studiedUniversitySecond
        , qualificationDegreeSecond, resultRateAverageSecond, studiedDateStartEndThird, studiedUniversityThird, qualificationDegreeThird, resultRateAverageThird, dateOfParticipationStartEnd
        , qualification, placeOfExecuted, achievements, dateOfParticipationStartEndSecond, qualificationSecond, placeOfExecutedSecond, achievementsSecond
        , dateOfParticipationStartEndThird, qualificationThird, placeOfExecutedThird, achievementsThird, otherAchievments, recommendfullNameFather, recommendMobileNumber, recommendfullNameFatherSecond
        , relatedTo, recommendMobileNumberSecond, relatedToSecond
    }=useSelector(state=>state.Data)

    const otherCVCreateForm=(e)=>{
        e.preventDefault()
        const data={
                vacancy_name: vacancyName,
                full_name: fullNameFather,
                email: email,
                birthdate: birthDate,
                subject: subjectToTeach,
                home_phone: homeNumber,
                mobile_phone: mobileNumber,
                address: address,
                work_start_end_time1: workedDateStartEnd,
                company_name1: companyNameAddressField,
                duty1: positionMainObligation,
                leaving_reason1: reasonForLeaving,
                work_start_end_time2: workedDateStartEndSecond,
                company_name2: companyNameAddressFieldSecond,
                duty2: positionMainObligationSecond,
                leaving_reason2: reasonForLeavingSecond,
                work_start_end_time3: workedDateStartEndThird,
                company_name3: companyNameAddressFieldThird,
                duty3: positionMainObligationThird,
                leaving_reason3: reasonForLeavingThird,
                ed_start_end_time1: studiedDateStartEnd,
                university1: studiedUniversity,
                speciality1: qualificationDegree,
                result1: resultRateAverage,
                ed_start_end_time2: studiedDateStartEndSecond,
                university2: studiedUniversitySecond,
                speciality2: qualificationDegreeSecond,
                result2: resultRateAverageSecond,
                ed_start_end_time3: studiedDateStartEndThird,
                university3: studiedUniversityThird,
                speciality3: qualificationDegreeThird,
                result3: resultRateAverageThird,
                ce_start_end_time1: dateOfParticipationStartEnd,
                qualification1: qualification,
                place1: placeOfExecuted,
                success1: achievements,
                ce_start_end_time2: dateOfParticipationStartEndSecond,
                qualification2: qualificationSecond,
                place2: placeOfExecutedSecond,
                success2: achievementsSecond,
                ce_start_end_time3: dateOfParticipationStartEndThird,
                qualification3: qualificationThird,
                place3: placeOfExecutedThird,
                success3: achievementsThird,
                other_successes: otherAchievments,
                reference_full_name1: recommendfullNameFather,
                phone_number1: recommendMobileNumber,
                relation1: relatedTo,
                reference_full_name2: recommendfullNameFatherSecond,
                phone_number2: recommendMobileNumberSecond,
                relation2: relatedToSecond
            
        }
        axios({
            method: "POST",
            url: "https://prestijs.pythonanywhere.com/api/prestij/resume-create/",
            data
        }).then(resp=>{
            console.log(resp.data);
            if (resp.status === 201) {

                Swal.fire({
                    title: "Təbriklər!",
                    text: "Mesaj göndərildi",
                    icon: "success",
                    confirmButtonText: "OK",
                    // width: "400px"
                    customClass: "contact_create_modal"
                }).then(function () {
                    // Redirect the user
                    window.location.href = "/cv-gonder";
                });
            }
        }).catch(err=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '',

            }).then(function () {

                window.location.href = "/elaqe";
            })
        })
    }

    return (
        <div className='other_cv_send_form_container'>
            <form onSubmit={otherCVCreateForm}>
                <div className="other_cv_send_form_card">
                    <h3>Şəxsi məlumatlar</h3>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input required value={vacancyName} onChange={(e)=>dispatch(vacancyNameChange(e.target.value))} placeholder='Müraciət etdiyiniz vakansiyanın adı*' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input required value={subjectToTeach} onChange={(e)=>dispatch(subjectToTeachChange(e.target.value))} placeholder='Tədris etmək istədiyiniz fənn*' type="text" />
                        </div>
                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input required value={fullNameFather} onChange={(e)=>dispatch(fullNameFatherChange(e.target.value))} placeholder='Soyad, ad, ata adı*' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input required value={homeNumber} onChange={(e)=>dispatch(homeNumberChange(e.target.value))} placeholder='Ev telefon nömrəsi*' type="text" />
                        </div>
                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input required value={email} onChange={(e)=>dispatch(emailChange(e.target.value))} placeholder='Email*' type="email" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input required value={mobileNumber} onChange={(e)=>dispatch(mobileNumberChange(e.target.value))} placeholder='Mobil nömrə*' type="text" />
                        </div>
                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input required value={birthDate} onChange={(e)=>dispatch(birthDateChange(e.target.value))} placeholder='Doğum tarixi*' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input required value={address} onChange={(e)=>dispatch(addressChange(e.target.value))} placeholder='Ünvan*' type="text" />
                        </div>
                    </div>
                </div>
                <div className="other_cv_send_form_card other_cv_send_form_input_diff_container">
                    <h3>İş təcrübəsi</h3>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={workedDateStartEnd} onChange={(e)=>dispatch(workedDateStartEndChange(e.target.value))} placeholder='İşlədiyi, başlanğıc və son tarixlər (ay/il)' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={companyNameAddressField} onChange={(e)=>dispatch(companyNameAddressFieldChange(e.target.value))} placeholder='Şirkətin adı, ünvanı və fəaliyyət göstərdiyi sahə' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={positionMainObligation} onChange={(e)=>dispatch(positionMainObligationChange(e.target.value))} placeholder='Vəzifə və əsas öhdəliklər' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={reasonForLeaving} onChange={(e)=>dispatch(reasonForLeavingChange(e.target.value))} placeholder='Tərk etmə səbəbi' type="text" />
                        </div>
                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={workedDateStartEndSecond} onChange={(e)=>dispatch(workedDateStartEndSecondChange(e.target.value))}  placeholder='İşlədiyi, başlanğıc və son tarixlər (ay/il)' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={companyNameAddressFieldSecond} onChange={(e)=>dispatch(companyNameAddressFieldSecondChange(e.target.value))} placeholder='Şirkətin adı, ünvanı və fəaliyyət göstərdiyi sahə' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={positionMainObligationSecond} onChange={(e)=>dispatch(positionMainObligationSecondChange(e.target.value))} placeholder='Vəzifə və əsas öhdəliklər' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={reasonForLeavingSecond} onChange={(e)=>dispatch(reasonForLeavingSecondChange(e.target.value))} placeholder='Tərk etmə səbəbi' type="text" />
                        </div>
                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={workedDateStartEndThird} onChange={(e)=>dispatch(workedDateStartEndThirdChange(e.target.value))} placeholder='İşlədiyi, başlanğıc və son tarixlər (ay/il)' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={companyNameAddressFieldThird} onChange={(e)=>dispatch(companyNameAddressFieldThirdChange(e.target.value))} placeholder='Şirkətin adı, ünvanı və fəaliyyət göstərdiyi sahə' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={positionMainObligationThird} onChange={(e)=>dispatch(positionMainObligationThirdChange(e.target.value))} placeholder='Vəzifə və əsas öhdəliklər' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={reasonForLeavingThird} onChange={(e)=>dispatch(reasonForLeavingThirdChange(e.target.value))} placeholder='Tərk etmə səbəbi' type="text" />
                        </div>
                    </div>

                </div>
                <div className="other_cv_send_form_card other_cv_send_form_input_diff_container">
                    <h3>Təhsil</h3>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={studiedDateStartEnd} onChange={(e)=>dispatch(studiedDateStartEndChange(e.target.value))} placeholder='Təhsil aldığı başlanğıc və son tarix (ay/il)' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={studiedUniversity} onChange={(e)=>dispatch(studiedUniversityChange(e.target.value))} placeholder='Universitet' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={qualificationDegree} onChange={(e)=>dispatch(qualificationDegreeChange(e.target.value))}  placeholder='İxtisas və dərəcə' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={resultRateAverage} onChange={(e)=>dispatch(resultRateAverageChange(e.target.value))}  placeholder='Nəticə/Qiymət ortalaması' type="text" />
                        </div>
                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={studiedDateStartEndSecond} onChange={(e)=>dispatch(studiedDateStartEndSecondChange(e.target.value))} placeholder='Təhsil aldığı başlanğıc və son tarix (ay/il)' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input  value={studiedUniversitySecond} onChange={(e)=>dispatch(studiedUniversitySecondChange(e.target.value))} placeholder='Universitet' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={qualificationDegreeSecond} onChange={(e)=>dispatch(qualificationDegreeSecondChange(e.target.value))} placeholder='İxtisas və dərəcə' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={resultRateAverageSecond} onChange={(e)=>dispatch(resultRateAverageSecondChange(e.target.value))} placeholder='Nəticə/Qiymət ortalaması' type="text" />
                        </div>
                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={studiedDateStartEndThird} onChange={(e)=>dispatch(studiedDateStartEndThirdChange(e.target.value))} placeholder='Təhsil aldığı başlanğıc və son tarix (ay/il)' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={studiedUniversityThird} onChange={(e)=>dispatch(studiedUniversityThirdChange(e.target.value))} placeholder='Universitet' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={qualificationDegreeThird} onChange={(e)=>dispatch(qualificationDegreeThirdChange(e.target.value))} placeholder='İxtisas və dərəcə' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={resultRateAverageThird} onChange={(e)=>dispatch(resultRateAverageThirdChange(e.target.value))} placeholder='Nəticə/Qiymət ortalaması' type="text" />
                        </div>
                    </div>

                </div>
                <div className="other_cv_send_form_card other_cv_send_form_input_diff_container">
                    <h3>Sertifikatlar, təlimlər və seminarlar</h3>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={dateOfParticipationStartEnd} onChange={(e)=>dispatch(dateOfParticipationStartEndChange(e.target.value))} placeholder='İştirak tarixi: Başlanğıc və son (ay/il)' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={qualification} onChange={(e)=>dispatch(qualificationChange(e.target.value))} placeholder='Kvalifikasiya' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={placeOfExecuted} onChange={(e)=>dispatch(placeOfExecutedChange(e.target.value))}  placeholder='Keçirildiyi məkan' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={achievements} onChange={(e)=>dispatch(achievementsChange(e.target.value))} placeholder='Əldə etdiyi nailiyyət (sertifikat, dərəcə, nəticə və s. )' type="text" />
                        </div>
                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={dateOfParticipationStartEndSecond} onChange={(e)=>dispatch(dateOfParticipationStartEndSecondChange(e.target.value))} placeholder='İştirak tarixi: Başlanğıc və son (ay/il)' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={qualificationSecond} onChange={(e)=>dispatch(qualificationSecondChange(e.target.value))} placeholder='Kvalifikasiya' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={placeOfExecutedSecond} onChange={(e)=>dispatch(placeOfExecutedSecondChange(e.target.value))} placeholder='Keçirildiyi məkan' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={achievementsSecond} onChange={(e)=>dispatch(achievementsSecondChange(e.target.value))} placeholder='Əldə etdiyi nailiyyət (sertifikat, dərəcə, nəticə və s. )' type="text" />
                        </div>
                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={dateOfParticipationStartEndThird} onChange={(e)=>dispatch(dateOfParticipationStartEndThirdChange(e.target.value))} placeholder='İştirak tarixi: Başlanğıc və son (ay/il)' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={qualificationThird} onChange={(e)=>dispatch(qualificationThirdChange(e.target.value))} placeholder='Kvalifikasiya' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={placeOfExecutedThird} onChange={(e)=>dispatch(placeOfExecutedThirdChange(e.target.value))} placeholder='Keçirildiyi məkan' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={achievementsThird} onChange={(e)=>dispatch(achievementsThirdChange(e.target.value))} placeholder='Əldə etdiyi nailiyyət (sertifikat, dərəcə, nəticə və s. )' type="text" />
                        </div>
                    </div>

                </div>

                <div className="other_cv_send_form_card other_cv_send_form_input_diff_container">
                    <h3>Digər nailiyyətlər</h3>
                    <p>Müraciət etdiyiniz vakansiya ilə bağlı uyğun olan bacarıqlarınızı və digər nailiyyətləriniz bura qeyd edə bilərsiniz. Bundan əlavə qeyd etmək istədiyiniz digər şəxsi bacarıqlarınızı, biliyinizin göstəricilərini bu bölmədə yaza bilərsiniz. Dil biliklərini və kompyuter biliklərinizi qeyd edə bilərsiniz.</p>
                    <div className="other_cv_send_form_input_container">
                        <textarea value={otherAchievments} onChange={(e)=>dispatch(otherAchievmentsChange(e.target.value))} name="" id="" cols="30" rows="10"></textarea>
                    </div>

                </div>
                <div className="other_cv_send_form_card other_cv_send_form_input_diff_container">
                    <h3>Tövsiyə edəcək şəxslər</h3>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={recommendfullNameFather} onChange={(e)=>dispatch(recommendfullNameFatherChange(e.target.value))} placeholder='Soyad, ad, ata adı' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={recommendMobileNumber} onChange={(e)=>dispatch(recommendMobileNumberChange(e.target.value))} placeholder='Mobil nömrə' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={relatedTo} onChange={(e)=>dispatch(relatedToChange(e.target.value))} placeholder='Sizinlə əlaqəsi (qohum, dost, müəllim, müdir və s.)' type="text" />
                        </div>

                    </div>
                    <div className="other_cv_send_form_input_container">
                        <div className="other_cv_send_form_input_card">
                            <input value={recommendfullNameFatherSecond} onChange={(e)=>dispatch(recommendfullNameFatherSecondChange(e.target.value))} placeholder='Soyad, ad, ata adı' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={recommendMobileNumberSecond} onChange={(e)=>dispatch(recommendMobileNumberSecondChange(e.target.value))} placeholder='Mobil nömrə' type="text" />
                        </div>
                        <div className="other_cv_send_form_input_card">
                            <input value={relatedToSecond} onChange={(e)=>dispatch(relatedToSecondChange(e.target.value))} placeholder='Sizinlə əlaqəsi (qohum, dost, müəllim, müdir və s.)' type="text" />
                        </div>

                    </div>

                </div>

                <button><span>Göndər</span></button>
            </form>
        </div>
    )
}

export default OtherCVSendFormContainer