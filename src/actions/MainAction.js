import axios from "axios"
import { baseUrl } from "../MAIN_API";
import {headerLoading, getBannerListArr, getBranchListArr, getContactInfoListArr, getFotoGalleryListArr, getNewsListArr, getNewsRetrieveObj, getServiceRetrieveObj, getServicesListArr, getSettingsListArr, getSuccessItemListArr, getSuccessListArr, getTeachersListArr, getVideoGalleryListArr, otherHeaderLoading, getTeacherRetrieveObj, getEditionListArr, getEditionRetrieveObj, getBranchsListArr, getBranchsSeasonsListArr, getBranchsStudentsListArr, getBranchsTeachersListArr, getBranchsAbiturientsListArr, getBranchsBlocksListArr, getBranchsClassesListArr, getBranchsSubjectsListArr, getBranchsGroupsListArr, getBranchsMasterForeignLanguageListArr, getBranchsMasterSubjectListArr, getBranchsMasterGrouptListArr, getBranchsMiqSubjectstListArr, getBranchsBlockAbiturientsListArr, getBranchsClassAbiturientsListArr, getBranchsSubjectAbiturientsListArr, getBranchsGroupAbiturientsListArr, getBranchsForeignLanguageListArr, getBranchsSubjectListArr, getBranchsSubjectMasterListArr, getBranchsGroupMasterListArr, getBranchsSubjectMiqListArr, getBranchsCivilSubjectstListArr, getBranchsSubjectCivilListArr, getBranchsForeignLanguageList2Arr, getBranchsComputerCourseListArr, getBranchsComputerCourseListArr2, getBranchsAccountingListArr, getBranchsHighSchoolClassListArr, getBranchsHighSchoolSubjectListArr, getBranchsHighSchoolGroupListArr, getBranchsHandleHighSchoolClassListArr, getBranchsHandleHighSchoolSubjectListArr, getBranchsHandleHighSchoolGroupListArr, getBranchsPreSchoolSubjectListArr, getBranchsHandlePreSchoolSubjectListArr, getBranchsPrimarySchoolSubjectListArr, getBranchsPrimarySchoolClassListArr, getBranchsHandlePrimarySchoolClassListArr, getBranchsHandlePrimarySchoolSubjectListArr, getBranchsPrimarySchoolGrouptListArr, getBranchsHandlePrimarySchoolGroupListArr, getBranchsMasterListArr, getBranchsMiqListArr, getBranchsCivilListArr, getBranchsComputerCourseAllListArr, getBranchsHighSchoolListArr, getBranchsPreSchoolListArr, getBranchsPrimarySchoolListArr, getAccountingSeasonMonthListArr, getAccountingAbiturientMonthPaymentListArr, getAccountingMasterMonthPaymentListArr, getAccountingMiqMonthPaymentListArr, getAccountingCivilMonthPaymentListArr, getAccountingForeignlanguageMonthPaymentListArr, getAccountingComputerCourseMonthPaymentListArr, getAccountingAccountingMonthPaymentListArr, getAccountingHighSchoolMonthPaymentListArr, getAccountingPreSchoolMonthPaymentListArr, getAccountingPrimarySchoolMonthPaymentListArr, getAccountingTeacherMonthPaymentListArr, getAccountingMonthAbiturientPaymentListArr, getAccountingMonthMasterPaymentListArr, getAccountingMonthMiqPaymentListArr, getAccountingMonthCivilPaymentListArr, getAccountingMonthForeiginLangPaymentListArr, getAccountingMonthComputerCoursePaymentListArr, getAccountingMonthAccountingPaymentListArr, getAccountingMonthHighSchoolPaymentListArr, getAccountingMonthPreSchoolPaymentListArr, getAccountingMonthPrimarySchoolPaymentListArr, getAccountingMonthTeachersPaymentListArr, getLoggedInUser, getNotificationListArr, getCategoryListArr, getClassesListArr, getGroupsListArr, getLanguageListArr, getBlockListArr, getSubjectListArr, getAccountingStudentMonthPaymentListArr } from "../redux/MainReducer";


