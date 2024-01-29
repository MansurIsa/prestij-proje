import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";



export const MainSlice = createSlice({
    name: "MAIN_SLICE",
    initialState: initialState,
    reducers: {
        getBannerListArr: (state, action) => {
            state.isHeaderLoading = false
            state.bannerListArr = action.payload


        },
        getContactInfoListArr: (state, action) => {
            state.contactInfoArr = action.payload

        },
        getServicesListArr: (state, action) => {
            state.servicesListArr = action.payload.reverse()
        },
        getNewsListArr: (state, action) => {
            state.newsListArr = action.payload
        },
        getVideoGalleryListArr: (state, action) => {
            state.videoGalleryListArr = action.payload
        },
        getFotoGalleryListArr: (state, action) => {
            state.fotoGalleryListArr = action.payload
        },
        getEditionListArr: (state, action) => {
            state.editionListArr = action.payload
        },
        getEditionRetrieveObj: (state, action) => {
            state.editionRetrieveObj = action.payload
        },
        getTeachersListArr: (state, action) => {
            state.teachersListArr = action.payload
        },
        getSuccessListArr: (state, action) => {
            state.successListArr = action.payload
        },
        getSuccessItemListArr: (state, action) => {
            state.successItemListArr = action.payload
        },
        getNewsRetrieveObj: (state, action) => {
            state.newsRetrieveObj = action.payload
        },
        getServiceRetrieveObj: (state, action) => {
            state.serviceRetrieveObj = action.payload
        },
        getTeacherRetrieveObj: (state, action) => {
            state.teacherRetrieveObj = action.payload
        },
        getSettingsListArr: (state, action) => {
            state.otherHeaderBannerLoading = false;
            state.settingsListArr = action.payload
        },
        getBranchListArr: (state, action) => {
            state.branchListArr = action.payload
        },
        contactNameChange: (state, action) => {
            state.contactNameValue = action.payload
        },
        contactEmailChange: (state, action) => {
            state.contactEmailValue = action.payload
        },
        contactSubjectChange: (state, action) => {
            state.contactSubjectValue = action.payload
        },
        contactMessageChange: (state, action) => {
            state.contactMessageValue = action.payload
        },

        vacancyNameChange: (state, action) => {
            state.vacancyName = action.payload
        },
        subjectToTeachChange: (state, action) => {
            state.subjectToTeach = action.payload
        },
        fullNameFatherChange: (state, action) => {
            state.fullNameFather = action.payload
        },
        homeNumberChange: (state, action) => {
            state.homeNumber = action.payload
        },
        emailChange: (state, action) => {
            state.email = action.payload
        },
        mobileNumberChange: (state, action) => {
            state.mobileNumber = action.payload
        },
        birthDateChange: (state, action) => {
            state.birthDate = action.payload
        },
        addressChange: (state, action) => {
            state.address = action.payload
        },
        workedDateStartEndChange: (state, action) => {
            state.workedDateStartEnd = action.payload
        },
        workedDateStartEndSecondChange: (state, action) => {
            state.workedDateStartEndSecond = action.payload
        },
        workedDateStartEndThirdChange: (state, action) => {
            state.workedDateStartEndThird = action.payload
        },
        companyNameAddressFieldSecondChange: (state, action) => {
            state.companyNameAddressFieldSecond = action.payload
        },
        companyNameAddressFieldChange: (state, action) => {
            state.companyNameAddressField = action.payload
        },
        companyNameAddressFieldThirdChange: (state, action) => {
            state.companyNameAddressFieldThird = action.payload
        },
        positionMainObligationChange: (state, action) => {
            state.positionMainObligation = action.payload
        },
        positionMainObligationSecondChange: (state, action) => {
            state.positionMainObligationSecond = action.payload
        },
        positionMainObligationThirdChange: (state, action) => {
            state.positionMainObligationThird = action.payload
        },
        reasonForLeavingChange: (state, action) => {
            state.reasonForLeaving = action.payload
        },
        reasonForLeavingSecondChange: (state, action) => {
            state.reasonForLeavingSecond = action.payload
        },
        reasonForLeavingThirdChange: (state, action) => {
            state.reasonForLeavingThird = action.payload
        },
        studiedDateStartEndChange: (state, action) => {
            state.studiedDateStartEnd = action.payload
        },
        studiedUniversityChange: (state, action) => {
            state.studiedUniversity = action.payload
        },
        studiedUniversitySecondChange: (state, action) => {
            state.studiedUniversitySecond = action.payload
        },
        studiedUniversityThirdChange: (state, action) => {
            state.studiedUniversityThird = action.payload
        },
        studiedDateStartEndSecondChange: (state, action) => {
            state.studiedDateStartEndSecond = action.payload
        },
        studiedDateStartEndThirdChange: (state, action) => {
            state.studiedDateStartEndThird = action.payload
        },
        qualificationDegreeChange: (state, action) => {
            state.qualificationDegree = action.payload
        },
        qualificationDegreeSecondChange: (state, action) => {
            state.qualificationDegreeSecond = action.payload
        },
        qualificationDegreeThirdChange: (state, action) => {
            state.qualificationDegreeThird = action.payload
        },
        resultRateAverageChange: (state, action) => {
            state.resultRateAverage = action.payload
        },
        resultRateAverageSecondChange: (state, action) => {
            state.resultRateAverageSecond = action.payload
        },
        resultRateAverageThirdChange: (state, action) => {
            state.resultRateAverageThird = action.payload
        },
        dateOfParticipationStartEndChange: (state, action) => {
            state.dateOfParticipationStartEnd = action.payload
        },
        dateOfParticipationStartEndSecondChange: (state, action) => {
            state.dateOfParticipationStartEndSecond = action.payload
        },
        dateOfParticipationStartEndThirdChange: (state, action) => {
            state.dateOfParticipationStartEndThird = action.payload
        },
        qualificationChange: (state, action) => {
            state.qualification = action.payload
        },
        qualificationSecondChange: (state, action) => {
            state.qualificationSecond = action.payload
        },
        qualificationThirdChange: (state, action) => {
            state.qualificationThird = action.payload
        },
        placeOfExecutedChange: (state, action) => {
            state.placeOfExecuted = action.payload
        },
        placeOfExecutedSecondChange: (state, action) => {
            state.placeOfExecutedSecond = action.payload
        },
        placeOfExecutedThirdChange: (state, action) => {
            state.placeOfExecutedThird = action.payload
        },
        achievementsChange: (state, action) => {
            state.achievements = action.payload
        },
        achievementsSecondChange: (state, action) => {
            state.achievementsSecond = action.payload
        },
        achievementsThirdChange: (state, action) => {
            state.achievementsThird = action.payload
        },
        otherAchievmentsChange: (state, action) => {
            state.otherAchievments = action.payload
        },
        recommendfullNameFatherChange: (state, action) => {
            state.recommendfullNameFather = action.payload
        },
        recommendfullNameFatherSecondChange: (state, action) => {
            state.recommendfullNameFatherSecond = action.payload
        },
        recommendMobileNumberChange: (state, action) => {
            state.recommendMobileNumber = action.payload
        },
        recommendMobileNumberSecondChange: (state, action) => {
            state.recommendMobileNumberSecond = action.payload
        },
        relatedToChange: (state, action) => {
            state.relatedTo = action.payload
        },
        relatedToSecondChange: (state, action) => {
            state.relatedToSecond = action.payload
        },
        headerLoading: (state) => {
            state.isHeaderLoading = true
        },
        otherHeaderLoading: (state) => {
            state.otherHeaderBannerLoading = true
        },
        getBranchsListArr: (state, action) => {
            state.branchsListArr = action.payload
        },
        getBranchsSeasonsListArr: (state, action) => {
            state.branchsSeasonsListArr = action.payload
        },
        getBranchsId: (state, action) => {
            state.branchsId = action.payload
        },
        seasonsSelectChange: (state, action) => {

            state.seasonSelectValue = action.payload
        },
        getBranchsStudentsListArr: (state, action) => {
            state.branchsStudentsListArr = action.payload
        },
        getBranchsTeachersListArr: (state, action) => {
            state.branchsTeachersListArr = action.payload
        },
        getBranchsAbiturientsListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsBlocksListArr: (state, action) => {
            state.branchsBlocksListArr = action.payload
        },
        getBranchsClassesListArr: (state, action) => {
            state.branchsClassessListArr = action.payload
        },
        getBranchsSubjectsListArr: (state, action) => {
            state.branchsSubjectsListArr = action.payload
        },
        getBranchsGroupsListArr: (state, action) => {
            state.branchsGroupsListArr = action.payload
        },
        getBranchsMasterForeignLanguageListArr: (state, action) => {
            state.branchsMasterForeignLanguageListArr = action.payload
        },
        getBranchsMasterSubjectListArr: (state, action) => {
            state.branchsMasterSubjectListArr = action.payload
        },
        getBranchsMasterGrouptListArr: (state, action) => {
            state.branchsMasterGrouptListArr = action.payload
        },
        getBranchsMiqSubjectstListArr: (state, action) => {
            state.branchsMiqSubjectstListArr = action.payload
        },
        getBranchsBlockAbiturientsListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsClassAbiturientsListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsSubjectAbiturientsListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsGroupAbiturientsListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsForeignLanguageListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsSubjectMasterListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsGroupMasterListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsSubjectMiqListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsCivilSubjectstListArr: (state, action) => {
            state.branchsCivilSubjectstListArr = action.payload
        },
        getBranchsSubjectCivilListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsForeignLanguageList2Arr: (state, action) => {
            state.branchsForeignLanguageList2Arr = action.payload
        },
        getBranchsComputerCourseListArr: (state, action) => {
            state.getBranchsComputerCourseArr = action.payload
        },
        getBranchsComputerCourseListArr2: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsAccountingListArr: (state, action) => {
            state.branchsAccountingListArr = action.payload
        },
        getBranchsHighSchoolClassListArr: (state, action) => {
            state.branchsHighSchoolClassListArr = action.payload
        },
        getBranchsHighSchoolSubjectListArr: (state, action) => {
            state.branchsHighSchoolSubjectListArr = action.payload
        },
        getBranchsHighSchoolGroupListArr: (state, action) => {
            state.branchsHighSchoolGroupListArr = action.payload
        },
        getBranchsHandleHighSchoolClassListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsHandleHighSchoolSubjectListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsHandleHighSchoolGroupListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsPreSchoolSubjectListArr: (state, action) => {
            state.branchsPreSchoolSubjectListArr = action.payload
        },
        getBranchsHandlePreSchoolSubjectListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsPrimarySchoolClassListArr: (state, action) => {
            state.branchsPrimarySchoolClassListArr = action.payload
        },
        getBranchsHandlePrimarySchoolClassListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsPrimarySchoolSubjectListArr: (state, action) => {
            state.branchsPrimarySchoolSubjectListArr = action.payload
        },
        getBranchsHandlePrimarySchoolSubjectListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsPrimarySchoolGrouptListArr: (state, action) => {
            state.branchsPrimarySchoolGroupListArr = action.payload
        },
        getBranchsHandlePrimarySchoolGroupListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsMasterListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsMiqListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsCivilListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsComputerCourseAllListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsHighSchoolListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsPreSchoolListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getBranchsPrimarySchoolListArr: (state, action) => {
            state.branchsBlockAbiturientsListArr = action.payload
        },
        getAccountingSeasonMonthListArr: (state, action) => {
            state.accountingSeasonMonthListArr = action.payload
        },
        monthSelectChange: (state, action) => {
            state.monthSelectValue = action.payload
            state.changeMonth = true
        },
        getAccountingTeacherMonthPaymentListArr: (state, action) => {
            state.accountingTeacherMonthPaymentListArr = action.payload
        },
        getAccountingAbiturientMonthPaymentListArr: (state, action) => {
            state.accountingAbiturientMonthPaymentListArr = action.payload
        },
        getAccountingMasterMonthPaymentListArr: (state, action) => {
            state.accountingMasterMonthPaymentListArr = action.payload
        },
        getAccountingMiqMonthPaymentListArr: (state, action) => {
            state.accountingMiqMonthPaymentListArr = action.payload
        },
        getAccountingCivilMonthPaymentListArr: (state, action) => {
            state.accountingCivilMonthPaymentListArr = action.payload
        },
        getAccountingForeignlanguageMonthPaymentListArr: (state, action) => {
            state.accountingForeignlanguageMonthPaymentListArr = action.payload
        },
        getAccountingComputerCourseMonthPaymentListArr: (state, action) => {
            state.accountingComputerCourseMonthPaymentListArr = action.payload
        },
        getAccountingAccountingMonthPaymentListArr: (state, action) => {
            state.accountingAccountingMonthPaymentListArr = action.payload
        },
        getAccountingHighSchoolMonthPaymentListArr: (state, action) => {
            state.accountingHighSchoolMonthPaymentListArr = action.payload
        },
        getAccountingPreSchoolMonthPaymentListArr: (state, action) => {
            state.accountingPreSchoolMonthPaymentListArr = action.payload
        },
        getAccountingPrimarySchoolMonthPaymentListArr: (state, action) => {
            state.accountingPrimarySchoolMonthPaymentListArr = action.payload
        },
        getMonthSelVal: (state, action) => {
            state.monthSelVal = action.payload
        },
        getAccountingMonthAbiturientPaymentListArr: (state, action) => {
            state.accountingMonthAbiturientPaymentListArr = action.payload
        },
        getAccountingMonthMasterPaymentListArr: (state, action) => {
            state.accountingMonthMasterPaymentListArr = action.payload
        },
        getAccountingMonthMiqPaymentListArr: (state, action) => {
            state.accountingMonthMiqPaymentListArr = action.payload
        },
        getAccountingMonthCivilPaymentListArr: (state, action) => {
            state.accountingMonthCivilPaymentListArr = action.payload
        },
        getAccountingMonthComputerCoursePaymentListArr: (state, action) => {
            state.accountingMonthComputerCoursePaymentListArr = action.payload
        },
        getAccountingMonthForeiginLangPaymentListArr: (state, action) => {
            state.accountingMonthForeiginLangPaymentListArr = action.payload
        },
        getAccountingMonthAccountingPaymentListArr: (state, action) => {
            state.accountingMonthAccountingPaymentListArr = action.payload
        },
        getAccountingMonthHighSchoolPaymentListArr: (state, action) => {
            state.accountingMonthHighSchoolPaymentListArr = action.payload
        },
        getAccountingMonthPreSchoolPaymentListArr: (state, action) => {
            state.accountingMonthPreSchoolPaymentListArr = action.payload
        },
        getAccountingMonthPrimarySchoolPaymentListArr: (state, action) => {
            state.accountingMonthPrimarySchoolPaymentListArr = action.payload
        },
        getAccountingMonthTeachersPaymentListArr: (state, action) => {
            state.accountingMonthTeachersPaymentListArr = action.payload
        },
        getLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload
        },
        getLoggedInEmail: (state, action) => {
            state.loggedInEmail = action.payload
        },
        getNotificationListArr: (state, action) => {
            state.notificationListArr = action.payload
        },
        setUnreadCount: (state, action) => {
            state.unreadCount = action.payload
        },
        courseOnlineRegTeacherFullNameFunc: (state, action) => {
            state.courseOnlineRegTeacherFullName = action.payload
        },
        courseOnlineRegTeacherEmailFunc: (state, action) => {
            state.courseOnlineRegTeacherEmail = action.payload
        },
        courseOnlineRegTeacherMobilNumberFunc: (state, action) => {
            state.courseOnlineRegTeacherMobilNumber = action.payload
        },
        courseOnlineRegTeacherPassportCardFunc: (state, action) => {
            state.courseOnlineRegTeacherPassportCard = action.payload
        },
        courseOnlineRegTeacherProfessionFunc: (state, action) => {
            state.courseOnlineRegTeacherProfession = action.payload
        },
        courseOnlineRegTeacherSelectFunc: (state, action) => {
            state.courseOnlineRegTeacherSelect = action.payload
        },
        courseOnlineRegAbiturientFullNameFunc: (state, action) => {
            state.courseOnlineRegAbiturientFullName = action.payload
        },
        courseOnlineRegAbiturientEmailFunc: (state, action) => {
            state.courseOnlineRegAbiturientEmail = action.payload
        },
        courseOnlineRegAbiturientMobilNumberFunc: (state, action) => {
            state.courseOnlineRegAbiturientMobilNumber = action.payload
        },




        courseOnlineRegAbiturientPassportCardFunc: (state, action) => {
            state.courseOnlineRegAbiturientPassportCard = action.payload
        },
        courseOnlineRegAbiturientSchoolFunc: (state, action) => {
            state.courseOnlineRegAbiturientSchool = action.payload
        },
        courseOnlineRegAbiturientSelectFunc: (state, action) => {
            state.courseOnlineRegAbiturientSelect = action.payload
        },
        courseOnlineRegAbiturientGroupFunc: (state, action) => {
            state.courseOnlineRegAbiturientGroup = action.payload
        },
        courseOnlineRegAbiturientClassFunc: (state, action) => {
            state.courseOnlineRegAbiturientClass = action.payload
        },
        courseOnlineRegAbiturientDimFunc: (state, action) => {
            state.courseOnlineRegAbiturientDim = action.payload
        },
        courseOnlineRegMasterFullNameFunc: (state, action) => {
            state.courseOnlineRegMasterFullName = action.payload
        },
        courseOnlineRegMasterEmailFunc: (state, action) => {
            state.courseOnlineRegMasterEmail = action.payload
        },
        courseOnlineRegMasterMobilNumberFunc: (state, action) => {
            state.courseOnlineRegMasterMobilNumber = action.payload
        },
        courseOnlineRegMasterPassportCardFunc: (state, action) => {
            state.courseOnlineRegMasterPassportCard = action.payload
        },
        courseOnlineRegMasterGraduatedUniFunc: (state, action) => {
            state.courseOnlineRegMasterGraduatedUni = action.payload
        },
        courseOnlineRegMasterProfessionFunc: (state, action) => {
            state.courseOnlineRegMasterProfession = action.payload
        },
        courseOnlineRegMasterForeignLangFunc: (state, action) => {
            state.courseOnlineRegMasterForeignLang = action.payload
        },

        courseOnlineRegMasterPointFunc: (state, action) => {
            state.courseOnlineRegMasterPoint = action.payload
        },

        courseOnlineRegMiqFullNameFunc: (state, action) => {
            state.courseOnlineRegMiqFullName = action.payload
        },
        courseOnlineRegMiqEmailFunc: (state, action) => {
            state.courseOnlineRegMiqEmail = action.payload
        },
        courseOnlineRegMiqMobilNumberFunc: (state, action) => {
            state.courseOnlineRegMiqMobilNumber = action.payload
        },
        courseOnlineRegMiqPassportCardFunc: (state, action) => {
            state.courseOnlineRegMiqPassportCard = action.payload
        },
        courseOnlineRegMiqGraduatedUniFunc: (state, action) => {
            state.courseOnlineRegMiqGraduatedUni = action.payload
        },
        courseOnlineRegMiqProfessionFunc: (state, action) => {
            state.courseOnlineRegMiqProfession = action.payload
        },


        courseOnlineRegCivilFullNameFunc: (state, action) => {
            state.courseOnlineRegCivilFullName = action.payload
        },
        courseOnlineRegCivilEmailFunc: (state, action) => {
            state.courseOnlineRegCivilEmail = action.payload
        },
        courseOnlineRegCivilMobilNumberFunc: (state, action) => {
            state.courseOnlineRegCivilMobilNumber = action.payload
        },
        courseOnlineRegCivilPassportCardFunc: (state, action) => {
            state.courseOnlineRegCivilPassportCard = action.payload
        },
        courseOnlineRegCivilGraduatedUniFunc: (state, action) => {
            state.courseOnlineRegCivilGraduatedUni = action.payload
        },


        courseOnlineRegComputerCourseFullNameFunc: (state, action) => {
            state.courseOnlineRegComputerCourseFullName = action.payload
        },
        courseOnlineRegComputerCourseEmailFunc: (state, action) => {
            state.courseOnlineRegComputerCourseEmail = action.payload
        },
        courseOnlineRegComputerCourseMobilNumberFunc: (state, action) => {
            state.courseOnlineRegComputerCourseMobilNumber = action.payload
        },
        courseOnlineRegComputerCoursePassportCardFunc: (state, action) => {
            state.courseOnlineRegComputerCoursePassportCard = action.payload
        },
        courseOnlineRegComputerCourseProgramTypeFunc: (state, action) => {
            state.courseOnlineRegComputerCourseProgramType = action.payload
        },


        courseOnlineRegForeignLangFullNameFunc: (state, action) => {
            state.courseOnlineRegForeignLangFullName = action.payload
        },
        courseOnlineRegForeignLangEmailFunc: (state, action) => {
            state.courseOnlineRegForeignLangEmail = action.payload
        },
        courseOnlineRegForeignLangMobilNumberFunc: (state, action) => {
            state.courseOnlineRegForeignLangMobilNumber = action.payload
        },
        courseOnlineRegForeignLangPassportCardFunc: (state, action) => {
            state.courseOnlineRegForeignLangPassportCard = action.payload
        },
        courseOnlineRegForeignLangLanguageFunc: (state, action) => {
            state.courseOnlineRegForeignLangLanguage = action.payload
        },


        courseOnlineRegAccountingFullNameFunc: (state, action) => {
            state.courseOnlineRegAccountingFullName = action.payload
        },
        courseOnlineRegAccountingEmailFunc: (state, action) => {
            state.courseOnlineRegAccountingEmail = action.payload
        },
        courseOnlineRegAccountingMobilNumberFunc: (state, action) => {
            state.courseOnlineRegAccountingMobilNumber = action.payload
        },
        courseOnlineRegAccountingPassportCardFunc: (state, action) => {
            state.courseOnlineRegAccountingPassportCard = action.payload
        },


        courseOnlineRegHighSchoolFullNameFunc: (state, action) => {
            state.courseOnlineRegHighSchoolFullName = action.payload
        },
        courseOnlineRegHighSchoolEmailFunc: (state, action) => {
            state.courseOnlineRegHighSchoolEmail = action.payload
        },
        courseOnlineRegHighSchoolMobilNumberFunc: (state, action) => {
            state.courseOnlineRegHighSchoolMobilNumber = action.payload
        },
        courseOnlineRegHighSchoolPassportCardFunc: (state, action) => {
            state.courseOnlineRegHighSchoolPassportCard = action.payload
        },
        courseOnlineRegHighSchoolClassFunc: (state, action) => {
            state.courseOnlineRegHighSchoolClass = action.payload
        },


        courseOnlineRegPreSchoolFullNameFunc: (state, action) => {
            state.courseOnlineRegPreSchoolFullName = action.payload
        },
        courseOnlineRegPreSchoolEmailFunc: (state, action) => {
            state.courseOnlineRegPreSchoolEmail = action.payload
        },
        courseOnlineRegPreSchoolMobilNumberFunc: (state, action) => {
            state.courseOnlineRegPreSchoolMobilNumber = action.payload
        },
        courseOnlineRegPreSchoolPassportCardFunc: (state, action) => {
            state.courseOnlineRegPreSchoolPassportCard = action.payload
        },


        courseOnlineRegPrimarySchoolFullNameFunc: (state, action) => {
            state.courseOnlineRegPrimarySchoolFullName = action.payload
        },
        courseOnlineRegPrimarySchoolEmailFunc: (state, action) => {
            state.courseOnlineRegPrimarySchoolEmail = action.payload
        },
        courseOnlineRegPrimarySchoolMobilNumberFunc: (state, action) => {
            state.courseOnlineRegPrimarySchoolMobilNumber = action.payload
        },
        courseOnlineRegPrimarySchoolPassportCardFunc: (state, action) => {
            state.courseOnlineRegPrimarySchoolPassportCard = action.payload
        },
        courseOnlineRegPrimarySchoolClassFunc: (state, action) => {
            state.courseOnlineRegPrimarySchoolClass = action.payload
        },
        branchCreateModalFunc: (state, action) => {
            state.branchCreateModal = true
        },
        modalOverlayFunc: (state) => {
            state.branchCreateModal = false
            state.branchUpdateModalContainer = false
            state.branchUpdateModal = false
            state.branchDeleteModalContainer = false
            state.seasonCreateModal = false
            state.seasonUpdateModalContainer = false
            state.seasonUpdateModal = false
            state.categoryCreateModal = false
            state.categoryUpdateModal = false
            state.studentCreateModal = false
            state.studentUpdateModalContainer = false
            state.studentUpdateModal = false
            state.categoryUpdateModalContainer = false
            state.classCreateModal = false
            state.classUpdateModal = false
            state.classUpdateModalContainer = false
            state.groupCreateModal = false
            state.groupUpdateModalContainer = false
            state.groupsUpdateModal = false
            state.languageCreateModal = false
            state.languageUpdateModalContainer = false
            state.languageUpdateModal = false
            state.blockCreateModal = false
            state.blockUpdateModal = false
            state.blockUpdateModalContainer = false
            state.subjectCreateModal = false
            state.subjectUpdateModalContainer = false
            state.subjectUpdateModal = false
            state.monthCreateModalContainer=false
            state.teacherCreateModal=false
            state.teacherUpdateModal=false
            state.teacherUpdateModalContainer=false
            state.studentPaymentCreateModalContainer=false
            state.teacherPaymentCreateModalContainer=false
            state.editStudentModalContainer=false
            state.editTeacherModalContainer=false
            state.accountantChangeModalContainer=false
            state.accountantUpdateModal=false



        },
        modalCloseFunc: (state) => {
            state.branchCreateModal = false
            state.branchUpdateModal = false
            state.branchUpdateModalContainer = false
            state.branchDeleteModalContainer = false
            state.seasonCreateModal = false
            state.seasonUpdateModalContainer = false
            state.seasonUpdateModal = false
            state.categoryCreateModal = false
            state.categoryUpdateModal = false
            state.categoryUpdateModalContainer = false
            state.classCreateModal = false
            state.classUpdateModal = false
            state.classUpdateModalContainer = false
            state.groupCreateModal = false
            state.groupUpdateModalContainer = false
            state.groupsUpdateModal = false
            state.languageCreateModal = false
            state.languageUpdateModalContainer = false
            state.languageUpdateModal = false
            state.blockCreateModal = false
            state.blockUpdateModal = false
            state.blockUpdateModalContainer = false
            state.subjectCreateModal = false
            state.subjectUpdateModalContainer = false
            state.subjectUpdateModal = false
            state.studentCreateModal = false
            state.studentUpdateModalContainer = false
            state.studentUpdateModal = false
            state.monthCreateModalContainer=false
            state.teacherCreateModal=false
            state.teacherUpdateModal=false
            state.teacherUpdateModalContainer=false
            state.studentPaymentCreateModalContainer=false
            state.teacherPaymentCreateModalContainer=false
            state.editStudentModalContainer=false
            state.editTeacherModalContainer=false
            state.accountantChangeModalContainer=false
            state.accountantUpdateModal=false

        },
        branchNameFunc: (state, action) => {
            state.branchName = action.payload
        },
        setRefreshed: (state) => {
            state.refreshed = true
        },
        branchUpdateModalFunc: (state, action) => {
            state.branchUpdateModal = true
            state.branchUpdateModalContainer = false
            state.branchUpdateName = action.payload.name
            state.branchObj = action.payload
        },
        branchUpdateModalContainerFunc: (state) => {
            state.branchUpdateModalContainer = true
        },
        branchUpdateNameFunc: (state, action) => {
            state.branchUpdateName = action.payload
        },
        branchDeleteModalContainerFunc: (state) => {
            state.branchDeleteModalContainer = true
        },
        seasonCreateModalFunc: (state) => {
            state.seasonCreateModal = true
        },
        seasonCreateNameFunc: (state, action) => {
            state.seasonCreateName = action.payload
        },

        seasonUpdateModalContainerFunc: (state, action) => {
            state.seasonUpdateModalContainer = true
        },
        seasonUpdateModalFunc: (state, action) => {
            state.seasonUpdateModal = true
            state.seasonUpdateModalContainer = false
            state.seasonUpdateName = action.payload.name
            state.seasonObj = action.payload
        },
        seasonUpdateNameFunc: (state, action) => {
            state.seasonUpdateName = action.payload
        },
        getCategoryListArr: (state, action) => {
            state.categoryListArr = action.payload
        },
        categoryCreateModalFunc: (state) => {
            state.categoryCreateModal = true
        },
        categoryCreateNameFunc: (state, action) => {
            state.categoryCreateName = action.payload
        },
        categoryUpdateModalContainerFunc: (state, action) => {
            state.categoryUpdateModalContainer = true
            // state.seasonUpdateModalContainer=false
            // state.seasonUpdateName=action.payload.name
            // state.seasonObj=action.payload
        },
        categoryUpdateModalFunc: (state, action) => {
            state.categoryUpdateModal = true
            state.categoryObj = action.payload
            state.categoryUpdateName = action.payload.name
            state.categoryUpdateModalContainer = false
        },
        categoryUpdateNameFunc: (state, action) => {
            state.categoryUpdateName = action.payload
        },
        studentCreateModalFunc: (state, action) => {
            state.studentCreateModal = true
        },
        studentCreateNameFunc: (state, action) => {
            state.studentCreateName = action.payload
        },

        studentCreateSurnameFunc: (state, action) => {
            state.studentCreateSurname = action.payload
        },

        studentCreateTelFirstFunc: (state, action) => {
            state.studentCreateTelFirst = action.payload
        },
        studentCreateTelSecondFunc: (state, action) => {
            state.studentCreateTelSecond = action.payload
        },
        studentCreateWpFunc: (state, action) => {
            state.studentCreateWp = action.payload
        },
        getStudentsListArr: (state, action) => {
            state.studentsListArr = action.payload
        },
        classCreateModalFunc: (state, action) => {
            state.classCreateModal = true
        },
        classesCreateNameFunc: (state, action) => {
            state.classesCreateName = action.payload
        },
        categoryChange: (state, action) => {
            state.categorySelectValue = action.payload
        },
        classUpdateModalContainerFunc: (state, action) => {
            state.classUpdateModalContainer = true
        },
        getClassesListArr: (state, action) => {
            state.classesListArr = action.payload
        },
        classesUpdateModalFunc: (state, action) => {
            state.classesObj = action.payload
            state.classUpdateModal = true
            state.classUpdateModalContainer = false
            state.classUpdateName = action.payload.name
            state.classUpdateSelectValue = action.payload.categories


            // state.categoryUpdateModal = true
            // state.categoryObj = action.payload
            // state.categoryUpdateName = action.payload.name
            // state.categoryUpdateModalContainer = false
        },
        classesUpdateNameFunc: (state, action) => {
            state.classUpdateName = action.payload
        },
        classUpdateCategoryChange: (state, action) => {
            state.classUpdateSelectValue = action.payload
        },
        groupCreateModalFunc: (state, action) => {
            state.groupCreateModal = true
        },
        groupsCreateNameFunc: (state, action) => {
            state.groupsCreateName = action.payload
        },
        groupUpdateModalContainerFunc: (state, action) => {
            state.groupUpdateModalContainer = true
        },
        getGroupsListArr: (state, action) => {
            state.groupsListArr = action.payload
        },
        groupsUpdateModalFunc: (state, action) => {
            state.groupsObj = action.payload
            state.groupsUpdateModal = true
            state.groupUpdateModalContainer = false
            state.groupsUpdateName = action.payload.name
            state.classUpdateSelectValue = action.payload.categories

        },
        groupsUpdateNameFunc: (state, action) => {
            state.groupsUpdateName = action.payload
        },
        languageCreateModalFunc: (state, action) => {
            state.languageCreateModal = true
        },
        languageCreateNameFunc: (state, action) => {
            state.languageCreateName = action.payload
        },
        languageUpdateModalContainerFunc: (state, action) => {
            state.languageUpdateModalContainer = true
        },
        getLanguageListArr: (state, action) => {
            state.languageListArr = action.payload
        },
        languageUpdateModalFunc: (state, action) => {
            state.languageUpdateModal = true
            state.languageObj = action.payload
            state.languageUpdateModalContainer = false
            state.languageUpdateName = action.payload.name
            state.classUpdateSelectValue = action.payload.categories

        },
        languageUpdateNameFunc: (state, action) => {
            state.languageUpdateName = action.payload
        },
        blockCreateModalFunc: (state, action) => {
            state.blockCreateModal = true
        },
        blockCreateNameFunc: (state, action) => {
            state.blockCreateName = action.payload
        },
        blockUpdateModalContainerFunc: (state, action) => {
            state.blockUpdateModalContainer = true
        },
        getBlockListArr: (state, action) => {
            state.blockListArr = action.payload
        },
        blockUpdateModalFunc: (state, action) => {
            state.blockUpdateModal = true
            state.blockObj = action.payload
            state.blockUpdateModalContainer = false
            state.blockUpdateName = action.payload.name
            state.classUpdateSelectValue = action.payload.categories

        },
        blockUpdateNameFunc: (state, action) => {
            state.blockUpdateName = action.payload
        },
        subjectCreateModalFunc: (state, action) => {
            state.subjectCreateModal = true
        },
        subjectCreateNameFunc: (state, action) => {
            state.subjectCreateName = action.payload
        },
        subjectUpdateModalContainerFunc: (state, action) => {
            state.subjectUpdateModalContainer = true
        },
        getSubjectListArr: (state, action) => {
            state.subjectListArr = action.payload
        },
        subjectUpdateModalFunc: (state, action) => {
            state.subjectUpdateModal = true
            state.subjectObj = action.payload
            state.subjectUpdateModalContainer = false
            state.subjectUpdateName = action.payload.name
            state.classUpdateSelectValue = action.payload.categories

        },
        subjectUpdateNameFunc: (state, action) => {
            state.subjectUpdateName = action.payload
        },
        studentCreateStatusValueFunc: (state, action) => {
            state.studentCreateStatusValue = action.payload
        },
        studentCreateDimPointFunc: (state, action) => {
            state.studentCreateDimPoint = action.payload
        },
        studentCreateSectorValueFunc: (state, action) => {
            state.studentCreateSectorValue = action.payload
        },
        studentCreateSpecialtyFunc: (state, action) => {
            state.studentCreateSpecialty = action.payload
        },
        studentCreatePaymentDateFunc: (state, action) => {
            state.studentCreatePaymentDate = action.payload
        },
        studentCreatePaymentMoneyFunc: (state, action) => {
            state.studentCreatePaymentMoney = action.payload
        },
        studentCreateSeasonSelectValueFunc: (state, action) => {
            state.studentCreateSeasonSelectValue = action.payload
        },
        studentCreateClassFunc: (state, action) => {
            state.studentCreateClass = action.payload
        },
        studentCreateGroupFunc: (state, action) => {
            state.studentCreateGroup = action.payload
        },
        studentCreateLanguageFunc: (state, action) => {
            state.studentCreateLanguage = action.payload
        },
        studentUpdateModalContainerFunc: (state, action) => {
            state.studentUpdateModalContainer = true
        },


        studentUpdateModalFunc: (state, action) => {
            state.studentUpdateModal = true
            state.studentObj = action.payload
            state.studentUpdateModalContainer = false
            state.studentUpdateName = action.payload.first_name
            state.studentUpdateSurname = action.payload.last_name
            state.studentUpdateTelFirst = action.payload.phone_number1
            state.studentUpdateTelSecond = action.payload.phone_number2
            state.studentUpdateWp = action.payload.wp_number
            state.studentUpdateStatusValue = action.payload.status
            state.studentUpdateDimPoint = action.payload.dim_point
            state.studentUpdateSectorValue = action.payload.sector
            state.studentUpdateSpecialty = action.payload.specialty
            state.studentUpdatePaymentDate = action.payload.payment_date
            state.studentUpdatePaymentMoney = action.payload.payment_amount
            state.studentUpdateSeasonSelectValue = action.payload.season?.id
            state.studentUpdateClass = action.payload.abiturient_class?.id
            state.studentUpdateGroup = action.payload.group?.id
            state.studentUpdateLanguage = action.payload.language
            state.studentUpdateCategories = action.payload.categories
            state.studentUpdateTeachers = action.payload.teachers
            state.studentUpdateBlocks = action.payload.blocks
            state.studentUpdateSubjects = action.payload.subjects

            // state.seasonStudentUpdateId

            let idX = state.branchsSeasonsListArr.find(data => data.id === action.payload.season.id)


            state.seasonStudentUpdateId = idX.id


        },


        studentUpdateNameFunc: (state, action) => {
            state.studentUpdateName = action.payload
        },

        studentUpdateSurnameFunc: (state, action) => {
            state.studentUpdateSurname = action.payload
        },

        studentUpdateTelFirstFunc: (state, action) => {
            state.studentUpdateTelFirst = action.payload
        },
        studentUpdateTelSecondFunc: (state, action) => {
            state.studentUpdateTelSecond = action.payload
        },
        studentUpdateWpFunc: (state, action) => {
            state.studentUpdateWp = action.payload
        },

        studentUpdateStatusValueFunc: (state, action) => {
            state.studentUpdateStatusValue = action.payload
        },
        studentUpdateDimPointFunc: (state, action) => {
            state.studentUpdateDimPoint = action.payload
        },
        studentUpdateSectorValueFunc: (state, action) => {
            state.studentUpdateSectorValue = action.payload
        },
        studentUpdateSpecialtyFunc: (state, action) => {
            state.studentUpdateSpecialty = action.payload
        },
        studentUpdatePaymentDateFunc: (state, action) => {
            state.studentUpdatePaymentDate = action.payload
        },
        studentUpdatePaymentMoneyFunc: (state, action) => {
            state.studentUpdatePaymentMoney = action.payload
        },
        studentUpdateSeasonSelectValueFunc: (state, action) => {
            state.studentUpdateSeasonSelectValue = action.payload
        },
        studentUpdateClassFunc: (state, action) => {
            state.studentUpdateClass = action.payload
        },
        studentUpdateGroupFunc: (state, action) => {
            state.studentUpdateGroup = action.payload
        },
        studentUpdateLanguageFunc: (state, action) => {
            state.studentUpdateLanguage = action.payload
        },
        // monthCreateModalContainerFunc: (state, action) => {
        //     state.monthCreateModalContainer = true
        // },



        teacherCreateModalFunc: (state, action) => {
            state.teacherCreateModal = true
        },
        teacherCreateNameFunc: (state, action) => {
            state.teacherCreateName = action.payload
        },
        teacherCreateSurnameFunc: (state, action) => {
            state.teacherCreateSurname = action.payload
        },
        teacherCreateTelFirstFunc: (state, action) => {
            state.teacherCreateTelFirst = action.payload
        },
        teacherCreateWpFunc: (state, action) => {
            state.teacherCreateWp = action.payload
        },
        teacherCreateSpecialtyFunc: (state, action) => {
            state.teacherCreateSpecialty = action.payload
        },
        teacherCreateSectionFunc: (state, action) => {
            state.teacherCreateSection = action.payload
        },
        teacherCreateSalaryFunc: (state, action) => {
            state.teacherCreateSalary = action.payload
        },
        teacherCreateStatusValueFunc: (state, action) => {
            state.teacherCreateStatusValue = action.payload
        },
        teacherCreatePaymentDateFunc: (state, action) => {
            state.teacherCreatePaymentDate = action.payload
        },
        teacherCreatePaymentMoneyFunc: (state, action) => {
            state.teacherCreatePaymentMoney = action.payload
        },
        teacherCreateSeasonSelectValueFunc: (state, action) => {
            state.teacherCreateSeasonSelectValue = action.payload
        },
        teacherUpdateModalContainerFunc: (state, action) => {
            state.teacherUpdateModalContainer = true
        },
        teacherUpdateModalFunc: (state, action) => {
            state.teacherUpdateModal = true
            state.teacherObj=action.payload
            state.teacherUpdateName=action.payload.first_name
            state.teacherUpdateSurname=action.payload.last_name
            state.teacherUpdateTelFirst=action.payload.phone_number1
            state.teacherUpdateWp=action.payload.wp_number
            state.teacherUpdateSpecialty=action.payload.specialty
            state.teacherUpdateSection=action.payload.section
            state.teacherUpdateSalary=action.payload.salary
            state.teacherUpdateStatusValue=action.payload.status
            state.teacherUpdatePaymentDate=action.payload.payment_date
            state.teacherUpdatePaymentMoney=action.payload.payment_amount
            state.teacherUpdateSeasonSelectValue=localStorage.getItem('selectedSeason')

        },



        teacherUpdateNameFunc: (state, action) => {
            state.teacherUpdateName = action.payload
        },
         teacherUpdateSurnameFunc: (state, action) => {
            state.teacherUpdateSurname = action.payload
        },
         teacherUpdateTelFirstFunc: (state, action) => {
            state.teacherUpdateTelFirst = action.payload
        },
         teacherUpdateWpFunc: (state, action) => {
            state.teacherUpdateWp = action.payload
        },
         teacherUpdateSpecialtyFunc: (state, action) => {
            state.teacherUpdateSpecialty = action.payload
        },

        teacherUpdateSectionFunc: (state, action) => {
            state.teacherUpdateSection = action.payload
        },
         teacherUpdateSalaryFunc: (state, action) => {
            state.teacherUpdateSalary = action.payload
        },
         teacherUpdateStatusValueFunc: (state, action) => {
            state.teacherUpdateStatusValue = action.payload
        },
         teacherUpdatePaymentDateFunc: (state, action) => {
            state.teacherUpdatePaymentDate = action.payload
        },
         teacherUpdatePaymentMoneyFunc: (state, action) => {
            state.teacherUpdatePaymentMoney = action.payload
        },

        teacherUpdateSeasonSelectValueFunc: (state, action) => {
            state.teacherUpdateSeasonSelectValue = action.payload
        },
        getAccountingStudentMonthPaymentListArr: (state, action) => {
            state.accountingStudentMonthPaymentListArr = action.payload
        },

        // studentPaymentCreateModalContainerFunc: (state, action) => {
        //     state.studentPaymentCreateModalContainer = true
        // },

        // teacherPaymentCreateModalContainerFunc: (state, action) => {
        //     state.teacherPaymentCreateModalContainer = true
        // },

        editStudentModalContainerFunc: (state, action) => {
            state.editStudentModalContainer = true
            state.editPaymentStudent=action.payload
            state.editPaymentStudentDate=action.payload.payment_date
            state.editPaidStudentDate=action.payload.paid_date
            state.editPaymentStudentAmount=action.payload.payment_amount
            state.editPaymentStudentType=action.payload.payment_type
            state.editPaymentStudentStatus=action.payload.status
        },
        editPaymentStudentDateFunc: (state, action) => {
            state.editPaymentStudentDate=action.payload
        },
        editPaidStudentDateFunc: (state, action) => {
            state.editPaidStudentDate=action.payload
        },
        editPaymentStudentAmountFunc: (state, action) => {
            state.editPaymentStudentAmount=action.payload
        },
        editPaymentStudentTypeFunc: (state, action) => {
            state.editPaymentStudentType=action.payload
        },
        editPaymentStudentStatusFunc: (state, action) => {
            state.editPaymentStudentStatus=action.payload
        },
        editTeacherModalContainerFunc:  (state, action) => {
            state.editTeacherModalContainer = true
            state.editPaymentTeacher=action.payload
            state.editPaymentTeacherDate=action.payload.payment_date
            state.editPaidTeacherDate=action.payload.paid_date
            state.editPaymentTeacherAmount=action.payload.payment_amount
            state.editPaymentTeacherType=action.payload.payment_type
            state.editPaymentTeacherStatus=action.payload.status
        },

        editPaymentTeacherDateFunc: (state, action) => {
            state.editPaymentTeacherDate=action.payload
        },
        editPaidTeacherDateFunc: (state, action) => {
            state.editPaidTeacherDate=action.payload
        },
        editPaymentTeacherAmountFunc: (state, action) => {
            state.editPaymentTeacherAmount=action.payload
        },
        editPaymentTeacherTypeFunc: (state, action) => {
            state.editPaymentTeacherType=action.payload
        },
        editPaymentTeacherStatusFunc: (state, action) => {
            state.editPaymentTeacherStatus=action.payload
        },
        branchChangeAccount: (state, action) => {
            state.branchSelectAccountValue=action.payload
        },

        accountantChangeModalContainerFunc: (state,action)=>{
            state.accountantChangeModalContainer=true
        },
        getAccountantsFunc: (state,action)=>{
            state.accountants=action.payload
        },
        accountantUpdateModalFunc:(state,action)=>{
            state.accountantObj=action.payload
            state.accountantUpdateModal=true
            state.accountantChangeModalContainer=false
            state.accountantName=action.payload.first_name
            state.accountantSurname=action.payload.last_name
            state.accountantEmail=action.payload.email
            state.isAccountantValue=action.payload.is_accountant
            state.accountantBranchSelectValue=action.payload.branch
        },
        accountantNameFunc: (state,action)=>{
            state.accountantName=action.payload
        },
        accountantSurnameFunc: (state,action)=>{
            state.accountantSurname=action.payload
        },
        accountantEmailFunc: (state,action)=>{
            state.accountantEmail=action.payload
        },
        isAccountantFunc: (state,action)=>{
            state.isAccountantValue=action.payload
        },
        accountantBranchSelectFunc: (state,action)=>{
            state.accountantBranchSelectValue=action.payload
        },

       
       


        


    }
});