export const getBannerList=()=>async dispatch=>{
    dispatch(headerLoading())
    return await axios.get(baseUrl+"prestij/"+ "banners-list/")
    .then(resp=>{
        console.log(resp);
        
        dispatch(getBannerListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getContactInfoList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "contactinformation-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getContactInfoListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getServicesList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "service-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getServicesListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getNewsList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "news-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getNewsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getVideoGalleryList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "videogallery-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getVideoGalleryListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getFotoGalleryList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "photogallery-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getFotoGalleryListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getTeachersList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "teacher-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getTeachersListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getSuccessList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "success-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getSuccessListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getSuccessItemList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "successitem-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getSuccessItemListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getNewsRetrieveList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ `news-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getNewsRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getServiceRetrieveList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ `service-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getServiceRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getTeacherRetrieveList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ `teacher-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getTeacherRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getSettingsList=()=>async dispatch=>{
    dispatch(otherHeaderLoading())
    return await axios.get(baseUrl+"prestij/"+ "settings-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getSettingsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "branch-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getEditionList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "edition-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getEditionListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getPubliciationRetrieveList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ `edition-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getEditionRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsList=(email)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "branch-list/"+email,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsSeasonsList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "branch-season-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsSeasonsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsStudentsList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "season-student-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsStudentsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsTeachersList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "season-teacher-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsTeachersListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "abiturient-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getBranchsBlockAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "block-abiturient-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsBlockAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsBlocksList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "abiturient-block-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsBlocksListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsClassesList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "abiturient-class-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsClassesListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getBranchsSubjectsList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "abiturient-subject-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsSubjectsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsGroupsList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "abiturient-group-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsGroupsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsMasterList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "master-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsMasterListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsMasterForeignLanguageList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "master-foreignlanguage-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsMasterForeignLanguageListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsMasterSubjectList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "master-subject-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsMasterSubjectListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsMasterGrouptList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "master-group-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsMasterGrouptListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsMiqSubjectstList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "miq-subject-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsMiqSubjectstListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsClassAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "class-abiturient-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsClassAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsSubjectAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "subject-abiturient-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsSubjectAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsGroupAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "group-abiturient-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsGroupAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsForeignLanguageList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "foreignlanguage-master-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsForeignLanguageListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsSubjectMasterList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "subject-master-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsSubjectMasterListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsGroupMasterList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "group-master-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsGroupMasterListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsSubjectMiqList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "subject-miq-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsSubjectMiqListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsCivilSubjectstList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "civilservice-subject-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsCivilSubjectstListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsSubjectCivilList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "subject-civilservice-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsSubjectCivilListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsForeignLanguageList2=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "foreignlanguage-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsForeignLanguageList2Arr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsComputerCourseList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "computerprogram-type-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsComputerCourseListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsComputerList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "programtype-computercourse-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsComputerCourseListArr2(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsAccountingList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "accounting-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsAccountingListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsHighSchoolClassList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "highschool-class-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHighSchoolClassListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsHighSchoolSubjectList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "highschool-subject-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHighSchoolSubjectListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsHighSchoolGroupList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "highschool-group-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHighSchoolGroupListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsHandleHighSchoolClassList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "class-highschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHandleHighSchoolClassListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsHandleHighSchoolSubjectList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "subject-highschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHandleHighSchoolSubjectListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getBranchsHandleHighSchoolGroupList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "group-highschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHandleHighSchoolGroupListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsPreSchoolSubjectList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "preschool-subject-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsPreSchoolSubjectListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsHandlePreSchoolSubjectList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "subject-preschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHandlePreSchoolSubjectListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsPrimarySchoolClassList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "primaryschool-class-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsPrimarySchoolClassListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsHandlePrimarySchoolClassList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "class-primaryschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHandlePrimarySchoolClassListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsPrimarySchoolSubjectList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "primaryschool-subject-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsPrimarySchoolSubjectListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsHandlePrimarySchoolSubjectList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "subject-primaryschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHandlePrimarySchoolSubjectListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsPrimarySchoolGrouptList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "primaryschool-group-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsPrimarySchoolGrouptListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsHandlePrimarySchoolGroupList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "group-primaryschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHandlePrimarySchoolGroupListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsMiqList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "miq-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsMiqListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsCivilList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "civilservice-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsCivilListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsComputerCourseAllList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "computercourse-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsComputerCourseAllListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsHighSchoolList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "highschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsHighSchoolListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsPreSchoolList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "preschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsPreSchoolListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsPrimarySchoolList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"service/"+ "primaryschool-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsPrimarySchoolListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}



export const getAccountingSeasonMonthList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "season-month-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingSeasonMonthListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingTeacherMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "teacher-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingTeacherMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

// export const getAccountingAbiturientMonthPaymentList=(id)=>async dispatch=>{
//     return await axios.get(baseUrl+"accounting/"+ "abiturient-month-payment-list/"+ `${id}/`,{
//         headers:{
//             Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
//         }
//     })
//     .then(resp=>{
//         console.log(resp);
//         dispatch(getAccountingAbiturientMonthPaymentListArr(resp.data))
//     }).catch(err=>{
//         console.log(err);
//     })
// }

export const getAccountingAbiturientMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "student-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingAbiturientMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingStudentMonthPaymentList=(id,id2)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "student-category-month-payment-list/"+ `${id}/${id2}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingStudentMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingMasterMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "master-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMasterMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingMiqMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "miq-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMiqMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingCivilMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "civilservice-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingCivilMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingForeignlanguageMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "foreignlanguage-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingForeignlanguageMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingComputerCourseMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "computercourse-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingComputerCourseMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingAccountingMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "accounting-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingAccountingMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingHighSchoolMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "highschool-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingHighSchoolMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingPreSchoolMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "preschool-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingPreSchoolMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}



export const getAccountingPrimarySchoolMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "primaryschool-month-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingPrimarySchoolMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}




// export const getAccountingMonthAbiturientPaymentList=(id)=>async dispatch=>{
//     return await axios.get(baseUrl+"accounting/"+ "month-abiturient-payment-list/"+ `${id}/`,{
//         headers:{
//             Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
//         }
//     })
//     .then(resp=>{
//         console.log(resp);
//         dispatch(getAccountingMonthAbiturientPaymentListArr(resp.data))
//     }).catch(err=>{
//         console.log(err);
//     })
// }

export const getAccountingMonthAbiturientPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-student-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthAbiturientPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingMonthMasterPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-master-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthMasterPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingMonthMiqPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-miq-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthMiqPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingMonthCivilPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-civilservice-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthCivilPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingMonthComputerCoursePaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-computercourse-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthComputerCoursePaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingMonthForeiginLangPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-foreignlanguage-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthForeiginLangPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingMonthAccountingPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-accounting-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthAccountingPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingMonthHighSchoolPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-highschool-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthHighSchoolPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingMonthPreSchoolPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-preschool-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthPreSchoolPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}



export const getAccountingMonthPrimarySchoolPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-primaryschool-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthPrimarySchoolPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}




export const getAccountingMonthTeachersPaymentList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"accounting/"+ "month-teacher-payment-list/"+ `${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthTeachersPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getUser=(email)=>async dispatch=>{
    return await axios.get(baseUrl+"account/account/"+ `${email}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getLoggedInUser(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}



export const getNotificationList=()=>async dispatch=>{
    return await axios.get(baseUrl+"notification/notification-list/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getNotificationListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getCategoryList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/category-list-create/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getCategoryListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}





export const getclassesList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/class-list-create/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getClassesListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getGroupsList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/group-list-create/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getGroupsListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getLanguageList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/language-list-create/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getLanguageListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getBlockList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/block-list-create/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBlockListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getSubjectList=()=>async dispatch=>{
    return await axios.get(baseUrl+"service/subject-list-create/",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getSubjectListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}