export const Data = MainSlice.reducer;
export const {
    getBannerListArr,
    getContactInfoListArr,
    getServicesListArr,
    getNewsListArr,
    getVideoGalleryListArr,
    getFotoGalleryListArr,
    getTeachersListArr,
    getSuccessListArr,
    getSuccessItemListArr,
    getNewsRetrieveObj,
    getServiceRetrieveObj,
    getSettingsListArr,
    getBranchListArr,
    contactNameChange,
    contactEmailChange,
    contactSubjectChange,
    contactMessageChange,
    vacancyNameChange,
    subjectToTeachChange,
    fullNameFatherChange,
    homeNumberChange,
    emailChange,
    mobileNumberChange,
    birthDateChange,
    addressChange,
    workedDateStartEndChange,
    workedDateStartEndSecondChange,
    workedDateStartEndThirdChange,
    companyNameAddressFieldChange,
    companyNameAddressFieldSecondChange,
    companyNameAddressFieldThirdChange,
    positionMainObligationChange,
    positionMainObligationSecondChange,
    positionMainObligationThirdChange,
    reasonForLeavingChange,
    reasonForLeavingSecondChange,
    reasonForLeavingThirdChange,
    studiedDateStartEndChange,
    studiedDateStartEndSecondChange,
    studiedUniversityChange,
    studiedUniversitySecondChange,
    studiedUniversityThirdChange,
    studiedDateStartEndThirdChange,
    qualificationDegreeChange,
    qualificationDegreeSecondChange,
    qualificationDegreeThirdChange,
    resultRateAverageChange,
    resultRateAverageSecondChange,
    resultRateAverageThirdChange,
    dateOfParticipationStartEndChange,
    dateOfParticipationStartEndSecondChange,
    dateOfParticipationStartEndThirdChange,
    qualificationChange,
    qualificationSecondChange,
    qualificationThirdChange,
    placeOfExecutedChange,
    placeOfExecutedSecondChange,
    placeOfExecutedThirdChange,
    achievementsChange,
    achievementsSecondChange,
    achievementsThirdChange,
    otherAchievmentsChange,
    recommendfullNameFatherChange,
    recommendfullNameFatherSecondChange,
    recommendMobileNumberChange,
    recommendMobileNumberSecondChange,
    relatedToChange,
    relatedToSecondChange,
    headerLoading,
    otherHeaderLoading,
    getTeacherRetrieveObj,
    getEditionListArr,
    getEditionRetrieveObj,
    getBranchsListArr,
    getBranchsSeasonsListArr,
    getBranchsId,
    seasonsSelectChange,
    getBranchsStudentsListArr,
    getBranchsTeachersListArr,
    getBranchsAbiturientsListArr,
    getBranchsBlocksListArr,
    getBranchsClassesListArr,
    getBranchsSubjectsListArr,
    getBranchsGroupsListArr,
    getBranchsMasterForeignLanguageListArr,
    getBranchsMasterSubjectListArr,
    getBranchsMasterGrouptListArr,
    getBranchsMiqSubjectstListArr,
    getBranchsBlockAbiturientsListArr,
    getBranchsClassAbiturientsListArr,
    getBranchsSubjectAbiturientsListArr,
    getBranchsGroupAbiturientsListArr,
    getBranchsForeignLanguageListArr,
    getBranchsSubjectMasterListArr,
    getBranchsGroupMasterListArr,
    getBranchsSubjectMiqListArr,
    getBranchsCivilSubjectstListArr,
    getBranchsSubjectCivilListArr,
    getBranchsForeignLanguageList2Arr,
    getBranchsComputerCourseListArr,
    getBranchsComputerCourseListArr2,
    getBranchsAccountingListArr,
    getBranchsHighSchoolClassListArr,
    getBranchsHighSchoolSubjectListArr,
    getBranchsHighSchoolGroupListArr,
    getBranchsHandleHighSchoolClassListArr,
    getBranchsHandleHighSchoolSubjectListArr,
    getBranchsHandleHighSchoolGroupListArr,
    getBranchsPreSchoolSubjectListArr,
    getBranchsHandlePreSchoolSubjectListArr,
    getBranchsPrimarySchoolClassListArr,
    getBranchsHandlePrimarySchoolClassListArr,
    getBranchsPrimarySchoolSubjectListArr,
    getBranchsHandlePrimarySchoolSubjectListArr,
    getBranchsPrimarySchoolGrouptListArr,
    getBranchsHandlePrimarySchoolGroupListArr,
    getBranchsMasterListArr,
    getBranchsMiqListArr,
    getBranchsCivilListArr,
    getBranchsComputerCourseAllListArr,
    getBranchsHighSchoolListArr,
    getBranchsPreSchoolListArr,
    getBranchsPrimarySchoolListArr,
    getAccountingSeasonMonthListArr,
    monthSelectChange,
    getAccountingTeacherMonthPaymentListArr,
    getAccountingAbiturientMonthPaymentListArr,
    getAccountingMasterMonthPaymentListArr,
    getAccountingMiqMonthPaymentListArr,
    getAccountingCivilMonthPaymentListArr,
    getAccountingForeignlanguageMonthPaymentListArr,
    getAccountingComputerCourseMonthPaymentListArr,
    getAccountingAccountingMonthPaymentListArr,
    getAccountingHighSchoolMonthPaymentListArr,
    getAccountingPreSchoolMonthPaymentListArr,
    getAccountingPrimarySchoolMonthPaymentListArr,
    getMonthSelVal,
    getAccountingMonthAbiturientPaymentListArr,
    getAccountingMonthMasterPaymentListArr,
    getAccountingMonthMiqPaymentListArr,
    getAccountingMonthCivilPaymentListArr,
    getAccountingMonthComputerCoursePaymentListArr,
    getAccountingMonthForeiginLangPaymentListArr,
    getAccountingMonthAccountingPaymentListArr,
    getAccountingMonthHighSchoolPaymentListArr,
    getAccountingMonthPreSchoolPaymentListArr,
    getAccountingMonthPrimarySchoolPaymentListArr,
    getAccountingMonthTeachersPaymentListArr,
    getLoggedInUser,
    getLoggedInEmail,
    getNotificationListArr,
    setUnreadCount,
    courseOnlineRegTeacherFullNameFunc,
    courseOnlineRegTeacherEmailFunc,
    courseOnlineRegTeacherMobilNumberFunc,
    courseOnlineRegTeacherPassportCardFunc,
    courseOnlineRegTeacherProfessionFunc,
    courseOnlineRegTeacherSelectFunc,
    courseOnlineRegAbiturientFullNameFunc,
    courseOnlineRegAbiturientEmailFunc,
    courseOnlineRegAbiturientMobilNumberFunc,
    courseOnlineRegAbiturientPassportCardFunc,
    courseOnlineRegAbiturientSchoolFunc,
    courseOnlineRegAbiturientGroupFunc,
    courseOnlineRegAbiturientSelectFunc,
    courseOnlineRegAbiturientClassFunc,
    courseOnlineRegAbiturientDimFunc,
    courseOnlineRegMasterFullNameFunc,
    courseOnlineRegMasterEmailFunc,
    courseOnlineRegMasterMobilNumberFunc,
    courseOnlineRegMasterPassportCardFunc,
    courseOnlineRegMasterGraduatedUniFunc,
    courseOnlineRegMasterProfessionFunc,
    courseOnlineRegMasterForeignLangFunc,
    courseOnlineRegMasterPointFunc,

    courseOnlineRegMiqFullNameFunc,
    courseOnlineRegMiqEmailFunc,
    courseOnlineRegMiqMobilNumberFunc,
    courseOnlineRegMiqPassportCardFunc,
    courseOnlineRegMiqGraduatedUniFunc,
    courseOnlineRegMiqProfessionFunc,

    courseOnlineRegCivilFullNameFunc,
    courseOnlineRegCivilEmailFunc,
    courseOnlineRegCivilMobilNumberFunc,
    courseOnlineRegCivilPassportCardFunc,
    courseOnlineRegCivilGraduatedUniFunc,


    courseOnlineRegComputerCourseFullNameFunc,
    courseOnlineRegComputerCourseEmailFunc,
    courseOnlineRegComputerCourseMobilNumberFunc,
    courseOnlineRegComputerCoursePassportCardFunc,
    courseOnlineRegComputerCourseProgramTypeFunc,

    courseOnlineRegForeignLangFullNameFunc,
    courseOnlineRegForeignLangEmailFunc,
    courseOnlineRegForeignLangMobilNumberFunc,
    courseOnlineRegForeignLangPassportCardFunc,
    courseOnlineRegForeignLangLanguageFunc,

    courseOnlineRegAccountingFullNameFunc,
    courseOnlineRegAccountingEmailFunc,
    courseOnlineRegAccountingMobilNumberFunc,
    courseOnlineRegAccountingPassportCardFunc,

    courseOnlineRegHighSchoolFullNameFunc,
    courseOnlineRegHighSchoolEmailFunc,
    courseOnlineRegHighSchoolMobilNumberFunc,
    courseOnlineRegHighSchoolPassportCardFunc,
    courseOnlineRegHighSchoolClassFunc,

    courseOnlineRegPreSchoolFullNameFunc,
    courseOnlineRegPreSchoolEmailFunc,
    courseOnlineRegPreSchoolMobilNumberFunc,
    courseOnlineRegPreSchoolPassportCardFunc,

    courseOnlineRegPrimarySchoolFullNameFunc,
    courseOnlineRegPrimarySchoolEmailFunc,
    courseOnlineRegPrimarySchoolMobilNumberFunc,
    courseOnlineRegPrimarySchoolPassportCardFunc,
    courseOnlineRegPrimarySchoolClassFunc,
    branchCreateModalFunc,
    modalOverlayFunc,
    modalCloseFunc,
    branchNameFunc,
    setRefreshed,
    branchUpdateModalContainerFunc,
    branchUpdateModalFunc,
    branchUpdateNameFunc,
    branchDeleteModalContainerFunc,
    seasonCreateModalFunc,
    seasonCreateNameFunc,
    seasonUpdateModalFunc,
    seasonUpdateModalContainerFunc,
    seasonUpdateNameFunc,
    getCategoryListArr,
    categoryCreateModalFunc,
    categoryCreateNameFunc,
    categoryUpdateModalContainerFunc,
    categoryUpdateModalFunc,
    categoryUpdateNameFunc,
    studentCreateModalFunc,
    studentCreateNameFunc,
    studentCreateSurnameFunc,
    studentCreateTelFirstFunc,
    studentCreateTelSecondFunc,
    studentCreateWpFunc,
    // getStudentsListArr,
    classCreateModalFunc,
    classesCreateNameFunc,
    categoryChange,
    classUpdateModalContainerFunc,
    getClassesListArr,
    classesUpdateModalFunc,
    classesUpdateNameFunc,
    classUpdateCategoryChange,
    groupCreateModalFunc,
    groupsCreateNameFunc,
    groupUpdateModalContainerFunc,
    getGroupsListArr,
    groupsUpdateModalFunc,
    groupsUpdateNameFunc,
    languageCreateModalFunc,
    languageCreateNameFunc,
    languageUpdateModalContainerFunc,
    getLanguageListArr,
    languageUpdateModalFunc,
    languageUpdateNameFunc,
    blockCreateModalFunc,
    blockCreateNameFunc,
    blockUpdateModalContainerFunc,
    getBlockListArr,
    blockUpdateModalFunc,
    blockUpdateNameFunc,
    subjectCreateModalFunc,
    subjectCreateNameFunc,
    subjectUpdateModalContainerFunc,
    getSubjectListArr,
    subjectUpdateModalFunc,
    subjectUpdateNameFunc,
    studentCreateStatusValueFunc,
    studentCreateDimPointFunc,
    studentCreateSectorValueFunc,
    studentCreateSpecialtyFunc,
    studentCreatePaymentDateFunc,
    studentCreatePaymentMoneyFunc,
    studentCreateSeasonSelectValueFunc,
    studentCreateClassFunc,
    studentCreateGroupFunc,
    studentCreateLanguageFunc,
    studentUpdateModalContainerFunc,
    studentUpdateModalFunc,


    studentUpdateNameFunc,
    studentUpdateSurnameFunc,
    studentUpdateTelFirstFunc,
    studentUpdateTelSecondFunc,
    studentUpdateWpFunc,

    studentUpdateStatusValueFunc,
    studentUpdateDimPointFunc,
    studentUpdateSectorValueFunc,
    studentUpdateSpecialtyFunc,
    studentUpdatePaymentDateFunc,
    studentUpdatePaymentMoneyFunc,
    studentUpdateSeasonSelectValueFunc,
    studentUpdateClassFunc,
    studentUpdateGroupFunc,
    studentUpdateLanguageFunc,
    // monthCreateModalContainerFunc,




    teacherCreateModalFunc,
    teacherCreateNameFunc,
    teacherCreateSurnameFunc,
    teacherCreateTelFirstFunc,
    teacherCreateWpFunc,
    teacherCreateSpecialtyFunc,
    teacherCreateSectionFunc,
    teacherCreateSalaryFunc,
    teacherCreateStatusValueFunc,
    teacherCreatePaymentDateFunc,
    teacherCreatePaymentMoneyFunc,
    teacherCreateSeasonSelectValueFunc,

    teacherUpdateModalContainerFunc,
    teacherUpdateModalFunc,
    teacherUpdateNameFunc,
    teacherUpdateSurnameFunc,
    teacherUpdateTelFirstFunc,
    teacherUpdateWpFunc,
    teacherUpdateSpecialtyFunc,
    teacherUpdateSectionFunc,
    teacherUpdateSalaryFunc,
    teacherUpdateStatusValueFunc,
    teacherUpdatePaymentDateFunc,
    teacherUpdatePaymentMoneyFunc,
    teacherUpdateSeasonSelectValueFunc,
    getAccountingStudentMonthPaymentListArr,

    // studentPaymentCreateModalContainerFunc,
    // teacherPaymentCreateModalContainerFunc,
    editStudentModalContainerFunc,

    editPaymentStudentDateFunc,
    editPaidStudentDateFunc,
    editPaymentStudentAmountFunc,
    editPaymentStudentTypeFunc,
    editPaymentStudentStatusFunc,
    editTeacherModalContainerFunc,
    editPaymentTeacherDateFunc,
    editPaidTeacherDateFunc,
    editPaymentTeacherAmountFunc,
    editPaymentTeacherTypeFunc,
    editPaymentTeacherStatusFunc,
    branchChangeAccount,
    accountantChangeModalContainerFunc,
    getAccountantsFunc,
    accountantUpdateModalFunc,
    accountantNameFunc,
    accountantSurnameFunc,
    accountantEmailFunc,
    isAccountantFunc,
    accountantBranchSelectFunc,




   

} = MainSlice.actions;
